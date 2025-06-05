import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Package, Search, Info, Truck } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSprayCan } from '@fortawesome/free-solid-svg-icons';

const ProductPage: React.FC = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: <Package className="w-6 h-6 text-hydro-blue-600" />,
      text: t('product.benefits.1')
    },
    {
      icon: <Search className="w-6 h-6 text-hydro-blue-600" />,
      text: t('product.benefits.2')
    },
    {
      icon: <Info className="w-6 h-6 text-hydro-blue-600" />,
      text: t('product.benefits.3')
    },
    {
      icon: <Truck className="w-6 h-6 text-hydro-blue-600" />,
      text: t('product.benefits.4')
    }
  ];

  const ingredients = [
    t('ingredients.ozone'),
    t('ingredients.oil'),
    t('ingredients.alloy'),
    t('ingredients.krypton'),
    t('ingredients.mercury'),
    t('ingredients.lotus'),
    t('ingredients.sand')
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Product Header */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold text-gray-900 animate-fade-in">
                  {t('product.name')}
                </h1>
                <p className="text-lg text-gray-600 animate-fade-in">
                  {t('product.description')}
                </p>
                <div className="bg-hydro-blue-50 p-6 rounded-xl animate-fade-in">
                  <div className="text-3xl font-bold text-hydro-blue-600 mb-4">
                    {t('product.price')}
                  </div>
                  <div className="text-sm text-red-600 mb-4 font-medium">
                    {t('common.noShippingUSA')}
                  </div>
                  <button className="w-full bg-hydro-blue-600 hover:bg-hydro-blue-700 text-white py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                    {t('product.buyNow')}
                  </button>
                </div>
              </div>

              <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="bg-gradient-to-br from-hydro-blue-100 to-hydro-blue-200 rounded-2xl p-12 shadow-inner max-w-md w-full">
                  <div className="bg-white rounded-xl p-8 text-center shadow-lg flex flex-col items-center space-y-6">
                    <div className="text-8xl">
                      <FontAwesomeIcon icon={faSprayCan} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">HydroSpray</h3>
                    <p className="text-gray-600">Premium Formula</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('product.benefits.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-6 bg-hydro-blue-50 rounded-xl hover:bg-hydro-blue-100 transition-all duration-300 animate-slide-in"
                >
                  <div className="bg-white p-3 rounded-full shadow-md">
                    {benefit.icon}
                  </div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Ingredients Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('product.ingredients.title')}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 rounded-lg border-l-4 border-hydro-blue-600 hover:bg-hydro-blue-50 transition-all duration-300 animate-fade-in"
                >
                  <p className="text-gray-700">{ingredient}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Examples */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Application Examples
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {['Glass', 'Metal', 'Fabric', 'Plastic'].map((surface, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-hydro-blue-50 to-hydro-blue-100 rounded-xl hover:from-hydro-blue-100 hover:to-hydro-blue-200 transition-all duration-300 transform hover:scale-105 animate-fade-in"
                >
                  <div className="text-4xl mb-4">
                    {surface === 'Glass' && '🪟'}
                    {surface === 'Metal' && '🔧'}
                    {surface === 'Fabric' && '👕'}
                    {surface === 'Plastic' && '🧴'}
                  </div>
                  <h3 className="font-bold text-gray-900">{surface}</h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;
