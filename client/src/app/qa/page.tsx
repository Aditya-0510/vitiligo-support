"use client";

import { useState, useEffect } from 'react';
import { MessageSquare, ThumbsUp, Tag } from 'lucide-react';
import FloatingLines from '@/components/FloatingLines';

interface Post {
  _id: string;
  title: string;
  content: string;
  author: {
    name: string;
  };
  tags: string[];
  upvotes: number;
  createdAt: string;
}

export default function QAPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch posts from API (mocked for now if API not ready or CORS issues)
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        } else {
            // Fallback mock data
            setPosts([
                {
                    _id: '1',
                    title: 'Best sunscreen for vitiligo?',
                    content: 'I am looking for recommendations for high SPF sunscreen that is gentle on sensitive skin.',
                    author: { name: 'Sarah J.' },
                    tags: ['skincare', 'sun protection'],
                    upvotes: 12,
                    createdAt: new Date().toISOString()
                },
                {
                    _id: '2',
                    title: 'Dealing with social anxiety',
                    content: 'How do you handle staring in public places? It gets overwhelming sometimes.',
                    author: { name: 'Mike T.' },
                    tags: ['emotional support', 'coping'],
                    upvotes: 25,
                    createdAt: new Date().toISOString()
                }
            ]);
        }
      } catch (err) {
        console.error('Failed to fetch posts', err);
         // Fallback mock data
         setPosts([
            {
                _id: '1',
                title: 'Best sunscreen for vitiligo?',
                content: 'I am looking for recommendations for high SPF sunscreen that is gentle on sensitive skin.',
                author: { name: 'Sarah J.' },
                tags: ['skincare', 'sun protection'],
                upvotes: 12,
                createdAt: new Date().toISOString()
            },
            {
                _id: '2',
                title: 'Dealing with social anxiety',
                content: 'How do you handle staring in public places? It gets overwhelming sometimes.',
                author: { name: 'Mike T.' },
                tags: ['emotional support', 'coping'],
                upvotes: 25,
                createdAt: new Date().toISOString()
            }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
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
      <div className="relative max-w-4xl mx-auto z-10 pointer-events-none">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-100">Q&A Forum</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Ask a Question
          </button>
        </div>

        <div className="space-y-6">
          {loading ? (
            <p>Loading discussions...</p>
          ) : (
            posts.map((post) => (
              <div key={post._id} className="bg-white shadow rounded-lg p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{post.content}</p>
                    <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                      <span className="font-medium text-gray-900">{post.author?.name || 'Anonymous'}</span>
                      <span>•</span>
                      <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-1 text-gray-500">
                    <button className="p-1 hover:text-blue-600">
                      <ThumbsUp className="h-5 w-5" />
                    </button>
                    <span className="font-medium">{post.upvotes}</span>
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
