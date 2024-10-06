import { motion } from "framer-motion";
import NumbersAndLinesIMG from "../assets/Numbers&Lines_section.png";
import { useDispatch } from "react-redux";
import { openForm } from "../store/trialFormSlice";
import { useTranslation } from "react-i18next";

function NumbersAndLines() {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleTrialRequest = () => {
    dispatch(openForm());
  };

  return (
    <section className="py-12 md:py-20 px-4 md:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              {t("numbersAndLines.title")}
            </h2>
            <p className="mb-6 text-paragraph">
              {t("numbersAndLines.description")}
            </p>
            <ul className="mb-8">
              {t("numbersAndLines.features", { returnObjects: true }).map(
                (feature, index) => (
                  <li key={index} className="flex items-center mb-4">
                    <svg
                      className="w-6 h-6 mr-2 text-primary"
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
              className="bg-primary text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTrialRequest}
            >
              {t("numbersAndLines.cta")}
            </motion.button>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src={NumbersAndLinesIMG}
              alt="Numbers and Lines"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default NumbersAndLines;
