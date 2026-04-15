interface CommonHeaderProps {
  title: string;
  desc: string;
}

const CommonHeader = ({ title, desc }: CommonHeaderProps) => {
  return (
    <header className='border-light-gray fixed top-16 flex w-full flex-col gap-1 border-b bg-white px-8 py-6'>
      <h3 className='text-dark text-2xl leading-8 font-bold'>{title}</h3>
      <p className='text-dark-gray leading-6'>{desc}</p>
    </header>
  );
};

export default CommonHeader;
