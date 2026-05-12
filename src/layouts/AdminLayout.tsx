// AdminLayout.tsx
import AdminSidebar from '@/components/layouts/AdminSidebar';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className='flex min-h-screen bg-[#F9FAFB]'>
      <AdminSidebar />

      <main className='ml-66.25 min-h-screen w-full'>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
