import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TopicsAndCoping() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/resources" className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Resources
        </Link>
        
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
          Topics & Coping
        </h1>

        <div className="prose prose-blue max-w-none text-gray-500">
          <p className="text-lg mb-8">
            Living with vitiligo involves more than just managing physical symptoms. Emotional well-being and social support are equally important.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Mental Health</h2>
          <p className="mb-4">
            It is common to feel self-conscious, anxious, or depressed. Remember that your feelings are valid. Seeking support from counselors or support groups can be transformative.
          </p>

           <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dealing with Social Situations</h2>
           <ul className="list-disc pl-5 space-y-2 mb-6">
             <li><strong>Staring:</strong> People often stare out of curiosity. A simple smile or explanation can break the tension.</li>
             <li><strong>Questions:</strong> Prepare a short, simple explanation if you choose to answer questions (e.g., "It's just a condition where my skin loses color. It's not contagious.").</li>
           </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lifestyle & Diet</h2>
           <p className="mb-4">
             While no specific diet cures vitiligo, a balanced diet rich in antioxidants helps the immune system. Sun protection is crucial as white patches burn easily.
           </p>
        </div>
      </div>
    </div>
  );
}
