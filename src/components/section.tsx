import { MaterialDesignIconsIconName } from '@react-native-vector-icons/material-design-icons';
import { tv, Typography } from 'heroui-native';
import { View } from 'react-native';
import { StyledMaterialDesignIcons } from './styled-material-design-icons';
import { VariantProps } from 'tailwind-variants';

const section = tv({
  slots: {
    icon: '',
    title: 'font-medium uppercase tracking-wide',
    trailing: '',
  },
  variants: {
    variant: {
      default: {
        icon: 'text-muted',
        title: 'text-muted',
        trailing: 'text-muted',
      },
      success: {
        icon: 'text-success',
        title: 'text-success',
        trailing: 'text-success',
      },
      danger: {
        icon: 'text-danger',
        title: 'text-danger',
        trailing: 'text-danger',
      },
      warning: {
        icon: 'text-warning',
        title: 'text-warning',
        trailing: 'text-warning',
      },
      info: {
        icon: 'text-info',
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

interface Props extends SectionVariants {
  /** Section title. Rendered as an uppercase label. */
  title: string;
  /** Optional text on the right side of the header (e.g. a count or status). */
  trailing?: string;
  /**
   * Icon name from **Material Design Icons** only
   * (`@react-native-vector-icons/material-design-icons`).
   *
   * When adding an icon, make sure it comes from the MaterialDesignIcons set.
   * Don't use other icon libraries (Ionicons, FontAwesome, etc.) so the
   * app's look stays consistent.
   *
   * @see https://pictogrammers.com/library/mdi/ for the full icon list
   */
  icon?: MaterialDesignIconsIconName;
  children: React.ReactNode;
}

export function Section({ title, trailing, icon, variant, children }: Props) {
  const slots = section({ variant });

  return (
    <View className='gap-2'>
      <View className='flex-row items-center justify-between px-1'>
        <View className='flex-row items-center gap-2'>
          {icon && (
            <StyledMaterialDesignIcons
              name={icon}
              size={18}
              className={slots.icon()}
            />
          )}

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
