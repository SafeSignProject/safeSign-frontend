import { GoogleIcon, KakaoIcon } from '@/assets';
import { Button } from '@/components/common';

const OAUTH_URL = {
  google: 'https://safesign-ai.site/oauth2/authorization/google',
  kakao: 'https://safesign-ai.site/oauth2/authorization/kakao',
};

const SocialLoginSection = () => {
  const handleSocialLogin = (provider: 'google' | 'kakao') => {
    window.location.href = OAUTH_URL[provider];
  };

  return (
    <>
      <Button
        type='button'
        label='Google 로그인'
        icon={<GoogleIcon width='20' height='20' />}
        onClick={() => handleSocialLogin('google')}
        className='text-dark border-light-gray h-12.5 w-full border bg-inherit font-medium hover:brightness-95 active:brightness-90'
      />
      <Button
        type='button'
        label='카카오 로그인'
        icon={<KakaoIcon width='18' height='17' />}
        onClick={() => handleSocialLogin('kakao')}
        className='text-dark h-12.5 w-full bg-[#FEE500] font-medium hover:brightness-95 active:brightness-90'
      />

      <div className='my-6 flex items-center gap-4'>
        <div className='bg-light-gray h-px flex-1' />
        <span className='text-dark-gray text-sm'>또는</span>
        <div className='bg-light-gray h-px flex-1' />
      </div>
    </>
  );
};

export default SocialLoginSection;
