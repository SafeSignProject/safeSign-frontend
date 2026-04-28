import LoginForm from '@/components/auth/LoginForm';
import AuthHeader from '@/components/header/AuthHeader';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center space-y-6 p-4 py-12'>
      <AuthHeader title='시작하기' desc='계정을 선택하여 로그인하세요' />
      <LoginForm />
      <Link to='/' className='text-dark-gray text-sm hover:underline'>
        ← 홈으로 돌아가기
      </Link>
    </div>
  );
};
