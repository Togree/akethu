import { useState } from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navigation = [
    { title: "Trackers", path: "#trackers" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    // <header className="absolute inset-x-0 top-0 z-50">
    //     <nav
    //       className="flex items-center justify-between p-6 lg:px-8"
    //       aria-label="Global"
    //     >
    //       <div className="flex lg:flex-1">
    //         <a href="#" className="-m-1.5 p-1.5">
    //           <span className="sr-only">Your Company</span>
    //          <h2 className="font-bold text-wrap text-red-600 text-2xl italic">Akethu</h2>
    //         </a>
    //       </div>
    //       <div className="flex lg:hidden">
    //         <button
    //           type="button"
    //           onClick={handleMenuToggle}
    //           className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    //           aria-expanded={menuOpen ? "true" : "false"}
    //           aria-label="Open main menu"
    //         >
    //           <svg
    //             className="h-6 w-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             strokeWidth="1.5"
    //             stroke="currentColor"
    //             aria-hidden="true"
    //             data-slot="icon"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //       <div className="hidden lg:flex lg:gap-x-12">
    //         {[].map((item) => (
    //           <a
    //             key={item}
    //             href="#"
    //             className="text-sm font-semibold leading-6 text-gray-900"
    //           >
    //             {item}
    //           </a>
    //         ))}
    //       </div>
    //       {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
    //         <a
    //           href="#"
    //           className="text-sm font-semibold leading-6 text-gray-900"
    //         >
    //           Log in <span aria-hidden="true">&rarr;</span>
    //         </a>
    //       </div> */}
    //     </nav>

    //     {/* Mobile menu */}
    //     {menuOpen && (
    //       <div className="lg:hidden" role="dialog" aria-modal="true">
    //         <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-25"></div>
    //         <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    //           <div className="flex items-center justify-between">
    //             <a href="#" className="-m-1.5 p-1.5">
    //               <span className="sr-only">Your Company</span>
    //               <img
    //                 className="h-8 w-auto"
    //                 src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
    //                 alt="Mobile logo"
    //                 loading="lazy"
    //               />
    //             </a>
    //             <button
    //               type="button"
    //               onClick={handleMenuToggle}
    //               className="-m-2.5 rounded-md p-2.5 text-gray-700"
    //               aria-label="Close menu"
    //             >
    //               <svg
    //                 className="h-6 w-6"
    //                 fill="none"
    //                 viewBox="0 0 24 24"
    //                 strokeWidth="1.5"
    //                 stroke="currentColor"
    //                 aria-hidden="true"
    //               >
    //                 <path
    //                   strokeLinecap="round"
    //                   strokeLinejoin="round"
    //                   d="M6 18 18 6M6 6l12 12"
    //                 />
    //               </svg>
    //             </button>
    //           </div>
    //           <div className="mt-6 flow-root">
    //             <div className="-my-6 divide-y divide-gray-500/10">
    //               <div className="space-y-2 py-6">
    //                 {["Product", "Features", "Marketplace", "Company"].map(
    //                   (item) => (
    //                     <a
    //                       key={item}
    //                       href="#"
    //                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //                     >
    //                       {item}
    //                     </a>
    //                   )
    //                 )}
    //               </div>
    //               {/* <div className="py-6">
    //                 <a
    //                   href="#"
    //                   className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
    //                 >
    //                   Log in
    //                 </a>
    //               </div> */}
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     )}
    //   </header>
    <>
  <>
      <nav className="relative items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
        <div className="flex justify-between w-full">
          {/* Logo container */}
          <div className="flex-grow">
            <a href="/">
              <h2 className="font-bold text-wrap text-red-600 text-2xl italic">Akethu</h2>
            </a>
          </div>
          
          {/* Toggle button for mobile menu */}
          <button
            className="text-gray-500 outline-none md:hidden"
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-label="Toggle Navigation"
          >
            {isNavOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Nav links */}
        <ul className={`flex-1 justify-end mt-12 md:text-sm md:font-medium md:flex md:mt-0 ${isNavOpen ? 'absolute inset-x-0 px-4 border-b bg-white md:border-none md:static' : 'hidden'}`}>
          <div className="items-center space-y-5 md:flex md:space-x-6 md:space-y-0 md:ml-12">
            {navigation.map((item, idx) => (
              <li className="text-gray-500 hover:text-red-600" key={idx}>
                <a href={item.path}>{item.title}</a>
              </li>
            ))}
          </div>
        </ul>
      </nav>

      <Outlet />
    </>

  <Outlet />
    
    </>
  )
}

export default Navbar