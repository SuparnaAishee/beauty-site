import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Reviews from './components/reviews/Reviews';
import Dashboard from './components/dashboard/Dashboard';
import Blogs from './components/blogs/Blogs';
import About from './components/about/About';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <div className='mx-11'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/blogs' element={<Blogs />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
