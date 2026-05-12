// AdminLayout.tsx
import AdminSidebar from '@/components/layouts/AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen bg-[#F9FAFB]'>
      <AdminSidebar />

      <main className=' p-6'>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
