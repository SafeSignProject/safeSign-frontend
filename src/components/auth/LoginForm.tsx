import { Button } from '@/components/common';
import { Mail } from 'lucide-react';
import SocialLoginSection from './SocialLoginSection';
import { useState } from 'react';
import LoginModal from '../modal/LoginModal';

const LoginForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className='border-light-gray max-w-md space-y-4 rounded-sm border bg-white p-8'>
      <SocialLoginSection />

      <Button
        type='button'
        label='이메일로 계속하기'
        icon={<Mail size={20} className='text-[#4B5563]' />}
        className='text-dark h-12.5 w-95.5 border border-[#E5E7EB] bg-inherit font-medium hover:brightness-95 active:brightness-90'
        onClick={() => setIsOpen(true)}
      />

      <div className='my-8 h-px flex-1 bg-[#E5E7EB]' />

      <p className='text-dark-gray text-center text-sm break-keep'>
        계속 진행하려면 <span className='text-primary'>이용약관</span>과{' '}
        <span className='text-primary'>개인정보처리방침</span>에 동의하는 것으로 간주됩니다.
      </p>

      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
    </section>
  );
};

export default LoginForm;
