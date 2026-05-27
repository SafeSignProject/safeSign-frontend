const DashboardSkeleton = () => {
  return (
    <div className='flex flex-col gap-6 w-full animate-pulse'>
      {/* Stats Card Skeletons */}
      <div className='grid grid-cols-3 gap-6'>
        {[1, 2, 3].map((i) => (
          <div key={i} className='rounded-xl border border-light-gray bg-white p-6 h-[178px] flex flex-col justify-between shadow-sm'>
            <div className='flex justify-between items-start'>
              <div className='h-4 bg-slate-200 rounded w-24' />
              <div className='h-10 w-10 bg-slate-200 rounded-lg' />
            </div>
            <div className='space-y-3'>
              <div className='h-8 bg-slate-200 rounded w-20' />
              <div className='h-3 bg-slate-200 rounded w-32' />
            </div>
          </div>
        ))}
      </div>

      {/* Logs Side-by-Side Skeletons */}
      <div className='grid grid-cols-2 gap-5'>
        {[1, 2].map((i) => (
          <div key={i} className='rounded-xl border border-light-gray bg-white p-6 h-[300px] flex flex-col shadow-sm'>
            <div className='flex justify-between items-center mb-6'>
              <div className='h-5 bg-slate-200 rounded w-32' />
              <div className='h-3 bg-slate-200 rounded w-12' />
            </div>
            <div className='space-y-4 flex-1'>
              {[1, 2, 3].map((j) => (
                <div key={j} className='flex items-center justify-between py-2'>
                  <div className='flex items-center gap-3'>
                    <div className='h-10 w-10 bg-slate-200 rounded-full' />
                    <div className='space-y-2'>
                      <div className='h-4 bg-slate-200 rounded w-20' />
                      <div className='h-3 bg-slate-200 rounded w-32' />
                    </div>
                  </div>
                  <div className='h-6 bg-slate-200 rounded w-16' />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardSkeleton;
