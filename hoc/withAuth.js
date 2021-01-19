import { useGetUser } from 'apollo/actions';
import { Redirect, Loader } from 'components/shared';

export default withAuth = (WrappedComponent, role) => (props) => {
  const { data: { user } = {}, loading, error } = useGetUser({
    fetchPolicy: 'network-only',
  });

  if (!loading && (!user || error) && typeof window !== 'undefined')
    return <Redirect to='/auth/login' />;

  if (user) {
    if (role && user.role !== role) return <Redirect to='/auth/login' />;
    return <WrappedComponent {...props} />;
  }

  return <Loader />;
};
