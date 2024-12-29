import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from './auth/pages/Signin';

const Provider = () => {
  return (
      <Router>
        <Routes>
          <Route path='/signin' element={<Signin/>} />
        </Routes>
      </Router>
  );
}

export default Provider
