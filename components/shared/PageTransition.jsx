import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial='initial'
      animate='animate'
      className='section bd-container'
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
