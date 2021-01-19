import Link from 'next/link';
import withApollo from 'hoc/withApollo';

import { useQuery } from '@apollo/react-hooks';
import { GET_PORTFOLIO } from 'apollo/queries';
import { getDataFromTree } from '@apollo/react-ssr';

import { motion } from 'framer-motion';
import { PageTransition } from 'components/shared';
import { slidLeft, fadeInUp } from 'services/animation';

import { ArrowBackIosIcon } from 'components/icons';
import ProjectImages from 'components/project/ProjectImages';

const ProjectDetail = ({ query }) => {
  const { data, loading, error } = useQuery(GET_PORTFOLIO, {
    variables: { slug: query.slug },
  });

  if (loading) return 'Loading...';
  if (error) return 'Error...';

  const portfolio = (data && data.portfolio) || {};

  return (
    <PageTransition>
      <section className='projectDetail section bd-container'>
        <motion.div variants={slidLeft} className='project__navigation'>
          <Link href='/projects'>
            <span className='project__navigation-back'>
              <ArrowBackIosIcon /> Projects
            </span>
          </Link>
          <span>/</span>
          <Link href={`/projects/${portfolio?.slug}`}>
            <span>{portfolio?.slug}</span>
          </Link>
        </motion.div>

        <span className='section-subtitle'>Project</span>
        <h2 className='section-title'>{portfolio?.title}</h2>
        <div className='projectDetail__container'>
          <ProjectImages images={portfolio.images} />
          <div className='projectDetail__wrapper'>
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.1 }}
              className='projectDetail__description'
            >
              <h3>Description</h3>
              <p>{portfolio?.description}</p>
            </motion.div>
            <div className='projectDetail__techs'>Right</div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

ProjectDetail.getInitialProps = async ({ query }) => {
  return { query };
};

export default withApollo(ProjectDetail, { getDataFromTree });
