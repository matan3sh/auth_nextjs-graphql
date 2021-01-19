import { PageLayout } from '@/components/layout';
import withApollo from '@/hoc/withApollo';
import { useSignIn } from '@/apollo/actions';

import LoginForm from 'components/forms/LoginForm';
import Redirect from '@/components/shared/Redirect';

import { Alert, AlertTitle } from '@material-ui/lab';

const Login = () => {
  const [signIn, { data, loading, error }] = useSignIn();

  const errorMessage = (error) =>
    (error.graphQLErrors && error.graphQLErrors[0].message) ||
    'Oooops something went wrong...';

  return (
    <PageLayout>
      <section className='auth section bd-container' id='Login'>
        <h2 className='section-title'>Login</h2>
        <LoginForm
          loading={loading}
          onSubmit={(signInData) => signIn({ variables: signInData })}
        />
        {data && data.signIn && <Redirect to='/' />}
        {error && (
          <Alert severity='error'>
            <AlertTitle>Error</AlertTitle>
            {errorMessage(error)}
          </Alert>
        )}
      </section>
    </PageLayout>
  );
};

export default withApollo(Login);
