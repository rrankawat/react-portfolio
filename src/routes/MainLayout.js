import React from 'react';
import { Route } from 'react-router-dom';
import { Footer } from '../components';

const Layout = ({ children, ...rest }) => {
  return (
    <>
      <div className='main'>
        {children}
        <Footer />
      </div>
    </>
  );
};

const MainLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (
        <Layout {...rest}>
          <Component />
        </Layout>
      )}
    />
  );
};

export default MainLayout;
