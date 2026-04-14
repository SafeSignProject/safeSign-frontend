import { Link } from 'react-router-dom';
import SocialLoginSection from './SocialLoginSection';
import SignupInputSection from './SignupInputSection';

const SignupForm = () => {
  return (
    <div className='border-border-gray max-w-md space-y-4 rounded-sm border bg-white p-8'>
      <SocialLoginSection />

      <SignupInputSection />

      <div className='my-8 h-px flex-1 bg-[#E5E7EB]' />

      <p className='text-dark-gray text-center text-sm'>
        이미 계정이 있으신가요?{' '}
        <Link to='/login' className='text-primary font-medium hover:underline'>
          로그인
        </Link>
      </p>
    </div>
  );
};

export default SignupForm;
