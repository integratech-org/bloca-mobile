import { Screen } from '@/components/screen';
import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import { StyledRefreshControl } from '@/components/styled-refresh-control';
import { THEME_OPTIONS } from '@/constants/theme';
import { ProfileHeader } from '@/features/profile/components/profile-header';
import { SettingsSection } from '@/features/profile/components/settings-section';
import { useThemeStore } from '@/stores/theme-store';
import { router } from 'expo-router';
import { Button } from 'heroui-native';
import { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import { useCSSVariable } from 'uniwind';

export default function ProfileScreen() {
  const theme = useThemeStore((s) => s.theme);
  const { label, icon } = THEME_OPTIONS[theme];
  const accent = useCSSVariable('--color-accent') as string;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <Screen>
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
        refreshControl={
          <StyledRefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[accent]}
            tintColorClassName='accent-accent'
            progressBackgroundColorClassName='accent-surface'
          />
        }
      >
        <ProfileHeader name='John Doe' role='Operator' avatarUrl='' />

        <SettingsSection
          title='Account'
          items={[
            {
              icon: 'email-outline',
              label: 'Email',
              value: 'j•••@company.com',
              onPress: () => router.push('/(app)/settings/change-email'),
            },
            {
              icon: 'phone-outline',
              label: 'Contact Number',
              value: '+63 9•• ••• ••34',
              onPress: () => router.push('/(app)/settings/change-contact'),
            },
            {
              icon: 'map-marker-outline',
              label: 'Address',
              value: 'Brgy. •••, Quezon City',
              onPress: () => router.push('/(app)/settings/edit-address'),
            },
            {
              icon: 'lock-outline',
              label: 'Change Password',
              onPress: () => router.push('/(app)/settings/change-password'),
            },
          ]}
        />

        <SettingsSection
          title='Personalization'
          items={[
            {
              icon: icon,
              label: 'Theme',
              value: label,
              onPress: () => {
                router.push('/(app)/settings/theme');
              },
            },
          ]}
        />

        <Button
          variant='danger-soft'
          className='rounded-2xl'
          onPress={() => router.push('/(auth)/sign-in')}
        >
          <StyledMaterialDesignIcons
            name='logout'
            size={20}
            className='text-danger-soft-foreground'
          />
          <Button.Label>Log Out</Button.Label>
        </Button>
      </ScrollView>
    </Screen>
  );
}
