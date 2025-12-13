import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function MultipleDiagnosis() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/resources" className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Resources
        </Link>
        
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
          Multiple Diagnosis
        </h1>

        <div className="prose prose-blue max-w-none text-gray-500">
          <p className="text-lg mb-8">
            Vitiligo is an autoimmune condition, and people with one autoimmune disease may be at a slightly higher risk of developing others.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Comorbidities</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Thyroid Disease:</strong> Both Hashimoto’s thyroiditis and Graves’ disease are more common in people with vitiligo.</li>
            <li><strong>Alopecia Areata:</strong> Patchy hair loss that is also autoimmune in nature.</li>
            <li><strong>Diabetes Type 1:</strong> An autoimmune form of diabetes.</li>
            <li><strong>Pernicious Anemia:</strong> A decrease in red blood cells when the body can't absorb enough vitamin B12.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Management</h2>
          <p className="mb-4">
            Regular check-ups are important. If you experience symptoms unrelated to your skin (like fatigue, weight changes, or thirst), discuss them with your doctor. Managing one condition often helps in maintaining overall health.
          </p>
        </div>
      </div>
    </div>
  );
}
