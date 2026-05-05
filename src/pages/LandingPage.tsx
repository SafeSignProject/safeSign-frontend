import LandingFooter from '@/components/landing/LandingFooter';
import LandingCTA from '@/components/landing/LandingCTA';
import LandingInfo from '@/components/landing/LandingInfo';
import LandingFeatures from '@/components/landing/LandingFeatures';

const LandingPage = () => {
  return (
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll w-screen'>
      <LandingInfo />
      <LandingFeatures />
      <LandingCTA />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
