import Header from '@/components/layouts/Header';
import { Outlet } from 'react-router-dom';

const ProtectedLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
