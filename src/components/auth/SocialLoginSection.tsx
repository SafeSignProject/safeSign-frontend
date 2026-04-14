import { GoogleIcon, KakaoIcon } from '@/assets';
import { Button } from '@/components/common';

const SocialLoginSection = () => {
  return (
    <>
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
    </>
  );
};

export default SocialLoginSection;
