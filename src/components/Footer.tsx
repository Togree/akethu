import logo from '../assets/Logo.svg'

function Footer() {
  return (
    <footer className="text-gray-500 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <img src={logo} className="w-32 sm:mx-auto" />
        <p className="leading-relaxed mt-2 text-[15px]">
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="mt-8 items-center justify-center sm:flex">
        <div className="mt-4 sm:mt-0">
          &copy; 2022 Float UI All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;