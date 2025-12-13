import Hero from '@/components/Hero';
import QuickAccessCard from '@/components/QuickAccessCard';
import { Brain, MessageCircle, HeartHandshake, Briefcase, Video } from 'lucide-react';

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
      color: 'bg-green-500',
    },
    {
      title: 'Marriage Bureau',
      description: 'Connect with others looking for life partners in a safe environment.',
      icon: HeartHandshake,
      href: '/marriage',
      color: 'bg-red-500',
    },
    {
      title: 'Employment',
      description: 'Explore job opportunities from inclusive employers.',
      icon: Briefcase,
      href: '/employment',
      color: 'bg-blue-500',
    },
    {
      title: 'Inspiring Stories',
      description: 'Watch videos and read stories of resilience and success.',
      icon: Video,
      href: '/stories',
      color: 'bg-yellow-500',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Hero />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
          Explore Our Community
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Why Vitiligo Connect?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We believe that everyone deserves to feel confident and supported. Our platform brings together resources, experts, and a loving community to help you navigate life with vitiligo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
