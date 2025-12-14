import Link from 'next/link';
import { BookOpen, Activity, Heart, Users } from 'lucide-react';
import * as motion from 'framer-motion/client';

export default function Resources() {
  const categories = [
    {
      title: 'Types of Vitiligo',
      description: 'Learn about the different forms of vitiligo (Segmental, Non-segmental, etc.)',
      icon: BookOpen,
      href: '/resources/types',
      color: 'bg-blue-500',
    },
    {
      title: 'Treatment Options',
      description: 'Explore medical and surgical treatments, phototherapy, and more.',
      icon: Activity,
      href: '/resources/treatment',
      color: 'bg-green-500',
    },
    {
      title: 'Topics & Coping',
      description: 'Advice on skincare, diet, mental health, and social situations.',
      icon: Heart,
      href: '/resources/topics',
      color: 'bg-red-500',
    },
    {
      title: 'Multiple Diagnosis',
      description: 'Support for those managing vitiligo alongside other autoimmune conditions.',
      icon: Users,
      href: '/resources/multiple-diagnosis',
      color: 'bg-purple-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-50">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Resources & Education
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Empower yourself with knowledge. Explore our curated articles and guides.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2"
        >
          {categories.map((category) => (
            <motion.div key={category.title} variants={itemVariants} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Link href={category.href} className="block group h-full">
                <div className="flex flex-col h-full bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-purple-100 overflow-hidden hover:shadow-xl hover:border-purple-200 transition-all duration-300">
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div className="flex-1">
                      <div className={`inline-flex p-3 rounded-lg ${category.color} text-white mb-4 shadow-md`}>
                        <category.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                        {category.title}
                      </h3>
                      <p className="mt-3 text-base text-gray-600 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center">
                      <span className="text-purple-600 font-medium group-hover:text-purple-700 transition-colors flex items-center">
                        View Articles <span className="ml-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
