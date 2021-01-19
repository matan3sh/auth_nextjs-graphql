import { AnimatePresence } from 'framer-motion';
import { PageLayout } from '@/components/layout';

import 'styles/style.scss';

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <PageLayout>
        <Component {...pageProps} key={router.route} />
      </PageLayout>
    </AnimatePresence>
  );
};

export default MyApp;
