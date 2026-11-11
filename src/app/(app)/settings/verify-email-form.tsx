import { Button, InputOTP, LinkButton, Typography } from 'heroui-native';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

export function VerifyEmailForm() {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleResend = () => {
    setTimeLeft(60);
  };

  return (
    <View className='flex-1 items-center gap-3'>
      <InputOTP maxLength={6} onComplete={(code) => console.log(code)}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>

      {timeLeft > 0 ? (
        <Typography.Paragraph type='body-xs' className='text-muted self-start'>
          Resend available in {formatTime(timeLeft)}
        </Typography.Paragraph>
      ) : (
        <View className='flex-row gap-1 self-start'>
          <Typography.Paragraph type='body-xs' className='text-muted'>
            Didn&apos;t get the code?
          </Typography.Paragraph>
          <LinkButton onPress={handleResend}>
            <LinkButton.Label className='text-accent text-xs'>
              Resend code
            </LinkButton.Label>
          </LinkButton>
        </View>
      )}

      <Button className='mt-auto w-full rounded-2xl'>Verify code</Button>
    </View>
  );
}
