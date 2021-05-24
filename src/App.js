import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import MainLayout from './routes/MainLayout';

import HomeScreen from './screens/home/HomeScreen';
import AboutScreen from './screens/about/AboutScreen';
import SkillsScreen from './screens/skills/SkillsScreen';
import ProjectsScreen from './screens/projects/ProjectsScreen';
import ProjectItemScreen from './screens/projects/ProjectItemScreen';
import ContactScreen from './screens/contact/ContactScreen';
import { Sidebar } from './components';

const App = () => {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />

        <Switch>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={HomeScreen} />
          <MainLayout exact path="/about" component={AboutScreen} />
          <MainLayout exact path="/skills" component={SkillsScreen} />
          <MainLayout exact path="/projects" component={ProjectsScreen} />
          <MainLayout
            exact
            path="/projects/:id"
            component={ProjectItemScreen}
          />
          <MainLayout exact path="/contact" component={ContactScreen} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
