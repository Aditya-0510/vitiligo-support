// "use client";

// import Link from 'next/link';
// import { Search, User, Menu } from 'lucide-react';
// import { useState, useMemo } from 'react';
// import { useAuth } from '@/context/AuthContext';
// import { useRouter, usePathname } from 'next/navigation';
// import GooeyNav from './GooeyNav';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const { user, setUser, isAuthenticated } = useAuth();
//   const router = useRouter();
//   const pathname = usePathname();

//   const handleLogout = () => {
//     localStorage.removeItem('token');
//     setUser(null);
//     router.push('/');
//   };

//   const guestNavItems = [
//     { label: 'Home', href: '/' },
//     { label: 'Resources', href: '/resources' },
//     { label: 'Q&A', href: '/qa' },
//     { label: 'Groups', href: '/groups' },
//     { label: 'Meet Others', href: '/connect' },
//   ];

//   const authNavItems = [
//     { label: 'Home', href: '/' },
//     { label: 'Dashboard', href: '/dashboard' },
//     { label: 'Groups', href: '/groups' },
//     { label: 'Profile', href: '/profile' },
//   ];

//   const navItems = isAuthenticated ? authNavItems : guestNavItems;

//   const activeIndex = useMemo(() => {
//     // Exact match first
//     const exactIndex = navItems.findIndex(item => item.href === pathname);
//     if (exactIndex !== -1) return exactIndex;

//     // Partial match for sub-routes? (e.g. /groups/123 -> Groups)
//     // Only if href is not '/' to avoid matching everything to Home
//     const partialIndex = navItems.findIndex(item => item.href !== '/' && pathname.startsWith(item.href));
//     if (partialIndex !== -1) return partialIndex;

//     // Default to Home if it exists and pathname is '/'
//     if (pathname === '/') return navItems.findIndex(i => i.href === '/');

//     return -1; 
//   }, [pathname, navItems]);

//   return (
//     <nav className=" sticky top-4 z-50 flex justify-center px-4 mb-6">
//       <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-full max-w-6xl w-full ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex items-center">
//             <Link href="/" className="shrink-0 flex items-center gap-2">
//               <span className="text-2xl font-bold text-purple-600">Vitiligo Support</span>
//             </Link>
//           </div>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center space-x-4 ">
//             <GooeyNav 
//                 items={navItems} 
//                 initialActiveIndex={activeIndex}
//                 className="mr-4"
//             />

//             {isAuthenticated ? (
//               <div className="flex items-center space-x-4">
//                  <button 
//                   onClick={handleLogout}
//                   className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                  >
//                   Logout
//                  </button>
//               </div>
//             ) : (
//               <div className="flex items-center space-x-4">
//                 <button className="p-2 text-gray-500 hover:text-blue-600"
//                   aria-label="Search"
//                   title="Search">
//                   <Search className="h-5 w-5" />
//                 </button>
//                 <Link href="/login" className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
//                   <User className="h-4 w-4" />
//                   <span>Join / Login</span>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Mobile menu button */}
//           <div className="flex items-center md:hidden">
//             <button
//              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
//             title={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
//               onClick={() => setIsMenuOpen(!isMenuOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
//             >
//               <Menu className="h-6 w-6" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {isMenuOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//              {navItems.map((item) => (
//                 <Link 
//                     key={item.href}
//                     href={item.href} 
//                     className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
//                     onClick={() => setIsMenuOpen(false)}
//                 >
//                     {item.label}
//                 </Link>
//              ))}

//             <div className="border-t border-gray-200 mt-4 pt-4">
//                 {isAuthenticated ? (
//                     <button 
//                       onClick={() => {
//                           handleLogout();
//                           setIsMenuOpen(false);
//                       }}
//                       className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                     >
//                       Logout
//                     </button>
//                 ) : (
//                     <Link 
//                         href="/login" 
//                         className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
//                         onClick={() => setIsMenuOpen(false)}
//                     >
//                       Join / Login
//                     </Link>
//                 )}
//             </div>
//           </div>
//         </div>
//       )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

"use client";

import Link from 'next/link';
import { Search, User, Menu } from 'lucide-react';
import { useState, useMemo } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import GooeyNav from './GooeyNav';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, setUser, isAuthenticated } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  };

  const guestNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Resources', href: '/resources' },
    { label: 'Q&A', href: '/qa' },
    { label: 'Groups', href: '/groups' },
    { label: 'Team', href: '/team' },
    { label: 'Meet Others', href: '/connect' },
  ];

  const authNavItems = [
    { label: 'Home', href: '/' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Groups', href: '/groups' },
    { label: 'Team', href: '/team' },
    { label: 'Profile', href: '/profile' },
  ];

  const navItems = isAuthenticated ? authNavItems : guestNavItems;

  const activeIndex = useMemo(() => {
    // Exact match first
    const exactIndex = navItems.findIndex(item => item.href === pathname);
    if (exactIndex !== -1) return exactIndex;

    // Partial match for sub-routes? (e.g. /groups/123 -> Groups)
    // Only if href is not '/' to avoid matching everything to Home
    const partialIndex = navItems.findIndex(item => item.href !== '/' && pathname.startsWith(item.href));
    if (partialIndex !== -1) return partialIndex;

    // Default to Home if it exists and pathname is '/'
    if (pathname === '/') return navItems.findIndex(i => i.href === '/');

    return -1;
  }, [pathname, navItems]);

  return (
    <nav className=" sticky top-4 z-50 flex justify-center px-4 mb-6">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-full max-w-6xl w-full ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Link href="/" className="shrink-0 flex items-center gap-2">
                <span className="text-2xl font-bold text-purple-600">VitiliGlo</span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-4 ">
              <GooeyNav
                items={navItems}
                initialActiveIndex={activeIndex}
                className="mr-4"
              />

              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handleLogout}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button className="p-2 text-gray-500 hover:text-blue-600"
                    aria-label="Search"
                    title="Search">
                    <Search className="h-5 w-5" />
                  </button>
                  <Link href="/login" className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
                    <User className="h-4 w-4" />
                    <span>Join / Login</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                title={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
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
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${pathname === item.href ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="border-t border-gray-200 mt-4 pt-4">
                {isAuthenticated ? (
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Join / Login
                  </Link>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;