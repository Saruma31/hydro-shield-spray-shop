
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Truck, Package, Info } from 'lucide-react';

const ShippingPage: React.FC = () => {
  const { t } = useLanguage();

  const shippingSteps = [
    {
      step: '1',
      title: t('shipping.process.1'),
      description: 'Precision manufacturing using robotic technology',
      icon: '🏭'
    },
    {
      step: '2',
      title: t('shipping.process.2'),
      description: 'Eco-friendly ocean transport to European ports',
      icon: '🚢'
    },
    {
      step: '3',
      title: t('shipping.process.3'),
      description: 'Sustainable rail network distribution',
      icon: '🚂'
    },
    {
      step: '4',
      title: t('shipping.process.4'),
      description: 'Local delivery service to your address',
      icon: '🚚'
    }
  ];

  const shippingZones = [
    { region: 'Europe', time: '5-7 days', cost: 'Free over 50 CHF' },
    { region: 'Asia Pacific', time: '7-10 days', cost: '15 CHF' },
    { region: 'Americas (except USA)', time: '10-14 days', cost: '25 CHF' },
    { region: 'Australia', time: '12-16 days', cost: '30 CHF' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
              {t('shipping.title')}
            </h1>
            <p className="text-xl text-gray-600 animate-fade-in">
              {t('shipping.worldwide')} - {t('shipping.description')}
            </p>
          </div>

          {/* USA Notice */}
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-12 animate-fade-in">
            <div className="flex items-center space-x-3">
              <Info className="w-6 h-6 text-red-600 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-red-800 mb-2">Important Notice</h3>
                <p className="text-red-700">
                  {t('common.noShippingUSA')}. We apologize for any inconvenience.
                </p>
              </div>
            </div>
          </div>

          {/* Shipping Process */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {t('shipping.process.title')}
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {shippingSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative text-center p-6 bg-hydro-blue-50 rounded-xl hover:bg-hydro-blue-100 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="absolute -top-3 -right-3 bg-hydro-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Shipping Zones */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Shipping Zones & Rates
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {shippingZones.map((zone, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-6 hover:border-hydro-blue-300 hover:bg-hydro-blue-50 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                    <Package className="w-5 h-5 text-hydro-blue-600 mr-2" />
                    {zone.region}
                  </h3>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Delivery Time:</span>
                      <span className="font-medium">{zone.time}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Shipping Cost:</span>
                      <span className="font-medium text-hydro-blue-600">{zone.cost}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sustainability Focus */}
          <div className="bg-white rounded-2xl shadow-xl p-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Sustainable Logistics
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Sea Transport</h3>
                <p className="text-gray-600">
                  Lower carbon footprint compared to air freight
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl mb-4">🚂</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Rail Network</h3>
                <p className="text-gray-600">
                  Efficient overland distribution across Europe
                </p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-xl">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Eco Packaging</h3>
                <p className="text-gray-600">
                  Recyclable materials and minimal waste
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPage;
