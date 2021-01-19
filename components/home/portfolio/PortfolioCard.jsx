import Link from 'next/link';

const PortfolioCard = ({ portfolio, getTechIcon }) => {
  return (
    <Link href='/projects/[slug]' as={`/projects/${portfolio.slug}`}>
      <div className='portfolio__content'>
        <a href='/#'>
          <img
            src={portfolio.image}
            alt={portfolio.title}
            className='portfolio__img'
          />
        </a>
        <div className='portfolio__data'>
          <span className='portfolio__subtitle'>{portfolio.subtitle}</span>
          <a href='/#'>
            <h2 className='portfolio__title'>{portfolio.title}</h2>
          </a>
          <p className='portfolio__description'>
            {portfolio.description.length > 100
              ? portfolio.description.substr(0, 100) + '...'
              : portfolio.description}
          </p>
          <div className='portfolio__tech'>
            {portfolio.tech.map((item, index) => getTechIcon(item, index))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
