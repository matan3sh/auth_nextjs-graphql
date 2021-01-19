import React from 'react';

import { KeyboardArrowUpIcon } from 'components/icons';

const ScrollTop = () => {
  window.addEventListener('scroll', function () {
    const scrollTop = document.getElementById('scroll-top');
    if (window.scrollY >= 160) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
  });

  return (
    <a
      className='scrolltop'
      id='scroll-top'
      onClick={() => window.scrollTo(0, 0)}
    >
      <KeyboardArrowUpIcon className='scrolltop__icon' />
    </a>
  );
};

export default ScrollTop;
