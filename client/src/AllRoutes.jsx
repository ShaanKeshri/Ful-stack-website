import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Auth from './pages/Auth';
// eslint-disable-next-line no-unused-vars
const AllRoutes = () => {
  return (
    <Routes>
      <Route exect path="/" element={<Home />} />
      <Route path="/Auth" element={<Auth />} />
    </Routes>
  );
};

export default AllRoutes;
