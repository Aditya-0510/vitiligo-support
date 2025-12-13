"use client";

import { Heart, Search } from 'lucide-react';

export default function MarriageBureau() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Marriage Bureau
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Connect with others looking for life partners in a safe, understanding environment.
          </p>
        </div>

        <div className="bg-white shadow sm:rounded-lg p-6 mb-8">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Find a Match</h3>
          <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-2">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700">Looking for</label>
              <select id="gender" name="gender" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                <option>Bride</option>
                <option>Groom</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age Range</label>
              <select id="age" name="age" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md">
                <option>20-25</option>
                <option>26-30</option>
                <option>31-35</option>
                <option>36+</option>
              </select>
            </div>
            <div className="sm:col-span-2 flex items-end">
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-pink-600 hover:bg-pink-700">
                <Search className="h-4 w-4 mr-2" />
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          {[1, 2, 3, 4].map((profile) => (
            <div key={profile} className="bg-white rounded-lg shadow p-6 flex items-start space-x-4">
              <div className="h-24 w-24 bg-gray-200 rounded-lg flex-shrink-0"></div>
              <div className="flex-1">
                <h4 className="text-lg font-bold text-gray-900">Profile ID: VSN-{profile}024</h4>
                <p className="text-sm text-gray-500">28 yrs • 5'6" • Software Engineer</p>
                <p className="text-sm text-gray-500">Mumbai, India</p>
                <button className="mt-3 text-sm text-pink-600 font-medium hover:text-pink-500 flex items-center">
                  <Heart className="h-4 w-4 mr-1" />
                  Send Interest
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
