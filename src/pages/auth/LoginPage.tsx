import AuthHeader from '@/components/header/authHeader';

export const LoginPage = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-6'>
      <AuthHeader title='시작하기' desc='계정을 선택하여 로그인하세요' />
    </div>
  );
};
