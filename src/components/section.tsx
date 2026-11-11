import { tv, Typography } from 'heroui-native';
import type { Icon } from 'phosphor-react-native';
import { View } from 'react-native';
import { VariantProps } from 'tailwind-variants';
import { useCSSVariable } from 'uniwind';

const section = tv({
  slots: {
    title: 'font-medium uppercase tracking-wide',
    trailing: '',
  },
  variants: {
    variant: {
      default: {
        title: 'text-muted',
        trailing: 'text-muted',
      },
      success: {
        title: 'text-success',
        trailing: 'text-success',
      },
      danger: {
        title: 'text-danger',
        trailing: 'text-danger',
      },
      warning: {
        title: 'text-warning',
        trailing: 'text-warning',
      },
      info: {
        title: 'text-info',
        trailing: 'text-info',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type SectionVariants = VariantProps<typeof section>;

const ICON_COLOR_VAR = {
  default: '--color-muted',
  success: '--color-success',
  danger: '--color-danger',
  warning: '--color-warning',
  info: '--color-info',
} as const;

interface Props extends SectionVariants {
  /** Section title. Rendered as an uppercase label. */
  title: string;
  /** Optional text on the right side of the header (e.g. a count or status). */
  trailing?: string;
  /** Icon from `phosphor-react-native`. */
  icon?: Icon;
  children: React.ReactNode;
}

export function Section({
  title,
  trailing,
  icon: Icon,
  variant = 'default',
  children,
}: Props) {
  const slots = section({ variant });
  const iconColor = useCSSVariable(ICON_COLOR_VAR[variant]) as string;

  return (
    <View className='gap-2'>
      <View className='flex-row items-center justify-between px-1'>
        <View className='flex-row items-center gap-2'>
          {Icon && <Icon size={18} color={iconColor} />}

          <Typography.Paragraph
            type='body-xs'
            className={slots.title()}
            accessibilityRole='header'
          >
            {title}
          </Typography.Paragraph>
        </View>
        {trailing && (
          <Typography.Paragraph type='body-xs' className={slots.trailing()}>
            {trailing}
          </Typography.Paragraph>
        )}
      </View>

      {children}
    </View>
  );
}
