import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import LandingPage from './LandingPage';
import LoginForm from '../Authentication/LoginForm';
import RegistrationForm from '../Authentication/RegistrationForm';
import Calendar from '../Calendar/Calendar'
import EventItem from '../Calendar/EventItem'

const Home = () => {
  return (
    <div>
      <Router>
        < Header />
        < LandingPage />
        < LoginForm />
        < RegistrationForm />
        < Calendar />
        < EventItem />
      </Router>
    </div>
  );
};


export default Home;
