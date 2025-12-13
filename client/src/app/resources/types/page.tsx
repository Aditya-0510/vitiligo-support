import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TypesOfVitiligo() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/resources" className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Resources
        </Link>
        
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
          Types of Vitiligo
        </h1>

        <div className="prose prose-blue max-w-none text-gray-500">
          <p className="text-lg mb-8">
            Vitiligo is generally classified into two main categories: Non-segmental and Segmental. Understanding which type you have can help in determining the best treatment approach.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Non-Segmental Vitiligo (NSV)</h2>
          <p className="mb-4">
            This is the most common type of vitiligo, accounting for up to 90% of cases. The depigmented patches often appear symmetrically on both sides of the body (generalized vitiligo).
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Generalized:</strong> Patches are widely distributed across the body.</li>
            <li><strong>Acrofacial:</strong> Patches appear mostly on the fingers, toes, and around the mouth.</li>
            <li><strong>Universal:</strong> Depigmentation covers nearly the entire body (rare).</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Segmental Vitiligo</h2>
          <p className="mb-4">
            This type is less common and usually appears at a younger age. The patches are localized to one side of the body or a single segment.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li>It tends to progress for a year or two and then stop.</li>
            <li>It is often associated with hair color changes (poliosis).</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
