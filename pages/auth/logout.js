import { PageLayout } from '@/components/layout';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import withApollo from '@/hoc/withApollo';
import { useSignOut } from 'apollo/actions';

import Loader from 'components/shared/Loader';
const Logout = ({ apollo }) => {
  const [signOut] = useSignOut();
  const router = useRouter();

  useEffect(() => {
    signOut().then(() => {
      apollo.resetStore().then(() => router.push('/'));
    });
  }, []);

  return (
    <PageLayout>
      <section className='auth section bd-container' id='Login'>
        <h2 className='section-title'>Logout</h2>
        <Loader />
      </section>
    </PageLayout>
  );
};

export default withApollo(Logout);
