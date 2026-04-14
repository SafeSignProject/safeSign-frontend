import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <main className='flex min-h-screen items-center justify-center bg-[#F9FAFB]'>
      <Outlet />
    </main>
  );
};

export default PublicLayout;
