import { env } from '@/config/env';
// import { useNotifications } from '@/components/ui/notifications';

type RequestOptions = {
  method?: string;
  headers?: Record<string, string>;
  body?: any;
  params?: Record<string, string | number | boolean | undefined | null>;
};

function buildUrlWithParams(
  url: string,
  params?: RequestOptions['params'],
): string {
  if (!params) return url;
  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== null,
    ),
  );
  if (Object.keys(filteredParams).length === 0) return url;
  const queryString = new URLSearchParams(
    filteredParams as Record<string, string>,
  ).toString();
  return `${url}?${queryString}`;
}

async function fetchApi<T>(
  url: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = 'GET', headers = {}, body, params } = options;

  const fullUrl = buildUrlWithParams(`${env.API_URL}${url}`, params);

  const response = await fetch(fullUrl, {
    method,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const data = await response.json().catch(() => null);
    const message = data?.message ?? data?.detail ?? response.statusText;

    // TODO: Add notification for error handling
    // if (typeof window !== 'undefined') {
    //   useNotifications.getState().addNotification({
    //     type: 'error',
    //     title: 'Error',
    //     message,
    //   });

    throw new Error(message);
  }

  if (response.status === 204) return undefined as T; // Return an empty object for 204 No Content responses
  return response.json();
}

export const api = {
  get<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: 'GET' });
  },
  post<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: 'POST', body });
  },
  put<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: 'PUT', body });
  },
  patch<T>(url: string, body?: any, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: 'PATCH', body });
  },
  delete<T>(url: string, options?: RequestOptions): Promise<T> {
    return fetchApi<T>(url, { ...options, method: 'DELETE' });
  },
};
