import { InputOTP } from 'heroui-native';

export function VerifyForm() {
  return (
    <InputOTP maxLength={6}>
      <InputOTP.Group className='flex-row gap-1.5'>
        <InputOTP.Slot index={0} className='max-w-11.25 flex-1' />
        <InputOTP.Slot index={1} className='max-w-11.25 flex-1' />
        <InputOTP.Slot index={2} className='max-w-11.25 flex-1' />
        <InputOTP.Slot index={3} className='max-w-11.25 flex-1' />
        <InputOTP.Slot index={4} className='max-w-11.25 flex-1' />
        <InputOTP.Slot index={5} className='max-w-11.25 flex-1' />
      </InputOTP.Group>
    </InputOTP>
  );
}
