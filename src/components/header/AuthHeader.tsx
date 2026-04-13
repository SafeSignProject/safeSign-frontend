import { Logo } from '@/assets';

interface authFormProps {
  title: string;
  desc: string;
}

const AuthHeader = ({ title, desc }: authFormProps) => {
  return (
    <>
      <section className='flex items-center gap-2'>
        <Logo width={31.91} height={40} />
        <h5 className='text-dark text-xl leading-7 font-semibold'>SageSign</h5>
      </section>
      <section className='flex flex-col items-center justify-center gap-1'>
        <h3 className='text-dark text-2xl leading-8 font-semibold'>{title}</h3>
        <p className='leading-7 font-normal text-gray-500'>{desc}</p>
      </section>
    </>
  );
};

export default AuthHeader;
