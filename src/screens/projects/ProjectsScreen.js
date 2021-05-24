import React from 'react';

import { Header, ImageOverlay } from '../../components';
import { projects } from './_mokeData.json';

const ProjectsScreen = () => {
  return (
    <>
      <Header title='Projects' />
      <section className='section'>
        <div className='projects'>
          {projects.map((project) => (
            <ImageOverlay key={project.id} project={project} />
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectsScreen;
