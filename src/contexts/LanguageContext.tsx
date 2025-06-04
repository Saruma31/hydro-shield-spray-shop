
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.product': 'Product',
    'nav.about': 'About Us',
    'nav.shipping': 'Shipping',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'HydroShield AG',
    'hero.subtitle': 'A quick spray keeps the dirt away',
    'hero.description': 'Transform any surface into a hydrophobic barrier with our innovative HydroSpray technology.',
    'hero.cta': 'Shop Now',
    'hero.learnMore': 'Learn More',
    
    // Product
    'product.name': 'HydroSpray',
    'product.price': '19.95 CHF',
    'product.description': 'HydroSpray is an innovative spray that makes any surface hydrophobic (water-repellent). Suitable for use on glass, metal, fabrics, plastics and more.',
    'product.benefits.title': 'Benefits',
    'product.benefits.1': 'Universal application on all surfaces',
    'product.benefits.2': 'Long-lasting water repellent effect',
    'product.benefits.3': 'Easy application',
    'product.benefits.4': 'Made in Japan with precision',
    'product.ingredients.title': 'Ingredients & Materials',
    'product.buyNow': 'Buy Now',
    
    // About
    'about.title': 'About HydroShield AG',
    'about.description': 'Based in Liechtenstein, HydroShield AG is a pioneer in hydrophobic surface technology.',
    'about.production.title': 'Production Process',
    'about.production.description': 'Our HydroSpray is manufactured in Japan using state-of-the-art robotic technology, ensuring consistent quality and precision.',
    'about.shipping.title': 'Sustainable Shipping',
    'about.shipping.description': 'Products are shipped by sea to Europe, then transported by train to minimize environmental impact.',
    
    // Shipping
    'shipping.title': 'Shipping & Delivery',
    'shipping.worldwide': 'Worldwide Shipping',
    'shipping.description': 'We deliver to all countries except the USA.',
    'shipping.process.title': 'Our Shipping Process',
    'shipping.process.1': 'Manufacturing in Japan',
    'shipping.process.2': 'Sea freight to Europe',
    'shipping.process.3': 'Train transport to distribution centers',
    'shipping.process.4': 'Final delivery to your door',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.info.title': 'Company Information',
    'contact.info.company': 'HydroShield AG',
    'contact.info.country': 'Liechtenstein',
    
    // Ingredients
    'ingredients.ozone': 'Ozone - Obtained by irradiating oxygen with a specific wavelength',
    'ingredients.oil': 'Oil - Extracted from drilling platforms',
    'ingredients.alloy': 'Zinc-Copper-Bronze Alloy - Mined from specialized mines',
    'ingredients.krypton': 'Krypton - Extracted through air distillation',
    'ingredients.mercury': 'Mercury - Obtained from cinnabar',
    'ingredients.lotus': 'Indian Lotus - Harvested in specialized farm buildings',
    'ingredients.sand': 'Fine Quartz Sand - Mined from quartz mines',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.noShippingUSA': 'No shipping to USA',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.product': 'Produkt',
    'nav.about': 'Über uns',
    'nav.shipping': 'Versand',
    'nav.contact': 'Kontakt',
    
    // Hero Section
    'hero.title': 'HydroShield AG',
    'hero.subtitle': 'Ein kurzer Sprühstoß hält den Schmutz fern',
    'hero.description': 'Verwandeln Sie jede Oberfläche mit unserer innovativen HydroSpray-Technologie in eine hydrophobe Barriere.',
    'hero.cta': 'Jetzt kaufen',
    'hero.learnMore': 'Mehr erfahren',
    
    // Product
    'product.name': 'HydroSpray',
    'product.price': '19.95 CHF',
    'product.description': 'HydroSpray ist ein innovatives Spray, das jede Oberfläche hydrophob (wasserabweisend) macht. Es eignet sich für den Gebrauch auf Glas, Metall, Stoffen, Kunststoffen und mehr.',
    'product.benefits.title': 'Vorteile',
    'product.benefits.1': 'Universelle Anwendung auf allen Oberflächen',
    'product.benefits.2': 'Langanhaltende wasserabweisende Wirkung',
    'product.benefits.3': 'Einfache Anwendung',
    'product.benefits.4': 'Hergestellt in Japan mit Präzision',
    'product.ingredients.title': 'Inhaltsstoffe & Materialien',
    'product.buyNow': 'Jetzt kaufen',
    
    // About
    'about.title': 'Über HydroShield AG',
    'about.description': 'Mit Sitz in Liechtenstein ist die HydroShield AG ein Pionier in der hydrophoben Oberflächentechnologie.',
    'about.production.title': 'Produktionsprozess',
    'about.production.description': 'Unser HydroSpray wird in Japan mit modernster Robotertechnologie hergestellt und gewährleistet so gleichbleibende Qualität und Präzision.',
    'about.shipping.title': 'Nachhaltiger Versand',
    'about.shipping.description': 'Die Produkte werden per Schiff nach Europa transportiert und dann per Zug weitertransportiert, um die Umweltbelastung zu minimieren.',
    
    // Shipping
    'shipping.title': 'Versand & Lieferung',
    'shipping.worldwide': 'Weltweiter Versand',
    'shipping.description': 'Wir liefern in alle Länder außer in die USA.',
    'shipping.process.title': 'Unser Versandprozess',
    'shipping.process.1': 'Herstellung in Japan',
    'shipping.process.2': 'Seefracht nach Europa',
    'shipping.process.3': 'Bahntransport zu Vertriebszentren',
    'shipping.process.4': 'Finale Lieferung vor Ihre Haustür',
    
    // Contact
    'contact.title': 'Kontakt',
    'contact.form.name': 'Name',
    'contact.form.email': 'E-Mail',
    'contact.form.message': 'Nachricht',
    'contact.form.send': 'Nachricht senden',
    'contact.info.title': 'Firmeninformationen',
    'contact.info.company': 'HydroShield AG',
    'contact.info.country': 'Liechtenstein',
    
    // Ingredients
    'ingredients.ozone': 'Ozon - Durch Bestrahlung von Sauerstoff mit einer bestimmten Wellenlänge gewonnen',
    'ingredients.oil': 'Öl - Aus Bohrinseln abgebaut',
    'ingredients.alloy': 'Zink-Kupfer-Bronze-Legierung - In Minen abgebaut',
    'ingredients.krypton': 'Krypton - Durch Luftdestillation extrahiert',
    'ingredients.mercury': 'Quecksilber - Aus Zinnober gewonnen',
    'ingredients.lotus': 'Indischer Lotus - In spezialisierten Farmgebäuden geerntet',
    'ingredients.sand': 'Feiner Quarzsand - In Quarzminen abgebaut',
    
    // Common
    'common.loading': 'Laden...',
    'common.error': 'Ein Fehler ist aufgetreten',
    'common.noShippingUSA': 'Kein Versand in die USA',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('hydroshield-language');
    return (saved as Language) || 'en';
  });

  useEffect(() => {
    localStorage.setItem('hydroshield-language', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
