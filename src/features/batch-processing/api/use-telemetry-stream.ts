import { useEffect, useState } from 'react';
import { Telemetry, TelemetryMessage } from '../types';
import EventSource, { EventSourceListener } from 'react-native-sse';
import { env } from '@/config/env';

export function useTelemetryStream(machineId: string) {
  const [telemetry, setTelemetry] = useState<Telemetry | null>(null);

  useEffect(() => {
    const es = new EventSource(
      `${env.API_URL}/api/machines/${machineId}/stream`,
      {
        // headers: {
        //   Authorization: {
        //     toString: function () {
        //       return 'Bearer ' + token;
        //     },
        //   },
        // },
      },
    );

    const listener: EventSourceListener = (e) => {
      if (e.type === 'open') {
        console.log('Open SSE connection.');
      } else if (e.type === 'message') {
        if (!e.data) return;
        const msg = JSON.parse(e.data) as TelemetryMessage;
        setTelemetry(msg.payload);
      } else if (e.type === 'error') {
        console.error('Connection error:', e.message);
      } else if (e.type === 'exception') {
        console.error('Error:', e.message, e.error);
      }
    };

    es.addEventListener('open', listener);
    es.addEventListener('message', listener);
    es.addEventListener('error', listener);

    return () => {
      es.removeAllEventListeners();
      es.close();
    };
  }, [machineId]);

  return telemetry;
}
