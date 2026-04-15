import { motion } from 'framer-motion';

const AnalyzingBar = () => {
  return (
    <>
      <div className='bg-light-gray h-2 max-w-full overflow-hidden rounded-full'>
        <motion.div
          className='bg-primary h-full'
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 20, ease: 'linear' }}
        />
      </div>

      <motion.p
        className='text-dark-gray mt-4 flex items-center justify-center gap-1 text-sm'
        animate={{ opacity: [1, 0, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        페이지를 벗어나면 분석이 취소될 수 있습니다.
      </motion.p>
    </>
  );
};

export default AnalyzingBar;
