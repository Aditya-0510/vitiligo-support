import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import * as motion from 'framer-motion/client';

interface QuickAccessCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

const QuickAccessCard = ({ title, description, icon: Icon, href, color }: QuickAccessCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Link href={href} className="block group h-full">
        <div className={`h-full p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-purple-100 bg-white/80 backdrop-blur-sm hover:border-purple-200`}>
          <div className={`inline-flex p-3 rounded-lg ${color} text-white mb-4 shadow-md`}>
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
            {title}
          </h3>
          <p className="mt-2 text-gray-600 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default QuickAccessCard;