import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import image1 from '@/assets/image1.jpg';
import image2 from '@/assets/image2.jpg';


const ServicesSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      key: 'photography',
      image: image1,
      title: t('services.photography.title'),
      description: t('services.photography.description')
    },
    {
      key: 'voiceover',
      image: image2,
      title: t('services.voiceover.title'),
      description: t('services.voiceover.description')
    },
    {
      key: 'partnership',
      image: '/lovable-uploads/b4d97d0d-28cd-4746-b2c3-a757e9e0d7f3.png',
      title: t('services.partnership.title'),
      description: t('services.partnership.description')
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-cream-light">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            {t('services.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
            >
              <Card className="group overflow-hidden border-0 shadow-elegant hover:shadow-cinematic transition-all duration-500 bg-white">
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-8">
                  <h3 className={`text-2xl font-bold text-foreground mb-4 ${isArabic ? 'font-arabic' : ''}`}>
                    {service.title}
                  </h3>
                  <p className={`text-muted-foreground leading-relaxed ${isArabic ? 'font-arabic' : ''}`}>
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;