import { useTranslation } from 'react-i18next';
import { MessageCircle, Instagram } from 'lucide-react';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';

  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a 
              href="https://wa.me/966543636847" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream hover:text-burgundy-light transition-colors duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span className={isArabic ? 'font-arabic' : ''}>WhatsApp</span>
            </a>
            <a 
              href="https://instagram.com/tulay.alkhateeb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cream hover:text-burgundy-light transition-colors duration-300"
            >
              <Instagram className="w-5 h-5" />
              <span className={isArabic ? 'font-arabic' : ''}>Instagram</span>
            </a>
          </div>

          {/* Copyright */}
          <p className={`text-cream/70 text-sm text-center ${isArabic ? 'font-arabic' : ''}`}>
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;