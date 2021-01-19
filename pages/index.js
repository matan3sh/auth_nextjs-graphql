import withApollo from '@/hoc/withApollo';
import { useGetPortfolios } from 'apollo/actions';
import { getDataFromTree } from '@apollo/react-ssr';

import { HomePageTransition, Loader } from 'components/shared';
import { Footer } from '@/components/layout';
import { Showcase, Qualification, Portfolio, Blog } from '@/components/home';

const Home = () => {
  const { data, loading, error } = useGetPortfolios();

  if (loading) return <Loader />;
  if (error) return 'Error...';

  const portfolios = (data && data.portfolios) || {};

  return (
    <HomePageTransition>
      <Showcase />
      <Qualification />
      <Portfolio portfolios={portfolios} />
      <Blog />
      <Footer />
    </HomePageTransition>
  );
};

export default withApollo(Home, { getDataFromTree });
