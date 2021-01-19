import { motion } from 'framer-motion';

const HomePageTransition = ({ children }) => {
  return (
    <motion.div exit={{ opacity: 0 }} initial='initial' animate='animate'>
      {children}
    </motion.div>
  );
};

export default HomePageTransition;
