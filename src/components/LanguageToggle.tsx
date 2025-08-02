import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <Button
      onClick={toggleLanguage}
      variant="outline"
      size="sm"
      className="fixed top-6 right-6 z-50 bg-burgundy text-white border-burgundy hover:bg-burgundy-dark hover:border-burgundy-dark transition-all duration-300 shadow-lg"
    >
      {i18n.language === 'en' ? 'العربية' : 'English'}
    </Button>
  );
};

export default LanguageToggle;