"use client";

import { useState, useEffect } from 'react';
import { UserPlus, MapPin } from 'lucide-react';
import FloatingLines from '@/components/FloatingLines';

interface UserProfile {
  _id: string;
  name: string;
  location: string;
  interests: string[];
  story: string;
}

export default function MeetOthers() {
  const [users, setUsers] = useState<UserProfile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch users (mocked)
    const fetchUsers = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users`);
        if (res.ok) {
          const data = await res.json();
          setUsers(data);
        } else {
             setUsers([
                {
                    _id: '1',
                    name: 'Emma W.',
                    location: 'New York, USA',
                    interests: ['Photography', 'Hiking'],
                    story: 'Diagnosed at 12, learning to love my spots.'
                },
                {
                    _id: '2',
                    name: 'Raj P.',
                    location: 'Mumbai, India',
                    interests: ['Cricket', 'Cooking'],
                    story: 'Looking for friends who understand.'
                },
                {
                    _id: '3',
                    name: 'Sofia L.',
                    location: 'Madrid, Spain',
                    interests: ['Art', 'Travel'],
                    story: 'Artist finding inspiration in vitiligo patterns.'
                }
            ]);
        }
      } catch (err) {
        console.error('Failed to fetch users', err);
        setUsers([
            {
                _id: '1',
                name: 'Emma W.',
                location: 'New York, USA',
                interests: ['Photography', 'Hiking'],
                story: 'Diagnosed at 12, learning to love my spots.'
            },
            {
                _id: '2',
                name: 'Raj P.',
                location: 'Mumbai, India',
                interests: ['Cricket', 'Cooking'],
                story: 'Looking for friends who understand.'
            },
            {
                _id: '3',
                name: 'Sofia L.',
                location: 'Madrid, Spain',
                interests: ['Art', 'Travel'],
                story: 'Artist finding inspiration in vitiligo patterns.'
            }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="fixed inset-0 z-0 pointer-events-auto ">
                      <FloatingLines
                         enabledWaves={['top', 'middle', 'bottom']}
                        //  linesGradient={['#A855F7', '#6366F1', '#EC4899']} 
                        //  animationSpeed={0.3}
                         lineDistance={[7,5,3]}
                         bendRadius={5.0}
                         lineCount={[6, 10, 12]} 
                         bendStrength={-1}
                        interactive={true}
                        parallax={true}
                      />
                  </div>
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
            Meet Others
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Connect with people who share your experiences. You are not alone.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {users.map((user) => (
            <div key={user._id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center mb-4">
                <div className="h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                  {user.name.charAt(0)}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center mb-1">{user.name}</h3>
              <div className="flex items-center justify-center text-gray-500 text-sm mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                {user.location}
              </div>
              <p className="text-gray-600 text-center text-sm mb-4 italic">"{user.story}"</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {user.interests.map((interest) => (
                  <span key={interest} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                    {interest}
                  </span>
                ))}
              </div>
              <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                <UserPlus className="h-4 w-4 mr-2" />
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
