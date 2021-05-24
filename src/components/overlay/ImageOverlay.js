import React from 'react';
import { Link } from 'react-router-dom';
import './ImageOverlay.scss';
import { Image } from 'react-bootstrap';
import { IoIosSearch } from 'react-icons/io';
import PropTypes from 'prop-types';

export const ImageOverlay = ({ project }) => {
  return (
    <Link to={`/projects/${project.id}`}>
      <section className='overlay'>
        <Image
          src='https://kingstudio.ro/demos/mnml/images/project1.jpg'
          className='overlay-image'
          fluid
        />
        <div className='overlay-effect'>
          <h5 className='title'>{project.name}</h5>
          <p className='tech mt-2'>{project.technology}</p>
        </div>
        <IoIosSearch size={22} className='icon' />
      </section>
    </Link>
  );
};

ImageOverlay.propTypes = {
  project: PropTypes.object.isRequired,
};
