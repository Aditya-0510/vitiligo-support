import Link from 'next/link';
import { LucideIcon } from 'lucide-react';

interface QuickAccessCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
}

const QuickAccessCard = ({ title, description, icon: Icon, href, color }: QuickAccessCardProps) => {
  return (
    <Link href={href} className="block group">
      <div className={`h-full p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 bg-white`}>
        <div className={`inline-flex p-3 rounded-lg ${color} text-white mb-4`}>
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="mt-2 text-gray-500 text-sm">
          {description}
        </p>
      </div>
    </Link>
  );
};

export default QuickAccessCard;
