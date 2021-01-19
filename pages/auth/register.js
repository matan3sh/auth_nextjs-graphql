import withApollo from '@/hoc/withApollo';

import { PageLayout } from '@/components/layout';

import RegisterForm from 'components/forms/RegisterForm';
import { Mutation } from 'react-apollo';
import { SIGN_UP } from '@/apollo/queries';

import Redirect from '@/components/shared/Redirect';

import { Alert, AlertTitle } from '@material-ui/lab';

const Register = () => {
  const errorMessage = (error) =>
    (error.graphQLErrors && error.graphQLErrors[0].message) ||
    'Oooops something went wrong...';

  return (
    <PageLayout>
      <section className='auth section bd-container' id='Login'>
        <h2 className='section-title'>Register</h2>
        <Mutation mutation={SIGN_UP}>
          {(signUpUser, { data, error }) => (
            <>
              <RegisterForm
                onSubmit={(registerData) => {
                  signUpUser({ variables: registerData });
                }}
              />
              {data && data.signUp && <Redirect to='/auth/login' />}
              {error && (
                <Alert severity='error'>
                  <AlertTitle>Error</AlertTitle>
                  {errorMessage(error)}
                </Alert>
              )}
            </>
          )}
        </Mutation>
      </section>
    </PageLayout>
  );
};

export default withApollo(Register);
