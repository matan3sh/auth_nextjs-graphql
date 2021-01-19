import withApollo from '@/hoc/withApollo';
import {
  useGetPortfolios,
  useCreatePortfolio,
  useDeletePortfolio,
  useUpdatePortfolio,
} from 'apollo/actions';
import { getDataFromTree } from '@apollo/react-ssr';

import { PageTransition } from 'components/shared';

import ProjectList from 'components/projects/ProjectList';

const Projects = () => {
  const { data, loading, error } = useGetPortfolios();
  const [updatePortfolio] = useUpdatePortfolio();
  const [createPortfolio] = useCreatePortfolio();
  const [deletePortfolio] = useDeletePortfolio();

  if (loading) return 'Loading...';
  if (error) return 'Error...';

  const portfolios = (data && data.portfolios) || {};

  return (
    <PageTransition>
      <section className='projects section bd-container'>
        <span className='section-subtitle'>Take a look</span>
        <h2 className='section-title'>My Projects</h2>
        <button onClick={createPortfolio}>Create Portfolio</button>
        <div className='portfolio__container bd-grid'>
          <ProjectList
            portfolios={portfolios}
            updatePortfolio={updatePortfolio}
            deletePortfolio={deletePortfolio}
          />
        </div>
      </section>
    </PageTransition>
  );
};

export default withApollo(Projects, { getDataFromTree });
