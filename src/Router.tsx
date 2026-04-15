import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import PublicLayout from './layouts/PublicLayout';
import { LoginPage, SignupPage } from './pages/auth';
import ProtectedLayout from './layouts/ProtectedLayout';
import MyPage from './pages/MyPage';
import UploadPage from './pages/upload/UploadPage';
import ContractsPage from './pages/contracts/ContractsPage';
import SupportPage from './pages/SupportPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PublicLayout />,
        children: [
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'signup',
            element: <SignupPage />,
          },
        ],
      },

      {
        element: <ProtectedLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: 'my',
            element: <MyPage />,
          },
          {
            path: 'upload',
            element: <UploadPage />,
          },
          {
            path: 'contracts',
            element: <ContractsPage />,
          },
          {
            path: 'support',
            element: <SupportPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
