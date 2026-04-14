import { GoogleIcon, KakaoIcon } from '@/assets';
import { Button } from '@/components/common';
import { Mail } from 'lucide-react';

const LoginForm = () => {
  return (
    <div className='border-border-gray max-w-md space-y-4 rounded-sm border bg-white p-8'>
      <Button
        type='button'
        label='Google 로그인'
        icon={<GoogleIcon />}
        className='text-dark h-12.5 w-95.5 border border-[#E5E7EB] bg-inherit font-medium hover:brightness-90 active:brightness-80'
      />
      <Button
        type='button'
        label='카카오 로그인'
        icon={<KakaoIcon />}
        className='text-dark h-12.5 w-95.5 bg-[#FEE500] font-medium hover:brightness-90 active:brightness-80'
      />

      <div className='my-6 flex items-center gap-4'>
        <div className='h-px flex-1 bg-[#E5E7EB]' />
        <span className='text-dark-gray text-sm leading-5'>또는</span>
        <div className='h-px flex-1 bg-[#E5E7EB]' />
      </div>

      <Button
        type='button'
        label='이메일로 계속하기'
        icon={<Mail size={20} className='text-[#4B5563]' />}
        className='text-dark h-12.5 w-95.5 border border-[#E5E7EB] bg-inherit font-medium hover:brightness-90 active:brightness-80'
      />

      <div className='my-8 h-px flex-1 bg-[#E5E7EB]' />

      <p className='text-dark-gray text-center text-sm break-keep'>
        계속 진행하려면 <span className='text-primary'>이용약관</span>과{' '}
        <span className='text-primary'>개인정보처리방침</span>에 동의하는 것으로 간주됩니다.
      </p>
    </div>
  );
};

export default LoginForm;
