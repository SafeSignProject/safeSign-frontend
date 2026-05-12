interface AdminCommonHeaderProps {
  title: string;
  desc: string;
}

const AdminCommonHeader = ({ title, desc }: AdminCommonHeaderProps) => {
  return (
    <nav className='w-full p-8'>
      <h3 className='text-2xl font-semibold leading-8 text-dark mb-1'>{title}</h3>
      <p className='text-sm leading-5 text-dark-gray'>{desc}</p>
    </nav>
  );
};

export default AdminCommonHeader;
