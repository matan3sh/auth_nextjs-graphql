import withApollo from 'hoc/withApollo';
import withAuth from 'hoc/withAuth';

import { PageLayout } from '@/components/layout';

const Secret = () => {
  return (
    <PageLayout>
      <section className='section bd-container' id='Login'>
        <h2 className='section-title'>Secret Page</h2>
      </section>
    </PageLayout>
  );
};

export default withApollo(withAuth(Secret, 'admin'));
