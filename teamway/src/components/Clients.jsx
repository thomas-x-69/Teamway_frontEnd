import { useState, useEffect, useRef } from "react";
import clientImg from "../assets/logo.png";

function Clients() {
  const clients = [
    clientImg,
    clientImg,
    clientImg,
    clientImg,
    clientImg,
    clientImg,
  ];

  const [displayedClients, setDisplayedClients] = useState([...clients]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayedClients((prevClients) => [
        ...prevClients,
        clients[Math.floor(Math.random() * clients.length)],
      ]);
    }, 5000); // Add a new client every 5 seconds

    return () => clearInterval(intervalId);
  });

  return (
    <section className="bg-gray-light py-10 sm:py-16 md:py-20 mt-[2rem] sm:mt-[3rem]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center text-primary">
          +1000 شركة تستخدم حلول تيم واي
        </h2>
        <div className="overflow-hidden" ref={scrollRef}>
          <div className="flex animate-scroll hover:pause-animation whitespace-nowrap">
            {displayedClients.map((client, index) => (
              <div
                key={index}
                className="mx-4 sm:mx-6 md:mx-8 flex-shrink-0 bg-white p-4 sm:p-6 rounded-lg shadow-custom text-center hover:shadow-xl my-4 sm:my-6 md:my-8"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img
                  src={client}
                  alt={`Client ${index + 1}`}
                  className={`h-12 sm:h-14 md:h-16 object-contain transition-all duration-300 ${
                    hoveredIndex === index ? "filter-none" : "filter grayscale"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Clients;
