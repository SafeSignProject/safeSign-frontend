import React from 'react';
import AnimatedSection from './AnimatedSection';
import { Check, Eye, FileText, Shield } from 'lucide-react';

const LandingFeatures = () => {
  return (
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
  );
};

export default LandingFeatures;
