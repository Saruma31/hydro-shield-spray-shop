
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Package, Truck, Search } from 'lucide-react';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onPageChange }) => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Package className="w-8 h-8 text-hydro-blue-600" />,
      title: t('product.benefits.1'),
      description: 'Glass, metal, fabrics, plastics and more'
    },
    {
      icon: <Search className="w-8 h-8 text-hydro-blue-600" />,
      title: t('product.benefits.2'),
      description: 'Long-lasting protection with just one application'
    },
    {
      icon: <Truck className="w-8 h-8 text-hydro-blue-600" />,
      title: t('shipping.worldwide'),
      description: t('shipping.description')
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-hydro-blue-50 to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-hydro-blue-600 mb-8 font-medium animate-fade-in">
              "{t('hero.subtitle')}"
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto animate-fade-in">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <button
                onClick={() => onPageChange('product')}
                className="bg-hydro-blue-600 hover:bg-hydro-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {t('hero.cta')}
              </button>
              <button
                onClick={() => onPageChange('about')}
                className="border-2 border-hydro-blue-600 text-hydro-blue-600 hover:bg-hydro-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                {t('hero.learnMore')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-slide-in">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  {t('product.name')}
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  {t('product.description')}
                </p>
                <div className="bg-hydro-blue-50 p-6 rounded-lg">
                  <div className="text-3xl font-bold text-hydro-blue-600 mb-2">
                    {t('product.price')}
                  </div>
                  <button
                    onClick={() => onPageChange('product')}
                    className="bg-hydro-blue-600 hover:bg-hydro-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    {t('product.buyNow')}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-center animate-fade-in">
                <div className="bg-gradient-to-br from-hydro-blue-100 to-hydro-blue-200 rounded-2xl p-12 shadow-inner">
                  <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                    <div className="mb-6">
                      <img
                        src="https://i.imgur.com/yCj4WhD.png"
                        alt="HydroSpray"
                        className="w-24 h-24 mx-auto object-contain"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">HydroSpray</h3>
                    <p className="text-gray-600">Hydrophobic Surface Technology</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Why Choose HydroSpray?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in text-center"
                >
                  <div className="bg-hydro-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-hydro-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Transform Your Surfaces?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers worldwide
          </p>
          <button
            onClick={() => onPageChange('product')}
            className="bg-white text-hydro-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {t('hero.cta')} - {t('product.price')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
