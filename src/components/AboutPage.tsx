
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Package, Truck, Info } from 'lucide-react';

const AboutPage: React.FC = () => {
  const { t } = useLanguage();

  const processSteps = [
    {
      icon: <Package className="w-8 h-8 text-hydro-blue-600" />,
      title: 'Robotic Manufacturing',
      description: 'State-of-the-art robots ensure precise production in Japan'
    },
    {
      icon: <Truck className="w-8 h-8 text-hydro-blue-600" />,
      title: 'Quality Control',
      description: 'Every bottle undergoes rigorous testing before shipping'
    },
    {
      icon: <Info className="w-8 h-8 text-hydro-blue-600" />,
      title: 'Sustainable Shipping',
      description: 'Eco-friendly sea and rail transport to Europe'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Company Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              {t('about.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in">
              {t('about.description')}
            </p>
          </div>

          {/* Company Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  HydroShield AG
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Headquarters:</span>
                    Liechtenstein 🇱🇮
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Manufacturing:</span>
                    Japan 🇯🇵
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Founded:</span>
                    2020
                  </p>
                  <p className="flex items-center">
                    <span className="font-semibold mr-2">Specialty:</span>
                    Hydrophobic Surface Technology
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-gradient-to-br from-hydro-blue-100 to-hydro-blue-200 rounded-2xl p-8 shadow-inner">
                  <div className="text-6xl mb-4">🏢</div>
                  <h3 className="text-2xl font-bold text-gray-900">Innovation Center</h3>
                  <p className="text-gray-600 mt-2">Liechtenstein</p>
                </div>
              </div>
            </div>
          </div>

          {/* Production Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('about.production.title')}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {t('about.production.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-hydro-blue-50 rounded-xl hover:bg-hydro-blue-100 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Manufacturing in Japan */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-fade-in">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-center">
                <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-8 shadow-inner">
                  <div className="text-6xl mb-4">🤖</div>
                  <h3 className="text-2xl font-bold text-gray-900">Robotic Production</h3>
                  <p className="text-gray-600 mt-2">Made in Japan</p>
                </div>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Precision Manufacturing
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Our HydroSpray is manufactured in Japan using cutting-edge robotic technology, 
                    ensuring consistent quality and precision in every bottle.
                  </p>
                  <p>
                    The automated production process minimizes human error and maintains 
                    the highest standards of quality control throughout the manufacturing cycle.
                  </p>
                  <p>
                    Japanese manufacturing excellence combined with Swiss precision in 
                    product development creates the perfect synergy for premium quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('about.shipping.title')}
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              {t('about.shipping.description')}
            </p>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-xl">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="font-bold text-gray-900 mb-2">Japan</h3>
                <p className="text-sm text-gray-600">Manufacturing</p>
              </div>
              <div className="text-center p-6 bg-blue-100 rounded-xl">
                <div className="text-4xl mb-4">🚢</div>
                <h3 className="font-bold text-gray-900 mb-2">Sea Freight</h3>
                <p className="text-sm text-gray-600">To Europe</p>
              </div>
              <div className="text-center p-6 bg-blue-200 rounded-xl">
                <div className="text-4xl mb-4">🚂</div>
                <h3 className="font-bold text-gray-900 mb-2">Rail Transport</h3>
                <p className="text-sm text-gray-600">Distribution</p>
              </div>
              <div className="text-center p-6 bg-blue-300 rounded-xl">
                <div className="text-4xl mb-4">🚚</div>
                <h3 className="font-bold text-gray-900 mb-2">Final Delivery</h3>
                <p className="text-sm text-gray-600">To Your Door</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
