// "use client";

// import { useState, useEffect } from "react";
// import { Users, Lock, Globe } from "lucide-react";
// import FloatingLines from "@/components/FloatingLines";

// interface Group {
//   _id: string;
//   name: string;
//   description: string;
//   type: "public" | "private";
//   members: any[];
// }

// const DUMMY_GROUPS: Group[] = [
//   {
//     _id: "1",
//     name: "Teen Support Group",
//     description:
//       "A safe space for teenagers to share experiences and make friends.",
//     type: "private",
//     members: new Array(15),
//   },
//   {
//     _id: "2",
//     name: "Parents of Children with Vitiligo",
//     description:
//       "Support and advice for parents navigating their child’s diagnosis.",
//     type: "public",
//     members: new Array(42),
//   },
//   {
//     _id: "3",
//     name: "Diet & Lifestyle",
//     description:
//       "Discussing diet changes and lifestyle tips that help.",
//     type: "public",
//     members: new Array(120),
//   },
// ];

// export default function GroupsPage() {
//   const [groups, setGroups] = useState<Group[]>([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchGroups = async () => {
//       try {
//         if (!process.env.NEXT_PUBLIC_API_URL) {
//           throw new Error("API URL not defined");
//         }

//         const res = await fetch(
//           `${process.env.NEXT_PUBLIC_API_URL}/api/groups`,
//           { cache: "no-store" }
//         );

//         if (!res.ok) {
//           throw new Error("API request failed");
//         }

//         const data = await res.json();
//         setGroups(data);
//       } catch (err) {
//         console.warn("Using dummy groups due to fetch failure:", err);
//         setGroups(DUMMY_GROUPS);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchGroups();
//   }, []);

//   return (
//     <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
//       {/* Background animation */}
//       <div className="fixed inset-0 z-0 pointer-events-none">
//         <FloatingLines
//           enabledWaves={["top", "middle", "bottom"]}
//           lineDistance={[7, 5, 3]}
//           bendRadius={5.0}
//           lineCount={[6, 10, 12]}
//           bendStrength={-1}
//           interactive={true}
//           parallax={true}
//         />
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
//             Community Groups
//           </h2>
//           <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
//             Find your tribe. Join groups that resonate with your journey.
//           </p>
//         </div>

//         {!loading && (
//           <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
//             {groups.map((group) => (
//               <div
//                 key={group._id}
//                 className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
//               >
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-4">
//                     <div
//                       className={`p-2 rounded-full ${group.type === "private"
//                           ? "bg-purple-100 text-purple-600"
//                           : "bg-green-100 text-green-600"
//                         }`}
//                     >
//                       {group.type === "private" ? (
//                         <Lock className="h-5 w-5" />
//                       ) : (
//                         <Globe className="h-5 w-5" />
//                       )}
//                     </div>
//                     <span className="text-sm text-gray-500 font-medium capitalize">
//                       {group.type} Group
//                     </span>
//                   </div>

//                   <h3 className="text-xl font-bold text-gray-900 mb-2">
//                     {group.name}
//                   </h3>

//                   <p className="text-gray-600 mb-6 h-12 overflow-hidden">
//                     {group.description}
//                   </p>

//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center text-gray-500 text-sm">
//                       <Users className="h-4 w-4 mr-1" />
//                       <span>{group.members.length} Members</span>
//                     </div>
//                     <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
//                       Join Group →
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";

import { Users, Lock, Globe } from "lucide-react";
import FloatingLines from "@/components/FloatingLines";

interface Group {
  _id: string;
  name: string;
  description: string;
  type: "public" | "private";
  members: any[];
}

const DUMMY_GROUPS: Group[] = [
  {
    _id: "1",
    name: "Teen Support Group",
    description:
      "A safe space for teenagers to share experiences and make friends.",
    type: "private",
    members: new Array(15),
  },
  {
    _id: "2",
    name: "Parents of Children with Vitiligo",
    description:
      "Support and advice for parents navigating their child’s diagnosis.",
    type: "public",
    members: new Array(42),
  },
  {
    _id: "3",
    name: "Diet & Lifestyle",
    description:
      "Discussing diet changes and lifestyle tips that help.",
    type: "public",
    members: new Array(120),
  },
];

export default function GroupsPage() {
  const groups = DUMMY_GROUPS;

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

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-100 sm:text-4xl">
            Community Groups
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Find your tribe. Join groups that resonate with your journey.
          </p>
        </div>

        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {groups.map((group) => (
            <div
              key={group._id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`p-2 rounded-full ${group.type === "private"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-green-100 text-green-600"
                      }`}
                  >
                    {group.type === "private" ? (
                      <Lock className="h-5 w-5" />
                    ) : (
                      <Globe className="h-5 w-5" />
                    )}
                  </div>
                  <span className="text-sm text-gray-500 font-medium capitalize">
                    {group.type} Group
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {group.name}
                </h3>

                <p className="text-gray-600 mb-6 h-12 overflow-hidden">
                  {group.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users className="h-4 w-4 mr-1" />
                    <span>{group.members.length} Members</span>
                  </div>

                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                    Join Group →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
