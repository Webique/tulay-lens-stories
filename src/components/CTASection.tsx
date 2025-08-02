import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { MessageCircle, Instagram } from 'lucide-react';

const CTASection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-white mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            {t('cta.title')}
          </h2>
          
          <p className={`text-xl text-cream mb-12 max-w-2xl mx-auto ${isArabic ? 'font-arabic' : ''}`}>
            {t('cta.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <Button 
                asChild
                size="lg"
                className="bg-burgundy hover:bg-burgundy-dark text-white border-0 px-8 py-4 text-lg font-medium shadow-elegant hover:shadow-cinematic transition-all duration-300"
              >
                <a 
                  href="https://wa.me/966543636847" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className={isArabic ? 'font-arabic' : ''}>{t('cta.whatsapp')}</span>
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <Button 
                asChild
                variant="outline"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/30 hover:border-white/50 px-8 py-4 text-lg font-medium backdrop-blur-sm transition-all duration-300"
              >
                <a 
                  href="https://instagram.com/tulay.alkhateeb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                  <Instagram className="w-5 h-5" />
                  <span className={isArabic ? 'font-arabic' : ''}>{t('cta.instagram')}</span>
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;