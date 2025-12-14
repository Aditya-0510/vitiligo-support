import Hero from '@/components/Hero';
import QuickAccessCard from '@/components/QuickAccessCard';
import { Brain, MessageCircle, HeartHandshake, Briefcase, Video } from 'lucide-react';
import * as motion from 'framer-motion/client';
import { BubbleCursor } from '@/components/BubbleCursor';

export default function Home() {
  const cards = [
    {
      title: 'Meet Psychologists',
      description: 'Find professional mental health support specialized in skin conditions.',
      icon: Brain,
      href: '/psychologists',
      color: 'bg-purple-500',
    },
    {
      title: 'Counselling',
      description: 'Join group or individual counselling sessions for emotional support.',
      icon: MessageCircle,
      href: '/counselling',
      color: 'bg-indigo-500',
    },
    {
      title: 'Marriage Bureau',
      description: 'Connect with others looking for life partners in a safe environment.',
      icon: HeartHandshake,
      href: '/marriage',
      color: 'bg-rose-500',
    },
    {
      title: 'Employment',
      description: 'Explore job opportunities from inclusive employers.',
      icon: Briefcase,
      href: '/employment',
      color: 'bg-violet-500',
    },
    {
      title: 'Inspiring Stories',
      description: 'Watch videos and read stories of resilience and success.',
      icon: Video,
      href: '/stories',
      color: 'bg-fuchsia-500',
    },
  ];

  return (
    
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10">
        {/* <BubbleCursor > */}
        <Hero />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold text-gray-900 mb-8 text-center"
          >
            Explore Our Community
          </motion.h2>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
              hidden: {}
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {cards.map((card) => (
              <QuickAccessCard
                key={card.title}
                title={card.title}
                description={card.description}
                icon={card.icon}
                href={card.href}
                color={card.color}
              />
            ))}
          </motion.div>
        </div>

        <div className="bg-white/80 backdrop-blur-md py-16 relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-indigo-50 opacity-50" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:text-center"
            >
              <h2 className="text-base text-purple-600 font-semibold tracking-wide uppercase">About Us</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Why Vitiligo Connect?
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                We believe that everyone deserves to feel confident and supported. Our platform brings together resources, experts, and a loving community to help you navigate life with vitiligo.
              </p>
            </motion.div>
          </div>
        </div>
        <BubbleCursor />
      </div>
    </div>

  );
}
