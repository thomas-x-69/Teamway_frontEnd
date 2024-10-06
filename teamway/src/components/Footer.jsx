import { useEffect, useRef, useState } from "react";
import darkLogo from "../assets/dark_Logo.png";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();
  const footerRef = useRef(null);
  const [revealPercentage, setRevealPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const footerRect = footerRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const footerHeight = footerRect.height;

        if (footerRect.top <= viewportHeight) {
          const visiblePart = viewportHeight - footerRect.top;
          const newPercentage = Math.min(
            100,
            (visiblePart / footerHeight) * 100
          );
          setRevealPercentage(newPercentage);
        } else {
          setRevealPercentage(0);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const revealStyle = {
    transform: `translateY(${revealPercentage - 100}%)`,
    transition: "transform 0.05s",
  };

  return (
    <footer
      ref={footerRef}
      className="bg-[#050116] text-white py-10 overflow-hidden px-12"
      style={revealStyle}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start">
          {/* <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <p className="text-m mb-[1rem] mr-16">{t('footer.subscribe.title')}</p>
            <div className="flex mr-16">
              <input
                type="email"
                placeholder={t('footer.subscribe.placeholder')}
                className="bg-white text-gray-800 px-4 py-2 rounded-r-[9px] text-sm w-1/2 "
              />
              <button className="bg-primary text-white px-4 py-2 rounded-l-[9px] text-sm w-1/4">
                {t('footer.subscribe.button')}
              </button>
            </div>
          </div> */}
          <div className="w-1/2 sm:w-1/3 md:w-1/5 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-[1.2rem]">
              {t("footer.solutions.title")}
            </h3>
            <ul className="text-sm">
              <li className="mb-2 cursor-pointer hover:text-primary">
                {t("footer.solutions.callCenter")}
              </li>
              <li className="mb-2 cursor-pointer hover:text-primary">
                {t("footer.solutions.numbersAndLines")}
              </li>
              <li className="mb-2 cursor-pointer hover:text-primary">
                {t("footer.solutions.whatsappService")}
              </li>
            </ul>
          </div>

          <div className="w-1/2 sm:w-1/3 md:w-1/6 mb-8 md:mb-0">
            <h3 className="font-bold mb-4 text-[1.2rem]">
              {t("footer.teamWay.title")}
            </h3>
            <ul className="text-sm">
              <li className="mb-2 cursor-pointer hover:text-primary">
                {t("footer.teamWay.aboutUs")}
              </li>
              <li className="mb-2 cursor-pointer hover:text-primary">
                {t("footer.teamWay.ourClients")}
              </li>
              <li className="mb-2 cursor-pointer hover:text-primary">
                {t("footer.teamWay.requestTrial")}
              </li>
              {/* <li className="mb-2 cursor-pointer hover:text-primary">
                {t('footer.teamWay.blog')}
              </li> */}
            </ul>
          </div>
          <div className="w-full sm:w-1/3 md:w-auto flex justify-center md:justify-start">
            <img
              src={darkLogo}
              alt="Team Way"
              className="w-[8rem] m-auto md:m-0"
            />
          </div>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="text-sm text-gray-400 text-center">
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
