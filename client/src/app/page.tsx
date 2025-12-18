// client/src/app/page.tsx (Updated version)
import Hero from '@/components/Hero';
import PhotoCarousel from '@/components/PhotoCarousel';
import QuickAccessCard from '@/components/QuickAccessCard';
import FlyingPosters from '@/components/FlyingPosters';
import { Brain, MessageCircle, HeartHandshake, Briefcase, Video } from 'lucide-react';
import * as motion from 'framer-motion/client';
import { BubbleCursor } from '@/components/BubbleCursor';
import FloatingLines from '@/components/FloatingLines';




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

  // Images for the FlyingPosters component
  // Using CORS-enabled image sources
  const posterItems = [
    'https://miro.medium.com/v2/resize:fit:786/format:webp/1*rjBFN0BFNgZKn9gO6uXFEg.jpeg', // https://vrfoundation.org/uploads/wvd/content/image/1/World_Vitiligo_Day.jpg
    'https://fwdlife.in/wp-content/uploads/2018/05/vitiligo-1.jpg',
    'https://cdn.shopify.com/s/files/1/0567/1865/5531/files/could-near-infrared-saunas-be-the-best-thing-for-your-skin-5.jpg',
    'https://images.unsplash.com/photo-1694005892002-5c43b8febc2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://www.wellahealth.com/blog/wp-content/uploads/2024/07/vitiligo-1.png'
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0 pointer-events-auto">
        <FloatingLines
          enabledWaves={['top', 'middle', 'bottom']}
          lineDistance={[7, 5, 3]}
          bendRadius={5.0}
          lineCount={[6, 10, 12]}
          bendStrength={-1}
          interactive={true}
          parallax={true}
        />
      </div>
      <Hero />

      <PhotoCarousel />

      <div className="relative z-10 pointer-events-none">


        {/* Explore Our Community Section */}
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

        {/* FlyingPosters Community Showcase Section */}
        <section className="py-20 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-4">
                Community Moments
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Scroll through beautiful moments from our vibrant community members
              </p>
            </motion.div>

            {/* Flying Posters Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative pointer-events-auto"
              style={{
                height: '650px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                background: 'linear-gradient(135deg, rgba(139,92,246,0.1) 0%, rgba(59,130,246,0.1) 100%)',
                border: '1px solid rgba(139,92,246,0.2)',
              }}
            >
              <FlyingPosters
                items={posterItems}
                planeWidth={280}
                planeHeight={280}
                distortion={2.5}
                scrollEase={0.08}
                cameraZ={22}
                className="pointer-events-auto"
              />
            </motion.div>

            {/* Helper Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 text-center"
            >
              <p className="text-sm text-gray-500">
                ↕️ Scroll to see more community moments
              </p>
            </motion.div>
          </div>
        </section>

        {/* About Us Section */}
        <div className="py-16 relative overflow-hidden pointer-events-auto">
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
                Why VitiLife?
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