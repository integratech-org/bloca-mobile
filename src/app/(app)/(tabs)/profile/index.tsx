import { Screen } from '@/components/screen';
import { StyledMaterialDesignIcons } from '@/components/styled-material-design-icons';
import ProfileHeader from '@/features/profile/components/profile-header';
import SettingsSection from '@/features/profile/components/settings-section';
import { router } from 'expo-router';
import { Button, Typography } from 'heroui-native';
import { ScrollView } from 'react-native';

export default function ProfileScreen() {
  return (
    <Screen>
      <ScrollView
        contentContainerClassName='p-4 gap-6'
        showsVerticalScrollIndicator={false}
      >
        <ProfileHeader name='John Doe' role='Operator' avatarUrl='' />

        <SettingsSection
          title='Account'
          items={[
            {
              icon: 'email-outline',
              label: 'Email',
              value: 'j•••@company.com',
              onPress: () => router.push('/profile/change-email'),
            },
            {
              icon: 'phone-outline',
              label: 'Contact Number',
              value: '+63 9•• ••• ••34',
              onPress: () => router.push('/profile/change-contact'),
            },
            {
              icon: 'map-marker-outline',
              label: 'Address',
              value: 'Brgy. •••, Quezon City',
              onPress: () => router.push('/profile/edit-address'),
            },
            {
              icon: 'lock-outline',
              label: 'Change Password',
              onPress: () => router.push('/profile/change-password'),
            },
          ]}
        />

        <SettingsSection
          title='Personalization'
          items={[
            {
              icon: 'monitor',
              label: 'Theme',
              value: 'System Default',
              onPress: () => {
                router.push('/profile/theme');
              },
            },
          ]}
        />

        <Button variant='danger-soft' className='rounded-2xl'>
          <StyledMaterialDesignIcons
            name='logout'
            size={18}
            className='text-danger'
          />
          <Typography.Paragraph type='body-xs' className='text-danger'>
            Logout
          </Typography.Paragraph>
        </Button>
      </ScrollView>
    </Screen>
  );
}
