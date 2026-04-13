import AuthHeader from '@/components/header/AuthHeader';

export const SignupPage = () => {
  return (
    <div className='flex flex-col items-center justify-center space-y-6'>
      <AuthHeader title='회원가입' desc='계정을 만들어 시작하세요' />
    </div>
  );
};
