import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { links } from './data.json';

export const Sidebar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => setIsOpenMenu(!isOpenMenu);

  return (
    <>
      <aside className={`sidebar text-center ${isOpenMenu ? 'active' : ''}`}>
        <h3 className='logo'>
          <Link to='/'>RRankawat</Link>
        </h3>

        <ul>
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.url}
                activeClassName='active'
                onClick={toggleMenu}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className='social-links'>
          <a
            href='https://www.facebook.com/imrankawat'
            target='_blank'
            rel='noreferrer'
          >
            <FaFacebookF className='mr-3' style={{ marginBottom: '2px' }} />
          </a>
          <a
            href='https://www.linkedin.com/in/rrankawat/'
            target='_blank'
            rel='noreferrer'
          >
            <FaLinkedinIn size={22} className='mr-3' />
          </a>
          <a
            href='https://www.instagram.com/rakesh.rankawat/'
            target='_blank'
            rel='noreferrer'
          >
            <FiInstagram />
          </a>
        </div>
      </aside>

      <div className='menu' onClick={toggleMenu}>
        {isOpenMenu ? (
          <GrClose className='menu-icon' size={20} />
        ) : (
          <AiOutlineMenu className='menu-icon' size={20} />
        )}
      </div>
    </>
  );
};
