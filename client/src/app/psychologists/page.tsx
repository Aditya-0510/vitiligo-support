"use client";

import { MapPin, Phone, Star } from 'lucide-react';

export default function Psychologists() {
  const psychologists = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      specialty: 'Clinical Psychologist',
      location: 'New York, NY',
      rating: 4.9,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      specialty: 'Therapist',
      location: 'San Francisco, CA',
      rating: 4.8,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Dr. Emily Davis',
      specialty: 'Counselor',
      location: 'London, UK',
      rating: 4.7,
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Psychologists
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Find professional mental health support specialized in skin conditions.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {psychologists.map((psych) => (
            <div key={psych.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-4">
                <div className="h-16 w-16 rounded-full bg-gray-200 flex-shrink-0"></div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{psych.name}</h3>
                  <p className="text-blue-600 text-sm">{psych.specialty}</p>
                </div>
              </div>
              <div className="space-y-2 text-gray-600 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  {psych.location}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 mr-2 text-yellow-400" />
                  {psych.rating} / 5.0
                </div>
              </div>
              <button className="mt-6 w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <Phone className="h-4 w-4 mr-2" />
                Book Session
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
