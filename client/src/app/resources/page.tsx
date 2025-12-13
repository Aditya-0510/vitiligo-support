import Link from 'next/link';
import { BookOpen, Activity, Heart, Users } from 'lucide-react';

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

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Resources & Education
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Empower yourself with knowledge. Explore our curated articles and guides.
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
          {categories.map((category) => (
            <Link key={category.title} href={category.href} className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <div className={`inline-flex p-3 rounded-lg ${category.color} text-white mb-4`}>
                    <category.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500">
                    {category.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <span className="text-blue-600 hover:text-blue-500 font-medium">
                    View Articles &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
