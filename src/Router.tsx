import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';
import MyPage from './pages/MyPage';
import UploadPage from './pages/upload/UploadPage';
import AnalyzingPage from './pages/upload/AnalyzingPage';
import ContractsPage from './pages/contracts/ContractsPage';
import ContractsDetailPage from './pages/contracts/ContractsDetailPage';
import DashBoardPage from './pages/admin/DashBoardPage';
import AnalysisManagementPage from './pages/admin/AnalysisManagementPage';
import UsersManagementPage from './pages/admin/UsersManagementPage';
import OauthSuccessPage from './pages/OauthSuccessPage';
import PublicLayout from './layouts/PublicLayout';
import ProtectedLayout from './layouts/ProtectedLayout';
import AdminLayout from './layouts/AdminLayout';
import { LoginPage, SignupPage } from './pages/auth';

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
            path: '/landing',
            element: <LandingPage />,
          },
          {
            path: 'login',
            element: <LoginPage />,
          },
          {
            path: 'signup',
            element: <SignupPage />,
          },
          {
            path: 'oauth/success',
            element: <OauthSuccessPage />,
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
            path: 'analyze',
            element: <AnalyzingPage />,
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
