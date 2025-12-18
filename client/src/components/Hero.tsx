'use client';

import Link from 'next/link';
import Image from 'next/image';
import * as motion from 'framer-motion/client';

import poster from '@/app/data/poster.jpeg';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[85vh]">

          {/* Left Content */}
          <div className="relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl"
            >
              <span className="block xl:inline">Embrace your skin,</span>{' '}
              <span className="block text-purple-600 xl:inline">
                join our community.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-base text-gray-100 sm:text-lg sm:max-w-xl md:text-xl"
            >
              A supportive space for people with vitiligo and their families.
              Connect with others, find resources, and share your journey.
            </motion.p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors md:py-4 md:text-lg"
                >
                  Join Now
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-purple-700 bg-purple-100 hover:bg-purple-200 transition-colors md:py-4 md:text-lg"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Right Poster */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={poster}
                alt="Vitiligo awareness poster"
                className="object-cover"
                priority
              />

              {/* Soft overlay to keep it from screaming */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/30 via-transparent to-transparent" />
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
