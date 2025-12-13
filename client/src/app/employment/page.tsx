"use client";

import { Briefcase, MapPin } from 'lucide-react';

export default function Employment() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Employment Opportunities
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Explore job opportunities from inclusive employers who value diversity.
          </p>
        </div>

        <div className="space-y-4">
          {[1, 2, 3].map((job) => (
            <div key={job} className="bg-white shadow rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center text-blue-600">
                    <Briefcase className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">Customer Success Specialist</h3>
                    <p className="text-sm text-gray-500">Inclusive Tech Corp</p>
                  </div>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Full-time
                </span>
              </div>
              <div className="mt-4">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                  Remote / New York, NY
                </div>
                <p className="text-gray-600 text-sm line-clamp-2">
                  We are looking for a dedicated Customer Success Specialist to join our diverse team. We pride ourselves on an inclusive culture...
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                  View Details & Apply &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
