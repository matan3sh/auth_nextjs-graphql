import PortfolioCard from './PortfolioCard';

const PortfolioList = ({ portfolios, getTechIcon }) => {
  return (
    <div className='portfolio__container bd-grid'>
      {portfolios?.map((portfolio, index) => (
        <PortfolioCard
          key={portfolio._id}
          portfolio={portfolio}
          getTechIcon={getTechIcon}
        />
      ))}
    </div>
  );
};

export default PortfolioList;
