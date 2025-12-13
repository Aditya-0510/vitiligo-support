"use client";

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import QuickAccessCard from '@/components/QuickAccessCard';
import { Brain, MessageCircle, User, LogOut } from 'lucide-react';

export default function Dashboard() {
  const { user, loading, isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/login');
    }
  }, [loading, isAuthenticated, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) return null;

  const dashboardCards = [
    {
      title: 'My Profile',
      description: 'View and edit your personal information and preferences.',
      icon: User,
      href: '/profile',
      color: 'bg-blue-500',
    },
    {
      title: 'My Groups',
      description: 'Access the support groups you have joined.',
      icon: MessageCircle,
      href: '/groups',
      color: 'bg-green-500',
    },
    {
      title: 'Find Experts',
      description: 'Connect with psychologists and dermatologists.',
      icon: Brain,
      href: '/psychologists',
      color: 'bg-purple-500',
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user.name}!
          </h1>
          <p className="mt-2 text-gray-600">
            Here's what's happening in your community today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dashboardCards.map((card) => (
            <QuickAccessCard
              key={card.title}
              {...card}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
