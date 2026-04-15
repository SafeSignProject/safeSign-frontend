import { loginSchema, type LoginType } from '@/schemas/authSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Mail } from 'lucide-react';
import { useEffect } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { Button, Input } from '../common';
import { showToast } from '@/utils/toast';

const fields = [
  {
    name: 'email',
    label: '이메일',
    placeholder: 'example@email.com',
    type: 'email',
  },
  {
    name: 'password',
    label: '비밀번호',
    placeholder: '••••••••',
    type: 'password',
  },
] as const;

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal = ({ onClose }: LoginModalProps) => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
  });

  const onSubmit: SubmitHandler<LoginType> = async (data) => {
    try {
      console.log('로그인 성공:', data);
      showToast.success('로그인 되었습니다');
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-black/40' onClick={onClose}>
      <div
        className='z-50 flex flex-col space-y-3 overflow-hidden rounded-lg bg-white p-8'
        onClick={(e) => e.stopPropagation()}
      >
        <section className='mb-6 flex items-center justify-start gap-3'>
          <div className='bg-light-gray text-dark-gray rounded-full p-2.5'>
            <Mail size={20} />
          </div>
          <div>
            <h5 className='text-dark text-xl leading-7 font-semibold'>이메일 로그인</h5>
            <p className='text-dark-gray text-sm leading-5'>이메일 계정으로 로그인하세요</p>
          </div>
        </section>

        <form onSubmit={handleSubmit(onSubmit)} className='w-95.5 space-y-4'>
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

          <div className='mt-6 flex gap-3'>
            <Button
              type='button'
              label='취소'
              className='border-light-gray text-dark-gray h-11.5 w-full border bg-inherit leading-6 font-medium hover:brightness-90 active:brightness-80'
              onClick={onClose}
            />

            <Button
              type='submit'
              label='가입하기'
              disabled={!isValid}
              className='bg-primary h-11.5 w-full leading-6 font-medium text-white hover:brightness-90 active:brightness-80'
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
