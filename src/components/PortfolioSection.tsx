import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioSection = () => {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === 'ar';
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // For demo purposes, we'll use placeholder videos
  const videos = [
    {
      title: t('portfolio.clientCampaign'),
      description: 'Professional campaign showcasing brand storytelling through mobile photography',
      placeholder: 'Client Campaign Video'
    },
    {
      title: t('portfolio.behindScenes'),
      description: 'Behind the scenes look at the creative process and mobile photography techniques',
      placeholder: 'Behind the Scenes Video'
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
                  {/* Video Placeholder - Replace with actual video when available */}
                  <div className="w-full h-64 bg-gradient-accent flex items-center justify-center">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-lg font-medium">{video.placeholder}</p>
                    </div>
                  </div>
                  {/* 
                  Uncomment when actual videos are available:
                  <video 
                    className="w-full h-64 object-cover"
                    controls
                    poster="/path/to/thumbnail.jpg"
                  >
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  */}
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