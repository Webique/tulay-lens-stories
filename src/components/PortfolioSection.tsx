import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import vid1 from '@/assets/vid1.mp4';
import vid2 from '@/assets/vid2.mp4';

const PortfolioSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Actual videos with proper data
  const videos = [
    {
      title: t('portfolio.clientCampaign'),
      description: t('portfolio.description'),
      src: vid1,
      poster: '/placeholder.svg'
    },
    {
      title: t('portfolio.clientCampaign2'),
      description: t('portfolio.description'),
      src: vid2,
      poster: '/placeholder.svg'
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold text-foreground mb-6 ${isArabic ? 'font-arabic' : ''}`}>
            {t('portfolio.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.3, ease: "easeOut" }}
            >
              <Card className="overflow-hidden border-0 shadow-elegant hover:shadow-cinematic transition-all duration-500 bg-white">
                <div className="relative">
                  <video 
                    className="w-full h-64 object-cover"
                    controls
                    poster={video.poster}
                    preload="metadata"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <CardContent className="p-6">
                  <h3 className={`text-xl font-bold text-foreground mb-3 ${isArabic ? 'font-arabic' : ''}`}>
                    {video.title}
                  </h3>
                  <p className={`text-muted-foreground ${isArabic ? 'font-arabic' : ''}`}>
                    {video.description}
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

export default PortfolioSection;