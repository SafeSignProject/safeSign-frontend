import { Button, Input } from '@/components/common';
import { signupSchema, type SignupType } from '@/schemas/authSchema';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Check } from 'lucide-react';
import clsx from 'clsx';

const fields = [
  {
    name: 'name',
    label: '이름',
    placeholder: '홍길동',
    type: 'text',
  },
  {
    name: 'email',
    label: '이메일',
    placeholder: 'example@email.com',
    type: 'email',
  },
  {
    name: 'password',
    label: '비밀번호',
    placeholder: '8자 이상 입력하세요',
    type: 'password',
  },
  {
    name: 'passwordConfirm',
    label: '비밀번호 확인',
    placeholder: '비밀번호를 다시 입력하세요',
    type: 'password',
  },
] as const;

const SignupInputSection = () => {
  const [isAgree, setIsAgree] = useState(false);

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
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      {fields.map((field) => (
        <Input
          key={field.name}
          id={field.name}
          type={field.type}
          label={field.label}
          placeholder={field.placeholder}
          {...register(field.name)}
          error={errors[field.name]?.message}
        />
      ))}

      <div
        className='flex cursor-pointer items-center gap-2'
        onClick={() => setIsAgree((prev) => !prev)}
      >
        <div
          className={clsx(
            'flex h-4 w-4 items-center justify-center rounded border',
            isAgree ? 'bg-primary border-primary' : 'border-light-gray',
          )}
        >
          {isAgree && <Check size={12} className='text-white' />}
        </div>

        <p className='text-dark-gray text-sm break-keep'>
          <span className='text-primary'>이용약관</span>과{' '}
          <span className='text-primary'>개인정보처리방침</span>에 동의합니다.
        </p>
      </div>

      <Button
        type='submit'
        label='가입하기'
        disabled={!isValid || !isAgree}
        className='bg-primary h-12.5 w-full leading-6 font-medium text-white hover:brightness-90 active:brightness-80'
      />
    </form>
  );
};

export default SignupInputSection;
