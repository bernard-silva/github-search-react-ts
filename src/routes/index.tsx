import { Route, Routes } from 'react-router-dom';
import Repositories from '../pages/Repositories';
import Home from '../pages/Home';

function AppRoutes () {
  return (
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/:username/repositories" element={<Repositories/>} />
    </Routes>
  )
}

export default AppRoutes;
