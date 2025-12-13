"use client";

import { Play } from 'lucide-react';

export default function Stories() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Inspiring Life Stories
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Real stories from real people. Celebrate resilience, beauty, and strength.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((story) => (
            <div key={story} className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white">
              <div className="flex-shrink-0 relative h-48 bg-gray-300">
                {/* Placeholder for video thumbnail */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="h-12 w-12 text-white opacity-80" />
                </div>
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-600">
                    Journey
                  </p>
                  <a href="#" className="block mt-2">
                    <p className="text-xl font-semibold text-gray-900">
                      Finding Confidence in My Skin
                    </p>
                    <p className="mt-3 text-base text-gray-500">
                      "It took me years to accept my vitiligo, but now I wear it with pride. Here is my story..."
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <span className="sr-only">Author</span>
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      Maria G.
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime="2020-03-16">Mar 16, 2024</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>5 min watch</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
