import { motion } from "framer-motion";
import CRMIMG from "../assets/CRM_section.png";
import { useDispatch } from "react-redux";
import { openForm } from "../store/trialFormSlice";
import { useTranslation } from "react-i18next";

function CRM() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTrialRequest = () => {
    dispatch(openForm());
  };

  return (
    <section className="pb-[10rem] sm:py-12 md:py-[2rem] px-4 sm:px-8 md:px-[8rem] mb-[-5rem] sm:mb-[-7rem] md:mb-[-10rem]">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row-reverse items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0 order-2 md:order-1">
            <div className="w-full md:w-[50rem] mr-0 md:mr-[-5rem] overflow-hidden">
              <img
                src={CRMIMG}
                alt="CRM Dashboard"
                className=" h-auto w-[40rem] desktop:w-[60rem]"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 mr-0 md:mr-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-[2rem] text-primary">
              {t("crm.title")}
            </h2>
            <p className="text-right mb-4 md:mb-[1rem] text-paragraph">
              {t("crm.description")}
            </p>
            <ul className="mb-6 md:mb-[2rem]">
              {t("crm.features", { returnObjects: true }).map(
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
              className="bg-transparent hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 border-solid border-2 border-primary rounded-[19px] w-full md:w-[244px] h-[50px] transition-all duration-300 relative z-20"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTrialRequest}
            >
              {t("crm.cta")}
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CRM;
