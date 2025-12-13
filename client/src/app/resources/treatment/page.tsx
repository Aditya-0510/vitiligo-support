import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TreatmentOptions() {
  return (
    <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <Link href="/resources" className="inline-flex items-center text-blue-600 hover:text-blue-500 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Resources
        </Link>
        
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
          Treatment Options
        </h1>

        <div className="prose prose-blue max-w-none text-gray-500">
          <p className="text-lg mb-8">
            While there is currently no cure for vitiligo, several treatments can help restore skin color or even out skin tone. Results vary from person to person.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Medical Treatments</h2>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Topical Corticosteroids:</strong> Creams or ointments that may help return color, especially in early stages.</li>
            <li><strong>Calcineurin Inhibitors:</strong> Tacrolimus or pimecrolimus ointments, often used for the face and neck.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Light Therapy (Phototherapy)</h2>
          <p className="mb-4">
             Exposure to ultraviolet (UV) light can help repigment the skin.
          </p>
          <ul className="list-disc pl-5 space-y-2 mb-6">
            <li><strong>Narrowband UVB:</strong> The most common and effective form of light therapy.</li>
            <li><strong>Excimer Laser:</strong> Targeted light therapy for smaller areas.</li>
          </ul>

           <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Surgical Options</h2>
           <p className="mb-4">
             Considered when vitiligo is stable (no new patches) for at least 6-12 months.
           </p>
           <ul className="list-disc pl-5 space-y-2 mb-6">
             <li><strong>Skin Grafting:</strong> Transferring healthy skin to patches.</li>
             <li><strong>Blister Grafting:</strong> Using blisters to transfer pigment.</li>
             <li><strong>Cellular Suspension Transplant:</strong> Transplanting pigment cells into the affected area.</li>
           </ul>
        </div>
      </div>
    </div>
  );
}
