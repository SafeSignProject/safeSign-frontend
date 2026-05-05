import { Header } from '@/components/layouts';
import { Outlet, useLocation } from 'react-router-dom';

const PublicLayout = () => {
  const { pathname } = useLocation();

  const isLanding = pathname === '/landing';

  return (
    <>
      {isLanding && <Header showAuthButtons={true} />}

      <main className='flex min-h-screen items-center justify-center bg-[#F9FAFB]'>
        <Outlet />
      </main>
    </>
  );
};

export default PublicLayout;
