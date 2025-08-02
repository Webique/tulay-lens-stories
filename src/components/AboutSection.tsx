import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import img from '../assets/IMG_3904.jpg';
const AboutSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: isArabic ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`${isArabic ? 'lg:order-2' : ''}`}
          >
            <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-8 ${isArabic ? 'font-arabic' : ''}`}>
              {t('about.title')}
            </h2>
            
            <blockquote className={`text-2xl md:text-3xl text-burgundy font-light italic mb-8 ${isArabic ? 'font-arabic' : ''}`}>
              "{t('about.quote')}"
            </blockquote>
            
            <p className={`text-lg text-muted-foreground leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
              {t('about.description')}
            </p>
          </motion.div>

          {/* Image - Simple and direct approach */}
          <motion.div 
            initial={{ opacity: 0, x: isArabic ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className={`${isArabic ? 'lg:order-1' : ''}`}
          >
            <div className="w-full h-[500px] rounded-2xl overflow-hidden shadow-lg border-2 border-gray-200">
              <img 
                src={img}
                alt="About Tulay Alkhateeb"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: 'center 25%'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;