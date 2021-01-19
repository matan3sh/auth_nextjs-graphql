import ProjectCard from './ProjectCard';

import { techLogos } from 'services';

const ProjectList = ({ portfolios, updatePortfolio, deletePortfolio }) => {
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
    <>
      {portfolios?.map((portfolio) => (
        <ProjectCard
          portfolio={portfolio}
          getTechIcon={getTechIcon}
          key={portfolio?._id}
          updatePortfolio={updatePortfolio}
          deletePortfolio={deletePortfolio}
        />
      ))}
    </>
  );
};

export default ProjectList;
