import { Input } from '@/components/common';
import useMyInfo from '@/hooks/useMyInfo';
import { Mail } from 'lucide-react';

const ProfileInfo = () => {
  const { data } = useMyInfo();

  return (
    <section className='border-light-gray rounded-sm border bg-white p-6 sm:p-8'>
      <h3 className='text-dark mb-6 text-left text-xl leading-7 font-medium'>프로필 정보</h3>
      <div className='flex gap-8 max-sm:flex-col'>
        <div className='bg-primary flex h-20 max-w-20 min-w-20 items-center justify-center rounded-full text-2xl leading-8 font-semibold text-white'>
          {data?.name ? data.name[0] : '김'}
        </div>
        <div className='w-full space-y-4'>
          <Input
            label='이름'
            placeholder='홍길동'
            disabled
            value={data?.name || ''}
          />
          <Input
            label='이메일'
            placeholder='example@email.com'
            icon={<Mail size={16} />}
            disabled
            value={data?.email || ''}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileInfo;
