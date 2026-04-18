import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Footer from './components/Footer';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="min-h-screen flex flex-col font-sans bg-white text-gray-800">
          <Navbar />
          <main className="flex-grow pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
            </Routes>
          </main>
          
          <Footer />
          
          {/* Floating WhatsApp Button */}
          <a
            href="https://wa.me/6281234567890" // example number
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 text-white rounded-full shadow-2xl hover:bg-green-600 hover:scale-110 transition-transform duration-300"
            aria-label="Chat WhatsApp"
          >
            <MessageCircle className="h-7 w-7" />
          </a>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
