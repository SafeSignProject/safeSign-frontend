import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LandingCTA = () => {
  return (
    <section className='relative flex min-h-screen snap-start items-center justify-center overflow-hidden'>
      <div className='absolute inset-0 bg-linear-to-br from-accent via-[#F0FDF7] to-[#D1FAE5]' />

      <motion.div
        className='absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96'
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <div className='relative z-10 mx-auto px-4 text-center sm:px-8'>
        <AnimatedSection>
          <h2 className='mb-6 text-4xl leading-tight font-bold text-dark sm:mb-8 sm:text-5xl lg:text-6xl'>
            지금 바로 계약서를
            <br />
            무료로 분석해보세요
          </h2>
          <p className='mb-8 text-lg text-[#6B7280] sm:mb-12 sm:text-2xl'>
            계약서 문장 하나하나, SafeSign이 꼼꼼하게 검토합니다.
          </p>
          <Link
            to='/signup'
            className='inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-white transition-all hover:scale-105 hover:bg-[#2BA371] hover:shadow-2xl sm:gap-3 sm:px-12 sm:py-5 sm:text-lg'
          >
            무료로 시작하기
            <ArrowRight className='h-5 w-5 sm:h-6 sm:w-6' strokeWidth={2} />
          </Link>
          <p className='mt-6 text-sm text-[#6B7280] sm:mt-8 sm:text-lg'>
            첫 5개 계약서는 무료로 분석 가능합니다
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default LandingCTA;
