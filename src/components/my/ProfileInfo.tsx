import { Button, Input } from '@/components/common';
import { userEditSchema, type userEditType } from '@/schemas/userEditSchema';
import { showToast } from '@/utils/toast';
import { zodResolver } from '@hookform/resolvers/zod';
import { Calendar, Mail, Phone } from 'lucide-react';
import { useForm, type SubmitHandler } from 'react-hook-form';

const ProfileInfo = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<userEditType>({
    resolver: zodResolver(userEditSchema),
    mode: 'onChange', // 실시간 validation
    defaultValues: {
      name: '정찬원',
      birth: '2001-05-22',
      email: 'jcw0522@gachon.ac.kr',
      phone: '010-3104-5118',
    },
  });

  const onSubmit: SubmitHandler<userEditType> = async (data) => {
    try {
      console.log('변경사항 저장 성공:', data);
      showToast.success('프로필 정보가 변경되었습니다');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className='border-light-gray mt-52 rounded-sm border bg-white p-8'>
      <h3 className='text-dark mb-6 text-left text-xl leading-7 font-medium'>프로필 정보</h3>
      <div className='flex gap-8'>
        <div className='bg-primary flex h-20 w-20 items-center justify-center rounded-full text-2xl leading-8 font-semibold text-white'>
          정
        </div>
        <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>
          <div className='flex items-center gap-4'>
            <Input
              label='이름'
              placeholder='홍길동'
              {...register('name')}
              error={errors.name?.message}
              className='w-full'
            />
            <Input
              label='생년월일'
              placeholder='2000-01-01'
              icon={<Calendar size={16} />}
              {...register('birth')}
              error={errors.birth?.message}
              className='w-full'
            />
          </div>
          <Input
            label='이메일'
            placeholder='example@email.com'
            icon={<Mail size={16} />}
            {...register('email')}
            error={errors.email?.message}
            className='w-full'
          />
          <Input
            label='휴대폰 번호'
            placeholder='010-1234-1234'
            icon={<Phone size={16} />}
            {...register('phone')}
            error={errors.phone?.message}
            className='w-full'
          />
          <Button
            type='submit'
            label='변경사항 저장'
            disabled={!isValid}
            className='bg-primary mt-8 h-10 px-5.5 font-medium text-white hover:brightness-90 active:brightness-80'
          />
        </form>
      </div>
    </section>
  );
};

export default ProfileInfo;
