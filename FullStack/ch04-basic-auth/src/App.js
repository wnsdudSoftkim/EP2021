import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

import Nav from './Nav';
import Home from './Home';
import Profile from './Profile';
import Protected from './Protected';
import Error from './Error';

const App = () => {
  const { pathname } = useLocation();
  const [current, setCurrent] = useState(pathname);

  console.log('pathname=', pathname);
  useEffect(() => {
    setCurrent(pathname);
  }, [pathname]);

  return (
    <>
      <Nav current={current} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='protected' element={<Protected />} />
        <Route path='profile' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
};

export default App;
