import { Link } from 'react-router-dom';
import SocialLoginSection from './SocialLoginSection';
import SignupInputSection from './SignupInputSection';

const SignupForm = () => {
  return (
    <section className='border-light-gray w-full max-w-md space-y-4 rounded-sm border bg-white p-6 sm:p-8'>
      <SocialLoginSection />

      <SignupInputSection />

      <div className='bg-light-gray my-7 h-px flex-1' />

      <p className='text-dark-gray text-center text-sm'>
        이미 계정이 있으신가요?{' '}
        <Link to='/login' className='text-primary font-medium hover:underline'>
          로그인
        </Link>
      </p>
    </section>
  );
};

export default SignupForm;
