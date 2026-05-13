// AdminLayout.tsx
import AdminSidebar from '@/components/layouts/AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen bg-[#F9FAFB]'>
      <AdminSidebar />

      <main className='ml-66.25 flex-1'>
        <div className='mx-auto w-full max-w-7xl'>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
