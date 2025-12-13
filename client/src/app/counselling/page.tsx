"use client";

import { Users, Calendar, ArrowRight } from 'lucide-react';

export default function Counselling() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Counselling Services
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Join group or individual counselling sessions for emotional support.
          </p>
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Upcoming Group Sessions
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              Register for a session to join the conversation.
            </p>
          </div>
          <ul className="divide-y divide-gray-200">
            {[1, 2, 3].map((item) => (
              <li key={item} className="px-4 py-4 sm:px-6 hover:bg-gray-50 transition">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Users className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-blue-600 truncate">
                        Coping with Diagnosis
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <p>Next Tuesday, 6:00 PM EST</p>
                      </div>
                    </div>
                  </div>
                  <div className="ml-2 flex-shrink-0">
                    <button className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 hover:bg-green-200">
                      Register
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium text-blue-900">Need Individual Support?</h3>
          <p className="mt-2 text-blue-700">
            Our counselors are available for one-on-one sessions to help you navigate your journey.
          </p>
          <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
            Request Individual Session <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
