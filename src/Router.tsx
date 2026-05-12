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
import AnalyzingPage from './pages/upload/AnalyzingPage';
import ContractsDetailPage from './pages/contracts/ContractsDetailPage';
import LandingPage from './pages/LandingPage';
import AdminLayout from './layouts/AdminLayout';
import DashBoardPage from './pages/admin/DashBoardPage';
import AnalysisManagementPage from './pages/admin/AnalysisManagementPage';
import UsersManagementPage from './pages/admin/UsersManagementPage';

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
          {
            path: 'landing',
            element: <LandingPage />,
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
            children: [
              {
                index: true,
                element: <ContractsPage />,
              },
              {
                path: ':id',
                element: <ContractsDetailPage />,
              },
            ],
          },
          {
            path: 'analyze',
            element: <AnalyzingPage />,
          },
        ],
      },
      {
        element: <AdminLayout />,
        children: [
          {
            path: 'dashboard',
            element: <DashBoardPage />,
          },
          {
            path: 'analysis-management',
            element: <AnalysisManagementPage />,
          },
          {
            path: 'users-management',
            element: <UsersManagementPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
