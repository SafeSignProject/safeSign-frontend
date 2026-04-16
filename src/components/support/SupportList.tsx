import { SUPPORT_ITEMS } from '@/mocks/supportItem';
import { FileText, SquareArrowOutUpRight, TrendingUp } from 'lucide-react';
import { Badge } from '@/components/common';

const SupportList = ({ keyword = '' }) => {
  const items = SUPPORT_ITEMS ?? [];

  const filteredItems = items.filter((item) => {
    const target = `${item.title} ${item.organization} ${item.description} ${item.tags.join(' ')}`;
    return target.toLowerCase().includes(keyword.toLowerCase());
  });

  const count = filteredItems.length;

  return (
    <>
      <p className='text-dark-gray -mb-4 text-sm'>
        <span className='text-dark font-medium'>{count}개</span>의 지원 프로그램
      </p>

      {count === 0 ? (
        <section className='flex flex-col items-center justify-center py-15.5 text-center'>
          <FileText size={48} strokeWidth={1.5} className='text-[#D1D5DB]' />
          <p className='text-dark mt-4 text-lg leading-7 font-medium'>검색 결과가 없습니다</p>
          <p className='text-dark-gray mt-2 text-sm'>다른 키워드로 검색해보세요</p>
        </section>
      ) : (
        <>
          {!keyword && (
            <section className='border-primary flex gap-4 rounded-sm border bg-white p-6'>
              <TrendingUp size={24} className='text-primary' />

              <div className='flex flex-col gap-1.5'>
                <h5 className='text-dark text-lg leading-7 font-medium'>AI 맞춤 추천</h5>

                <p className='text-dark-gray text-sm'>
                  최근 분석한 '주택임대차계약서'를 기반으로 다음 지원 프로그램을 추천합니다
                </p>

                <div className='mt-3 flex items-center gap-2'>
                  <Badge
                    label='청년 전월세 보증금 대출'
                    className='text-dark bg-[#F3F4F6] px-3 text-sm'
                  />
                  <Badge label='주거 급여' className='text-dark bg-[#F3F4F6] px-3 text-sm' />
                </div>
              </div>
            </section>
          )}

          <section className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className='border-light-gray hover:border-primary rounded-lg border bg-white p-6 transition hover:shadow-md'
              >
                <div className='mb-0.5 flex items-center justify-between'>
                  <h5 className='text-dark text-lg leading-7 font-semibold'>{item.title}</h5>
                  <a
                    href={item.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-primary transition hover:scale-110'
                  >
                    <SquareArrowOutUpRight size={16} strokeWidth={1.5} />
                  </a>
                </div>
                <p className='text-dark-gray text-xs leading-4'>{item.organization}</p>
                <p className='my-3 line-clamp-6 text-sm text-[#4B5563]'>{item.description}</p>
                <div className='my-4 flex items-center gap-3 rounded-sm bg-[#F9FAFB] p-3'>
                  <div className='flex-1'>
                    <p className='text-dark-gray text-xs leading-4'>지원금액</p>
                    <p className='text-dark text-sm font-medium'>{item.support.amount}</p>
                  </div>
                  <div className='flex-1'>
                    <p className='text-dark-gray text-xs leading-4'>지원기간</p>
                    <p className='text-dark text-sm font-medium'>{item.support.period}</p>
                  </div>
                </div>
                <div className='mt-3 flex flex-wrap gap-2'>
                  {item.tags.map((tag, idx) => (
                    <Badge
                      key={idx}
                      tag={true}
                      className='text-primary bg-[#E8F9F0] text-xs'
                      label={tag}
                    />
                  ))}
                </div>
              </article>
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default SupportList;
