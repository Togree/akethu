
import logo1 from "../assets/gps-tracking.svg";
import logo2 from "../assets/vehicle-tracking.svg";
import logo3 from "../assets/tracker.svg";

function Products() {
  const posts = [
    {
      title: "HOW DOES GPS TRACKING WORK?",
      desc: "GPS tracking relies on satellite signals to pinpoint the exact location of a device equipped with a GPS receiver. By calculating signals' travel time from multiple satellites, it determines the device's position, enabling real-time tracking and location updates.",
      img: logo1,
      href: "javascript:void(0)",
    },
    {
      title: "Vehicle GPS Trackers",
      desc: "Vehicle GPS trackers provide real-time monitoring and enhance security and fleet management efficiency.",
      img: logo2,
      href: "javascript:void(0)",
    },
    {
      title: "GPS Tracker 3G/4G/WIFI Bluetooth",
      desc: "Our GPS Tracker features 3G/4G/WIFI Bluetooth for versatile tracking. Enjoy precise monitoring and enhanced security for your assets.",
      img: logo3,
      href: "javascript:void(0)",
    },
  ];

  return (
    <section className="mt-16 mx-auto px-6 max-w-screen-xl md:px-12" id="trackers">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          GPS Tracking Solution
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Get real-time location updates and analytics with our GPS tracking solution. 
          Enhance operational efficiency and security for your assets and fleet management effortlessly.
        </p>
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((item, key) => (
          <article
            key={key}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <a href={item.href}>
              <img
                src={item.img}
                loading="lazy"
                alt={item.title}
                className="w-full h-52 object-cover transition duration-300 transform hover:scale-110"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-gray-500">{item.desc}</p>
                <div className="mt-4">
                  {/* <button className="bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-red-700">
                    Learn More
                  </button> */}
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
