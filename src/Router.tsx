import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home/Home';
import Navbar from './components/common/Navbar/Navbar';
import Footer from './components/common/footer/Footer';
import Imagination from './pages/Imagination/Imagination';
import Exercise from './pages/Exercise/Exercise';
import Write from './pages/Imagination/Write';
import AISummary from './pages/AISummary/AISummary';

const Router = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/imagination' element={<Imagination />} />
          <Route path='/exercise' element={<Exercise />} />
          <Route path='/write' element={<Write />} />
          <Route path='/imagination/write' element={<Write />} />
          <Route path='/aisummary' element={<AISummary />} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
