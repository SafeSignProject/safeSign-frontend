import SignupForm from '@/components/auth/SignupForm';
import AuthHeader from '@/components/header/AuthHeader';
import { Link } from 'react-router-dom';

export const SignupPage = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-6'>
      <AuthHeader title='회원가입' desc='계정을 만들어 시작하세요' />
      <SignupForm />
      <Link to='/' className='text-dark-gray text-sm hover:underline'>
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
};
