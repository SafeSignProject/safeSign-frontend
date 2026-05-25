import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { reissueToken } from '@/api/auth';
import { showToast } from '@/utils/toast';

const OauthSuccessPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const login = async () => {
      try {
        const response = await reissueToken();

        const accessToken = response.accessToken;

        if (!accessToken) {
          throw new Error();
        }

        localStorage.setItem('accessToken', accessToken);

        showToast.success('로그인에 성공하였습니다.');

        setTimeout(() => {
          navigate('/', { replace: true });
        }, 2000);
      } catch (error) {
        showToast.error('로그인에 실패하였습니다.');
        navigate('/login', { replace: true });
      }
    };

    login();
  }, [navigate]);

  return (
    <main className='flex flex-col items-center justify-center min-h-screen gap-5'>
      <div className='w-24 h-24 border-8 border-gray-700 border-t-transparent rounded-full animate-spin'></div>

      <p className='text-[#6D7280] font-medium text-lg'>로그인 처리 중...</p>
    </main>
  );
};

export default OauthSuccessPage;
