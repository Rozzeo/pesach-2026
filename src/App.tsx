import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Preparation from './pages/Preparation';
import Recipes from './pages/Recipes';
import KidsZone from './pages/KidsZone';

export default function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <div className="min-h-screen bg-parchment">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/preparation" element={<Preparation />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/kids" element={<KidsZone />} />
        </Routes>
        <footer className="text-center py-8 text-sm text-stone-400 border-t border-sand mt-8">
          <p>Chag Pesach Sameach 🍷 · Passover 2026 · April 1–9</p>
        </footer>
      </div>
    </BrowserRouter>
    </LanguageProvider>
  );
}
