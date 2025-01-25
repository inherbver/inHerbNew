import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Boutique from './pages/Boutique';
import Auth from './pages/Auth';
import Events from './pages/Events';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Boutique />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/events" element={<Events />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App
