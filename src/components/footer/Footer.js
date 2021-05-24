import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className='footer'>
      <div>&copy; 2021 - RRANKAWAT</div>
      <p>
        Developed By <Link to='/about'>Rakesh Rankawat</Link>
      </p>
    </footer>
  );
};
