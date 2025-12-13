"use client";

import Link from 'next/link';
import { Search, User, Menu } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser, isAuthenticated } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-600">VitiligoConnect</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Home</Link>
            
            {isAuthenticated ? (
              <>
                 <Link href="/dashboard" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                 <Link href="/groups" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Groups</Link>
                 <Link href="/profile" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">
                  {user?.name || 'Profile'}
                 </Link>
                 <button 
                  onClick={handleLogout}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                 >
                  Logout
                 </button>
              </>
            ) : (
              <>
                <Link href="/resources" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Resources</Link>
                <Link href="/qa" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Q&A</Link>
                <Link href="/groups" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Groups</Link>
                <Link href="/connect" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Meet Others</Link>
                <div className="flex items-center space-x-4 ml-4">
                  <button className="p-2 text-gray-500 hover:text-blue-600">
                    <Search className="h-5 w-5" />
                  </button>
                  <Link href="/login" className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition">
                    <User className="h-4 w-4" />
                    <span>Join / Login</span>
                  </Link>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Home</Link>
            
            {isAuthenticated ? (
               <>
                <Link href="/dashboard" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Dashboard</Link>
                <Link href="/groups" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Groups</Link>
                <Link href="/profile" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Profile</Link>
                <button 
                  onClick={handleLogout}
                  className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-4"
                >
                  Logout
                </button>
               </>
            ) : (
              <>
                <Link href="/resources" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Resources</Link>
                <Link href="/qa" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Q&A</Link>
                <Link href="/groups" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Groups</Link>
                <Link href="/connect" className="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium">Meet Others</Link>
                <Link href="/login" className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition mt-4">
                  Join / Login
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
