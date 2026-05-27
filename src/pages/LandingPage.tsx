import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingFooter from '@/components/landing/LandingFooter';
import LandingCTA from '@/components/landing/LandingCTA';
import LandingInfo from '@/components/landing/LandingInfo';
import LandingFeatures from '@/components/landing/LandingFeatures';
import { useLocalStorage } from '@/hooks/useLocalStorage';

const LandingPage = () => {
  const navigate = useNavigate();

  const { getAccessToken } = useLocalStorage();
  const token = getAccessToken();

  useEffect(() => {
    const token = getAccessToken();

    if (token) {
      navigate('/', { replace: true });
    }
  }, [navigate, getAccessToken]);

  if (token) return null;

  return (
    <div className='h-screen w-screen snap-y snap-mandatory overflow-y-scroll'>
      <LandingInfo />
      <LandingFeatures />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
