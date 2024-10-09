function Footer() {
  return (
    <footer className="text-gray-500 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 px-4 py-5 max-w-screen-xl mx-auto md:px-8">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <h2 className="font-bold text-wrap text-red-600 text-2xl italic">
          Akethu
        </h2>
        <p className="leading-relaxed mt-2 text-[15px]">
        GUANGZHOU TOGREE INFORMATION TECHNOLOGY CO., LTD

        </p>
        <p className="leading-relaxed mt-2 text-[15px]">
        广州拓绿信息技术有限公司


        </p>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center sm:flex">
        <div className="flex flex-row items-center justify-center gap-2">
          <a
            href="https://www.jimilab.com/about/privacy.html"
            className="text-blue-500 underline"
          >
            Privacy
          </a>
          <a
            href="https://www.jimilab.com/about/cookiess.html"
            className="text-blue-500 underline"
          >
            Cookies
          </a>
          <a
            href="https://www.jimilab.com/about/site_map.html"
            className="text-blue-500 underline"
          >
            Sitemap
          </a>
          <a href="mailto:info@akethu.com" className="">
            info@akethu.com
          </a>
          <a
            href="https://beian.miit.gov.cn/"
            className="text-blue-500 underline"
          >
            粤ICP备2022112036号-9
          </a>
        </div>
        <div className="mt-4 sm:mt-0">
          &copy; Copyright 2024 Guangzhou Togree Information Technology Co.,
          Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
