import logo from "../assets/Logo.svg";
const Navbar = ({handleMenuToggle, menuOpen}: any) => {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="Company logo" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={handleMenuToggle}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              aria-expanded={menuOpen ? "true" : "false"}
              aria-label="Open main menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {[].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item}
              </a>
            ))}
          </div>
          {/* <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div> */}
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-50 bg-gray-900 bg-opacity-25"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Mobile logo"
                    loading="lazy"
                  />
                </a>
                <button
                  type="button"
                  onClick={handleMenuToggle}
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  aria-label="Close menu"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {["Product", "Features", "Marketplace", "Company"].map(
                      (item) => (
                        <a
                          key={item}
                          href="#"
                          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                          {item}
                        </a>
                      )
                    )}
                  </div>
                  {/* <div className="py-6">
                    <a
                      href="#"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      Log in
                    </a>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
  )
}

export default Navbar