import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import {
  Shield,
  FileText,
  Eye,
  ArrowRight,
  Check,
  AlertTriangle,
  Sparkles,
  Zap,
  Lock,
} from 'lucide-react';
import { motion } from 'motion/react';
import LandingFooter from '@/components/landing/LandingFooter';
import AnimatedSection from '@/components/landing/AnimatedSection';
import LandingCTA from '@/components/landing/LandingCTA';

const LandingPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`h-screen snap-y snap-mandatory ${isLoaded ? 'overflow-y-scroll' : 'overflow-hidden'}`}
    >
      {/* Section 1: Hero */}
      <div className='relative flex min-h-screen snap-start items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-br from-accent via-[#F0FDF7] to-[#D1FAE5]' />
        <div className='absolute top-20 left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96' />
        <div className='absolute right-20 bottom-20 h-80 w-80 rounded-full bg-primary/5 blur-3xl sm:h-125 sm:w-125' />

        <section className='relative mx-auto grid grid-cols-1 items-center gap-8 px-4 py-24 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-0'>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className='mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/90 px-3 py-1.5 backdrop-blur-sm sm:mb-8 sm:px-4 sm:py-2'
            >
              <Sparkles className='h-3 w-3 text-primary sm:h-4 sm:w-4' strokeWidth={2} />
              <span className='text-xs font-medium text-dark sm:text-sm'>AI 기반 계약서 분석</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='mb-4 text-4xl leading-tight font-bold text-dark sm:mb-6 sm:text-5xl lg:text-6xl'
            >
              법률 사각지대 없는
              <br />
              <span className='text-primary'>안전한 계약</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className='mb-8 text-base leading-relaxed text-[#6B7280] sm:mb-10 sm:text-xl'
            >
              AI가 5분 만에 계약서의 숨은 위험을 찾아드립니다.
              <br />
              법적 문제부터 불공정 조항까지 완벽 분석.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='mb-6 flex flex-col items-stretch gap-4 sm:mb-8 sm:flex-row sm:items-center'
            >
              <Link
                to='/signup'
                className='inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 max-sm:text-sm font-semibold text-white transition-all hover:scale-102 hover:brightness-95 active:brightness-90 hover:shadow-2xl sm:px-8 sm:py-4'
              >
                무료로 시작하기
                <ArrowRight className='h-4 w-4 sm:h-5 sm:w-5' strokeWidth={2} />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
              className='flex items-start gap-3 text-xs text-[#6B7280] sm:items-center sm:gap-8 sm:text-sm'
            >
              <div className='flex items-center gap-1 sm:gap-2'>
                <Check className='h-3.5 w-3.5 text-primary sm:h-4 sm:w-4' strokeWidth={2} />
                무료 체험
              </div>
              <div className='flex items-center gap-1 sm:gap-2'>
                <Check className='h-3.5 w-3.5 text-primary sm:h-4 sm:w-4' strokeWidth={2} />
                5분 내 분석
              </div>
              <div className='flex items-center gap-1 sm:gap-2'>
                <Check className='h-3.5 w-3.5 text-primary sm:h-4 sm:w-4' strokeWidth={2} />
                안전한 보안
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -30 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='relative hidden lg:block'
          >
            <div className='relative'>
              <div className='rounded-[3rem] border border-[#E5E7EB] bg-white/60 p-3 shadow-2xl backdrop-blur-2xl'>
                <div className='overflow-hidden rounded-[2.5rem] bg-white shadow-xl'>
                  <div className='flex items-center justify-between bg-[#F9FAFB] px-6 py-3'>
                    <span className='text-xs font-medium text-dark'>9:41</span>
                    <div className='flex items-center gap-1'>
                      <div className='h-3 w-4 rounded-sm bg-dark'></div>
                    </div>
                  </div>

                  <div className='space-y-4 p-6'>
                    <div className='mb-6 flex items-center gap-3'>
                      <FileText className='h-6 w-6 text-primary' strokeWidth={1.5} />
                      <span className='font-semibold text-dark'>주택임대차계약서.pdf</span>
                    </div>

                    <div className='space-y-3'>
                      <div className='h-2.5 rounded-full bg-[#F3F4F6]' />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '85%' }}
                        transition={{ duration: 1, delay: 1.5 }}
                        className='h-2.5 rounded-full border-l-2 border-[#2BA371] bg-primary'
                      />
                      <div className='h-2.5 w-3/5 rounded-full bg-[#F3F4F6]' />
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 1, delay: 1.7 }}
                        className='h-2.5 rounded-full border-l-2 border-primary bg-[#6EE7B7]'
                      />
                      <div className='h-2.5 w-2/3 rounded-full bg-[#F3F4F6]' />
                    </div>

                    <div className='mt-8 flex items-center justify-between rounded-xl border border-[#A7F3D0] bg-accent p-4'>
                      <div className='flex items-center gap-2'>
                        <AlertTriangle className='h-5 w-5 text-primary' strokeWidth={2} />
                        <span className='text-sm font-medium text-[#047857]'>3개 위험 발견</span>
                      </div>
                      <div className='rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white'>
                        위험
                      </div>
                    </div>

                    <div className='mt-6 grid grid-cols-3 gap-2'>
                      <div className='rounded-xl border border-[#A7F3D0] bg-accent p-3 text-center'>
                        <div className='text-lg font-bold text-primary'>5분</div>
                        <div className='text-[10px] text-[#047857]'>빠른분석</div>
                      </div>
                      <div className='rounded-xl border border-[#A7F3D0] bg-[#F0FDF7] p-3 text-center'>
                        <div className='text-lg font-bold text-primary'>AI</div>
                        <div className='text-[10px] text-[#047857]'>자동분석</div>
                      </div>
                      <div className='rounded-xl border border-[#A7F3D0] bg-[#F0FDF7] p-3 text-center'>
                        <div className='text-lg font-bold text-primary'>안전</div>
                        <div className='text-[10px] text-[#047857]'>보안처리</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className='absolute -top-6 -right-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary shadow-2xl'
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Zap className='h-10 w-10 text-white' strokeWidth={2} />
              </motion.div>

              <motion.div
                className='absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2BA371] shadow-2xl'
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Lock className='h-8 w-8 text-white' strokeWidth={2} />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className='absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:bottom-12 sm:flex'
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className='text-sm text-[#6B7280]'
            >
              스크롤하여 더 알아보기
            </motion.div>
            <motion.div
              className='flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary p-2'
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className='h-1.5 w-1.5 rounded-full bg-primary'></div>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Section 2: Features */}
      <section className='flex min-h-screen snap-start items-center justify-center bg-white py-16 sm:py-24'>
        <div className='mx-auto px-4 sm:px-8'>
          <AnimatedSection>
            <div className='mb-12 text-center sm:mb-20 '>
              <div className='mb-4 inline-block rounded-full border border-primary/30 bg-accent px-4 py-2 text-xs font-medium text-primary sm:mb-6 sm:text-sm'>
                핵심 기능
              </div>
              <h2 className='mb-4 text-3xl font-bold text-dark sm:mb-6 sm:text-4xl lg:text-5xl'>
                AI가 계약서를 <span className='text-primary'>완벽 분석</span>
              </h2>
              <p className='text-base text-[#6B7280] sm:text-xl'>
                복잡한 법률 용어도 AI가 쉽게 해석해드립니다
              </p>
            </div>
          </AnimatedSection>

          <div className='grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <AnimatedSection delay={0.2}>
              <div className='group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all hover:border-primary hover:shadow-2xl sm:p-10'>
                <div className='absolute inset-0 bg-accent/0 transition-colors group-hover:bg-accent/50'></div>
                <div className='relative'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary transition-transform group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16'>
                    <Shield className='h-6 w-6 text-white sm:h-8 sm:w-8' strokeWidth={2} />
                  </div>
                  <h3 className='mb-3 text-xl font-bold text-dark sm:mb-4 sm:text-2xl'>
                    법적 위험 탐지
                  </h3>
                  <p className='mb-4 text-sm leading-relaxed text-[#6B7280] sm:mb-6 sm:text-base'>
                    AI가 계약서 조항을 분석하여 법적 문제, 불공정 조항, 모호한 표현을 자동으로
                    찾아냅니다.
                  </p>
                  <div className='flex items-center gap-2 text-xs font-medium text-primary sm:text-sm'>
                    <Check className='h-3.5 w-3.5 sm:h-4 sm:w-4' strokeWidth={2} />
                    실시간 분석
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className='group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all hover:border-primary hover:shadow-2xl sm:p-10'>
                <div className='absolute inset-0 bg-accent/0 transition-colors group-hover:bg-accent/50'></div>
                <div className='relative'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2BA371] transition-transform group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16'>
                    <Eye className='h-6 w-6 text-white sm:h-8 sm:w-8' strokeWidth={2} />
                  </div>
                  <h3 className='mb-3 text-xl font-bold text-dark sm:mb-4 sm:text-2xl'>
                    하이라이트 표시
                  </h3>
                  <p className='mb-4 text-sm leading-relaxed text-[#6B7280] sm:mb-6 sm:text-base'>
                    위험도에 따라 색상으로 구분된 하이라이트로 한눈에 문제점을 파악할 수 있습니다.
                  </p>
                  <div className='flex items-center gap-2 text-xs font-medium text-[#2BA371] sm:text-sm'>
                    <Check className='h-3.5 w-3.5 sm:h-4 sm:w-4' strokeWidth={2} />
                    색상 구분
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className='group relative overflow-hidden rounded-2xl border border-[#E5E7EB] bg-white p-6 transition-all hover:border-primary hover:shadow-2xl sm:p-10 md:col-span-2 lg:col-span-1'>
                <div className='absolute inset-0 bg-accent/0 transition-colors group-hover:bg-accent/50'></div>
                <div className='relative'>
                  <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#248C5F] transition-transform group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16'>
                    <FileText className='h-6 w-6 text-white sm:h-8 sm:w-8' strokeWidth={2} />
                  </div>
                  <h3 className='mb-3 text-xl font-bold text-dark sm:mb-4 sm:text-2xl'>
                    개선안 제시
                  </h3>
                  <p className='mb-4 text-sm leading-relaxed text-[#6B7280] sm:mb-6 sm:text-base'>
                    법령에 근거한 안전한 대체 문장을 즉시 제공하여 협상력을 높여드립니다.
                  </p>
                  <div className='flex items-center gap-2 text-xs font-medium text-[#248C5F] sm:text-sm'>
                    <Check className='h-3.5 w-3.5 sm:h-4 sm:w-4' strokeWidth={2} />
                    법령 기반
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <LandingCTA />
      <LandingFooter />
    </div>
  );
};

export default LandingPage;
