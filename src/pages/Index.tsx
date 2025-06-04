
import React, { useState } from 'react';
import { LanguageProvider } from '../contexts/LanguageContext';
import Navigation from '../components/Navigation';
import HomePage from '../components/HomePage';
import ProductPage from '../components/ProductPage';
import AboutPage from '../components/AboutPage';
import ShippingPage from '../components/ShippingPage';
import ContactPage from '../components/ContactPage';

const Index = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onPageChange={setCurrentPage} />;
      case 'product':
        return <ProductPage />;
      case 'about':
        return <AboutPage />;
      case 'shipping':
        return <ShippingPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onPageChange={setCurrentPage} />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        {renderCurrentPage()}
        
        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-hydro-blue-400">HydroShield AG</h3>
                  <p className="text-gray-400 text-sm">
                    "A quick spray keeps the dirt away"
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Product</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>HydroSpray</li>
                    <li>19.95 CHF</li>
                    <li>Hydrophobic Technology</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Company</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>Headquarters: Liechtenstein</li>
                    <li>Manufacturing: Japan</li>
                    <li>Worldwide Shipping</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Support</h4>
                  <ul className="space-y-2 text-sm text-gray-400">
                    <li>Customer Service</li>
                    <li>Shipping Info</li>
                    <li>Returns</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
                <p>&copy; 2024 HydroShield AG. All rights reserved. | No shipping to USA</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LanguageProvider>
  );
};

export default Index;
