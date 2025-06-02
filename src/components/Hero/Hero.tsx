"use client"

import { motion } from "framer-motion"

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-6 py-28 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
        <motion.div
          className="mx-auto mt-16 lg:mt-0"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <img
              src="/image/WhiteLogo.png"
              alt="Flowers"
              width={600}
              height={600}
              // className="w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
            />
          </div>
        </motion.div>
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
          <motion.h1
            className="mt-10 text-2xl font-bold tracking-tight text-foreground sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-gradient">"เจตจรรโลง"</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg leading-8 text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            เว็บไซต์ช่วยให้คุณวางแผนการจัดการเมื่อคุณลาลับ ทั้งในเรื่องการแสดงเจตนาในวาระสุดท้าย ลักษณะงานศพ รวมไปถึงแบบฟอร์มพินัยกรรม  เปิดให้บุคคลที่คุณอนุญาตเข้าถึงเอกสารเหล่านี้ มั่นใจได้ว่าแผนการของคุณจะไม่ถูกละเลยเมื่อจากไป
          </motion.p>
          <motion.div
            className="mt-10 flex items-center gap-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="/form"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 rounded-4xl border-2 px-4 py-2 inline-block"
              style={{ borderColor: '#FFFFFF', backgroundColor: '#FFFFFF' }}
            >
              เริ่มต้น <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

// 'use client';

// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/navigation';

// export default function Hero() {
//   const [showLogin, setShowLogin] = useState(false);
//   const router = useRouter();

//   const handleStartClick = () => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       router.push('/form');
//     } else {
//       setShowLogin(true);
//     }
//   };
//   useEffect(() => {
//     setShowLogin(true);
//   }, []);


//  const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     const email = (e.currentTarget as any).email.value;
//     const password = (e.currentTarget as any).password.value;

//     const users = JSON.parse(localStorage.getItem('users') || '[]');
//     const matchedUser = users.find(
//         (u: any) => u.email === email && u.password === password
//     );

//     if (matchedUser) {
//         localStorage.setItem('user', JSON.stringify(matchedUser));
//         setShowLogin(false);
//         router.push('/form');
//     } else {
//         alert('Invalid email or password');
//     }
// };


//   return (
//     <div className="relative isolate overflow-hidden bg-background">
//       <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-x-10 lg:px-8">
//         <motion.div
//           className="mx-auto mt-16 lg:mt-0"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <div className="relative">
//             <img
//               src="/image/WhiteLogo.png"
//               alt="Logo"
//               width={400}
//               height={400}
//               className="w-[500px] rounded-2xl shadow-xl ring-1 ring-gray-900/10"
//             />
//           </div>
//         </motion.div>
//         <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg lg:flex-shrink-0">
//           <motion.h1
//             className="mt-10 text-2xl font-bold tracking-tight text-foreground sm:text-5xl"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <span className="text-gradient">End-of-life planning</span>
//           </motion.h1>
//           <motion.p
//             className="mt-6 text-lg leading-8 text-muted-foreground"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             How to make it easier on you, your family, and your loved ones.
//           </motion.p>
//           <motion.div
//             className="mt-10 flex items-center gap-x-6"
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.4 }}
//           >
//             <button
//               onClick={handleStartClick}
//               className="text-sm font-semibold leading-6 text-foreground hover:underline"
//             >
//               Start your plan <span aria-hidden="true">→</span>
//             </button>
//           </motion.div>

//           {/* Login Modal */}
//           {showLogin && (
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//               <div className="bg-white rounded-lg p-6 w-full max-w-sm">
//                 <h2 className="text-xl font-semibold mb-4">Login</h2>
//                 <form onSubmit={handleLogin}>
//                     <input
//                         name="email"
//                         type="email"
//                         placeholder="Email"
//                         required
//                         className="w-full mb-3 p-2 border rounded"
//                     />
//                     <input
//                         name="password"
//                         type="password"
//                         placeholder="Password"
//                         required
//                         className="w-full mb-4 p-2 border rounded"
//                     />
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white py-2 rounded"
//                     >
//                         Login
//                     </button>
//                     </form>

//                 <p className="mt-4 text-sm text-center">
//                   Don’t have an account?{' '}
//                   <a
//                     href="/register"
//                     className="text-blue-600 hover:underline"
//                   >
//                     Register here
//                   </a>
//                 </p>
//                 <button
//                   onClick={() => setShowLogin(false)}
//                   className="mt-4 text-sm text-gray-500 underline"
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

