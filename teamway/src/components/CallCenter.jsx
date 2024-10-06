import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import callCenterImg from "../assets/callCenter_section.png";
import { useDispatch } from "react-redux";
import { openForm } from "../store/trialFormSlice";

function CallCenter() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTrialRequest = () => {
    dispatch(openForm());
  };

  return (
    <section className="pb-[10rem] sm:py-12 md:py-[2rem] px-4 sm:px-8 md:px-[6rem] mb-[-5rem] sm:mb-[-7rem] md:mb-[-10rem]">
      <div className="container mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 text-primary">
              {t("callCenter.title")}
            </h2>
            <p className="text-paragraph mb-6 sm:mb-8">
              {t("callCenter.description")}
            </p>

            <motion.button
              className="bg-transparent hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 border-solid border-2 border-primary rounded-[19px] w-full sm:w-[244px] h-[50px] transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTrialRequest}
            >
              {t("callCenter.cta")}
            </motion.button>
          </div>
          <div className="w-full md:w-[40rem] md:mr-8 md:ml-[-6rem]">
            <img
              src={callCenterImg}
              alt="Call Center Dashboard"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallCenter;
