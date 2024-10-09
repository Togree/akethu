import logo from "../assets/akethu.jpg";

function MainContent() {
  return (
    <>
  

      <section className="py-28">
        <div className="max-w-screen-xl mx-auto text-gray-600 gap-x-12 items-center justify-between overflow-hidden md:flex md:px-8">
          <div className="flex-none space-y-5 px-4 sm:max-w-lg md:px-0 lg:max-w-xl">
            <h2 className="text-4xl text-black font-extrabold md:text-5xl">
              Real-time location for the safety of your vehicle
            </h2>
            <p className="text-muted-foreground">
              This technology provides a layer of security, allowing you to
              track and recover your vehicle efficiently. By ensuring the safety
              of your asset, you can mitigate risks and protect your investment
              effectively.
            </p>
            <div className="items-center gap-x-3 space-y-3 sm:flex sm:space-y-0">
              <a
                href="https://trackgree.com/"
                className="block py-2 px-4 text-center text-white font-medium bg-red-600 duration-150 hover:bg-red-500 active:bg-red-700 rounded-lg shadow-lg hover:shadow-none"
              >
                Let's get started
              </a>
            </div>
          </div>
          <div className="flex-none mt-14 md:mt-0 md:max-w-xl">
            <img
              src={logo}
              className="w-[600px] h-[600px] rounded-md"
              alt="Akethu vehicle tracking illustration"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default MainContent;
