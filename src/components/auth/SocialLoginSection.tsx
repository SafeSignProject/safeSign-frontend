import { GoogleIcon, KakaoIcon } from '@/assets';
import { Button } from '@/components/common';

const SocialLoginSection = () => {
  return (
    <>
      <Button
        type='button'
        label='Google 로그인'
        icon={<GoogleIcon />}
        className='text-dark border-light-gray h-12.5 w-full border bg-inherit font-medium hover:brightness-95 active:brightness-90'
      />
      <Button
        type='button'
        label='카카오 로그인'
        icon={<KakaoIcon />}
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
