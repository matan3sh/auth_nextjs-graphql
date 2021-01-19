import PortfolioList from './portfolio/PortfolioList';

import { techLogos } from 'services';

const Portfolio = ({ portfolios }) => {
  const getTechIcon = (item, index) => {
    if (item === 'react')
      return <img src={techLogos.react} alt='react' key={index} />;
    if (item === 'node')
      return <img src={techLogos.node} alt='node' key={index} />;
    if (item === 'mongo')
      return <img src={techLogos.mongo} alt='mongo' key={index} />;
    if (item === 'graphql')
      return <img src={techLogos.graphql} alt='graphql' key={index} />;
    if (item === 'express')
      return <img src={techLogos.express} alt='express' key={index} />;
    if (item === 'next')
      return <img src={techLogos.next} alt='next' key={index} />;
    if (item === 'apollo')
      return <img src={techLogos.apollo} alt='apollo' key={index} />;
    else return null;
  };

  return (
    <section className='portfolio section bd-container' id='Projects'>
      <span className='section-subtitle'>Take a look</span>
      <h2 className='section-title'>Featured Projects</h2>
      <PortfolioList portfolios={portfolios} getTechIcon={getTechIcon} />
    </section>
  );
};

export default Portfolio;
