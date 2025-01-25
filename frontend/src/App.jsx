import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Boutique from './pages/Boutique';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Boutique />} />
        <Route path="/boutique" element={<Boutique />} />
      </Routes>
    </Router>
  );
}

export default App
