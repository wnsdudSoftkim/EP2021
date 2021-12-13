import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Nav from './Nav';
import Admin from './Admin';
import Main from './Main';
import Profile from './Profile';

export default function App() {
  const [current, setCurrent] = useState('home');
  useEffect(() => {
    setRoute();
    window.addEventListener('hashchange', setRoute);
    return () => window.removeEventListener('hashchange', setRoute);
  }, []);
  function setRoute() {
    const location = window.location.href.split('/');
    const pathname = location[location.length - 1];
    console.log('pathname: ', pathname);
    setCurrent(pathname ? pathname : 'home');
  }
  return (
    <Router>
      <Nav current={current} />
      <Routes>
        <Route exact path='/' element={<Main />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/profile' element={<Profile />} />
        <Route element={<Main />} />
      </Routes>
    </Router>
  );
}
