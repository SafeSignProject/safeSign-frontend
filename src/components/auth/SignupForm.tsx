import { GoogleIcon, KakaoIcon } from '@/assets';
import { Button, Input } from '@/components/common';
import { signupSchema, type SignupType } from '@/schemas/authSchema';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link, useNavigate } from 'react-router-dom';

const SignupForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignupType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      name: '',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<SignupType> = async (data) => {
    try {
      console.log('회원가입 성공:', data);
      navigate('/login');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='border-border-gray max-w-md space-y-4 rounded-sm border bg-white p-8'>
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
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <Input
          id='name'
          {...register('name')}
          label='이름'
          placeholder='홍길동'
          error={errors.name?.message}
        />
        <Input
          id='email'
          type='email'
          {...register('email')}
          label='이메일'
          placeholder='example@email.com'
          error={errors.email?.message}
        />
        <Input
          id='password'
          type='password'
          {...register('password')}
          label='비밀번호'
          placeholder='8자 이상 입력하세요'
          error={errors.password?.message}
        />
        <Input
          id='passwordConfirm'
          type='password'
          {...register('passwordConfirm')}
          label='비밀번호 확인'
          placeholder='비밀번호를 다시 입력하세요'
          error={errors.passwordConfirm?.message}
        />

        <p className='text-dark-gray text-sm break-keep'>
          <span className='text-primary'>이용약관</span>과{' '}
          <span className='text-primary'>개인정보처리방침</span>에 동의합니다.
        </p>

        <Button
          type='submit'
          label='가입하기'
          disabled={!isValid}
          className='bg-primary h-12.5 w-full leading-6 font-medium text-white hover:brightness-90 active:brightness-80'
        />
      </form>

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
