"use client";

import { useState, useEffect } from "react";
import { ThumbsUp, Tag } from "lucide-react";
import FloatingLines from "@/components/FloatingLines";

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

const DUMMY_POSTS: Post[] = [
  {
    _id: "1",
    title: "Best sunscreen for vitiligo?",
    content:
      "I am looking for recommendations for high SPF sunscreen that is gentle on sensitive skin.",
    author: { name: "Sarah J." },
    tags: ["skincare", "sun protection"],
    upvotes: 12,
    createdAt: new Date().toISOString(),
  },
  {
    _id: "2",
    title: "Dealing with social anxiety",
    content:
      "How do you handle staring in public places? It gets overwhelming sometimes.",
    author: { name: "Mike T." },
    tags: ["emotional support", "coping"],
    upvotes: 25,
    createdAt: new Date().toISOString(),
  },
];

export default function QAPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!process.env.NEXT_PUBLIC_API_URL) {
          throw new Error("API URL not defined");
        }

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
          { cache: "no-store" }
        );

        if (!res.ok) {
          throw new Error("API request failed");
        }

        const data = await res.json();
        setPosts(data);
      } catch (err) {
        console.warn("Using dummy posts due to fetch failure:", err);
        setPosts(DUMMY_POSTS);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Background animation */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FloatingLines
          enabledWaves={["top", "middle", "bottom"]}
          lineDistance={[7, 5, 3]}
          bendRadius={5.0}
          lineCount={[6, 10, 12]}
          bendStrength={-1}
          interactive={true}
          parallax={true}
        />
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-100">
            Q&A Forum
          </h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            Ask a Question
          </button>
        </div>

        <div className="space-y-6">
          {loading ? (
            <p className="text-gray-400">Loading discussions...</p>
          ) : (
            posts.map((post) => (
              <div
                key={post._id}
                className="bg-white shadow rounded-lg p-6"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {post.content}
                    </p>
                    <div className="mt-4 flex items-center space-x-4 text-sm text-gray-500">
                      <span className="font-medium text-gray-900">
                        {post.author?.name || "Anonymous"}
                      </span>
                      <span>•</span>
                      <span>
                        {new Date(post.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-center space-y-1 text-gray-500">
                    <button
                      className="p-1 hover:text-blue-600"
                      aria-label="vote"
                    >
                      <ThumbsUp className="h-5 w-5" />
                    </button>
                    <span className="font-medium">
                      {post.upvotes}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
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
