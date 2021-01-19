import React, { useEffect, useState } from 'react';
import withApollo from 'hoc/withApollo';
import { useLazyGetUser } from 'apollo/actions';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { MenuIcon, CloseIcon, ExitToAppIcon } from 'components/icons';

const Header = () => {
  const [user, setUser] = useState(null);
  const [hasRespone, setHasRespone] = useState(false);
  const [getUser, { data, error }] = useLazyGetUser();

  const [onScroll, setOnScroll] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const { asPath } = useRouter();

  const navOnScroll = () => {
    if (window.scrollY >= 80) setOnScroll(true);
    else setOnScroll(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', navOnScroll);
    return () => {
      window.removeEventListener('scroll', navOnScroll);
    };
  }, []);

  useEffect(() => {
    getUser();
  }, []);
  if (data) {
    if (data.user && !user) setUser(data.user);
    if (!data.user && user) setUser(null);
    if (!hasRespone) setHasRespone(true);
  }

  return (
    <header
      className={`l-header scroll-header ${onScroll ? 'on-scroll' : ''}`}
      id='header'
    >
      <nav className='nav bd-container'>
        <Link href='/' className='nav__logo'>
          <p>
            <span className='nav__logo-color'>Matan</span> Shaviro
          </p>
        </Link>

        <div
          className={`nav__menu ${openMenu ? 'show-menu' : ''}`}
          id='nav-menu'
        >
          <ul className='nav__list'>
            <li
              className='nav__item'
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <Link href='/' as={'/'}>
                <a
                  className={`nav__link ${asPath === '/' ? 'active-link' : ''}`}
                >
                  Home
                </a>
              </Link>
            </li>
            <li
              className='nav__item'
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <Link href='/about' as={'/about'}>
                <a
                  className={`nav__link ${
                    asPath === '/about' ? 'active-link' : ''
                  }`}
                >
                  About
                </a>
              </Link>
            </li>
            <li
              className='nav__item'
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <Link href='/projects' as={'/projects'}>
                <a
                  className={`nav__link ${
                    asPath === '/projects' ? 'active-link' : ''
                  }`}
                >
                  Projects
                </a>
              </Link>
            </li>
            <li
              className='nav__item'
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <Link href='/' className='nav__link'>
                <a
                  className={`nav__link ${
                    asPath === '/blog' ? 'active-link' : ''
                  }`}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li
              className='nav__item'
              onClick={() => setOpenMenu((prev) => !prev)}
            >
              <Link href='/contact' as={'/contact'}>
                <a
                  className={`nav__link ${
                    asPath === '/contact' ? 'active-link' : ''
                  }`}
                >
                  Contact
                </a>
              </Link>
            </li>
            {user && (
              <li className='nav__item'>
                <span className='nav__link connected'>Panel</span>
                <Link href='/auth/logout' as={'/auth/logout'}>
                  <ExitToAppIcon />
                </Link>
              </li>
            )}
          </ul>
        </div>

        <div
          className='nav__toggle'
          id='nav-toggle'
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          {!openMenu ? <MenuIcon /> : <CloseIcon />}
        </div>
      </nav>
    </header>
  );
};

export default withApollo(Header);
