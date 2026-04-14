import { Outlet } from 'react-router-dom';
import { Toast } from '@/components/common';

function App() {
  return (
    <>
      <Toast />
      <Outlet />
    </>
  );
}

export default App;
