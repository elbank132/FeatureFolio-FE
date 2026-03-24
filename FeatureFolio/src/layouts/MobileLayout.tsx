// import { Outlet, NavLink } from 'react-router-dom';

// export const MobileLayout = () => {
//   return (
//     // The main container takes up the full screen height (mobile friendly)
//     <div className="flex flex-col h-screen bg-gray-50">
      
//       {/* Scrollable Main Content Area */}
//       <main className="flex-1 overflow-y-auto pb-16">
//         {/* This is your <router-outlet>! Pages render here. */}
//         <Outlet />
//       </main>

//       {/* Fixed Bottom Navigation */}
//       <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 flex justify-around p-3 safe-area-pb">
//         <NavLink 
//           to="/" 
//           className={({ isActive }) => `flex flex-col items-center text-sm ${isActive ? 'text-blue-600' : 'text-gray-500'}`}
//         >
//           <span>Home</span>
//         </NavLink>
        
//         <NavLink 
//           to="/profile" 
//           className={({ isActive }) => `flex flex-col items-center text-sm ${isActive ? 'text-blue-600' : 'text-gray-500'}`}
//         >
//           <span>Profile</span>
//         </NavLink>
//       </nav>
//     </div>
//   );
// };