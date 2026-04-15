import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import PublicLayout from './layouts/PublicLayout';
import { LoginPage, SignupPage } from './pages/auth';
import ProtectedLayout from './layouts/ProtectedLayout';
import MyPage from './pages/MyPage';

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
        ],
      },
    ],
  },
]);

export default router;
