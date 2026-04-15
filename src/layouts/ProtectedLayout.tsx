import { Header } from '@/components/layouts';
import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ProtectedLayout;
