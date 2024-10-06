import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { openForm } from "../store/trialFormSlice";
import HeroImg from "../assets/Hero_Image.png";
import pieImg from "../assets/pie-chart_Icon.png";
import callImg from "../assets/call_Icon.png";
import puzzleImg from "../assets/puzzle_Icon.png";
import radioImg from "../assets/radio_Icon.png";
import screwImg from "../assets/screw_Icon.png";

function Hero() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTrialRequest = () => {
    dispatch(openForm());
  };

  const features = [
    { img: screwImg, text: t("hero.features.quickSetup") },
    { img: callImg, text: t("hero.features.improvedCommunication") },
    { img: puzzleImg, text: t("hero.features.seamlessIntegration") },
    { img: radioImg, text: t("hero.features.controlPanel") },
    { img: pieImg, text: t("hero.features.instantAnalytics") },
  ];

  return (
    <section className="bg-white py-12 lg:py-18 mt-16 lg:mt-[8rem] sm:py-0">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex lg:flex-row items-center flex-col-reverse">
          <div className="w-full lg:w-1/2 lg:pt-[4rem] lg:pr-[8rem] mb-8 lg:mb-[8rem]">
            <h2 className="text-primary text-xl lg:text-[1.3rem] font-semibold mb-2">
              {t("hero.subtitle")}
            </h2>
            <h1 className="text-primary text-3xl lg:text-[2.4rem] font-bold mb-4 leading-tight">
              {t("hero.title")}
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-primary leading-relaxed max-w-full lg:max-w-[30rem]">
              {t("hero.description")}
            </p>
            <motion.button
              className="bg-transparent hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 border-solid border-2 border-primary rounded-[19px] w-full sm:w-[168px] h-[50px] transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTrialRequest}
            >
              {t("hero.cta")}
            </motion.button>
          </div>
          <div className="w-full lg:w-1/2 relative mb-8 lg:mb-0">
            <div className="lg:absolute left-0 transform lg:-translate-y-1/2 pointer-events-none lg:top-[-4.5rem]">
              <img
                src={HeroImg}
                alt="Dashboard"
                className="w-full max-w-[80rem]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-wrap justify-center lg:justify-evenly items-center mt-12 lg:mt-0 pb-8 lg:pb-[5rem] space-y-8 lg:space-y-0">
          {features.map((item, index) => (
            <motion.div
              key={index}
              className="text-center w-1/2 sm:w-1/3 lg:w-auto px-2"
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={item.img}
                alt={item.text}
                className="w-12 h-12 mx-auto mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 1 }}
              />
              <p className="text-secondary text-base lg:text-[1.1rem] font-semibold">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
