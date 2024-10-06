import { motion } from "framer-motion";
import whatsappIMG from "../assets/whatsapp_section.png";
import { useDispatch } from "react-redux";
import { openForm } from "../store/trialFormSlice";
import { useTranslation } from "react-i18next";

function WhatsApp() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTrialRequest = () => {
    dispatch(openForm());
  };

  return (
    <section className="py-8 md:py-[4rem] px-4 md:px-[8rem] z-10 relative bg-[#ECEFFA]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-[50rem] mr-0 md:mr-[-5rem] mb-8 md:mb-0">
            <img src={whatsappIMG} alt="WhatsApp" className="w-full h-auto" />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-[3rem] text-primary">
              {t("whatsapp.title")}
            </h2>
            <p className="text-right mb-6 md:mb-[2rem] text-paragraph">
              {t("whatsapp.description")}
            </p>
            <ul className="mb-6 md:mb-[2rem]">
              {t("whatsapp.features", { returnObjects: true }).map(
                (feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <svg
                      className="w-8 h-5 mr-[-.5rem] text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                )
              )}
            </ul>
            <motion.button
              className="bg-transparent hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 border-solid border-2 border-primary rounded-[19px] w-full md:w-[244px] h-[50px] transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTrialRequest}
            >
              {t("whatsapp.cta")}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhatsApp;
