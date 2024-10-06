import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Logo from "../assets/logo.png";
import TrialRequestForm from "./TrialRequestForm";
import { openForm } from "../store/trialFormSlice";
import { useDispatch, useSelector } from "react-redux";
import LanguageIcon from "../assets/PlanetIcon.png"; // Add this icon to your assets

function Header({ changeLanguage }) {
  const location = useLocation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const isActive = (path) => location.pathname === path;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const isFormOpen = useSelector((state) => state.trialForm.isFormOpen);

  const handleTrialRequest = () => {
    dispatch(openForm());
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  const solutionsOptions = [
    { title: t("header.callCenter"), link: "/call-center" },
    { title: t("header.numbersAndLines"), link: "/numbers-and-lines" },
    { title: t("header.customerRelations"), link: "/customer-relations" },
    { title: t("header.whatsapp"), link: "/whatsapp" },
  ];

  return (
    <>
      <header
        className="bg-white shadow-custom flex items-center flex-col w-full z-20 relative"
        style={{ boxShadow: "-1px -25px 60px 20px #0202023d" }}
      >
        <div className="container px-4 sm:px-6 md:px-8 lg:px-[10rem] py-4 sm:py-6 lg:py-8 flex justify-between items-center w-full">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-6 sm:h-8 lg:h-12" />
          </Link>

          <nav className="hidden lg:block flex-grow">
            <ul className="flex justify-center space-x-4 lg:space-x-10">
              <li>
                <Link
                  to="/"
                  className={`text-sm sm:text-base lg:text-lg hover:border-b-2 border-primary ${
                    isActive("/")
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {t("header.home")}
                </Link>
              </li>
              <li></li>
              <li className="relative">
                <button
                  className={`text-sm sm:text-base lg:text-lg hover:border-b-2 border-primary ${
                    solutionsOptions.some((option) => isActive(option.link))
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  {t("header.solutions")}
                </button>
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.ul
                      className="absolute z-10 mt-2 py-2 w-48 bg-white rounded-md shadow-xl"
                      variants={dropdownVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {solutionsOptions.map((option, index) => (
                        <li key={index}>
                          <Link
                            to={option.link}
                            className={`block px-4 py-2 text-sm ${
                              isActive(option.link)
                                ? "text-primary bg-gray-100"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                          >
                            {option.title}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </li>
              <li>
                <Link
                  to=""
                  className={`text-sm sm:text-base lg:text-lg hover:border-b-2 border-primary ${
                    isActive("/contact")
                      ? "text-primary border-b-2 border-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center">
            <button
              className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full w-[5rem] h-10 transition-all duration-300"
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "ar" : "en")
              }
            >
              {i18n.language === "en" ? <span>AR</span> : <span>ENG</span>}
              <img src={LanguageIcon} alt="Change Language" className="" />
            </button>
            <motion.button
              className="hidden lg:block bg-primary hover:border-primary hover:bg-white hover:text-primary text-white font-bold py-2 px-4 border-solid border-2 border-white rounded-[19px] w-[10rem] h-[50px] transition-all duration-300 mr-4"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTrialRequest}
            >
              {t("header.requestTrial")}
            </motion.button>
            <Link to={"/login"}>
              <motion.button
                className="hidden lg:block bg-transparent hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 border-solid border-2 border-primary rounded-[19px] w-[155px] h-[47px] transition-all duration-300 mr-4"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t("header.login")}
              </motion.button>
            </Link>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <nav className="mt-4 lg:hidden w-full px-4 sm:px-6 md:px-8 pb-4">
            <ul className="flex flex-col space-y-2">
              <li>
                <Link
                  to="/"
                  className={`block font-semibold text-base hover:bg-gray-100 px-2 py-1 rounded ${
                    isActive("/")
                      ? "text-primary bg-gray-100"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {t("header.home")}
                </Link>
              </li>
              <li>
                <button
                  className={`w-full text-right text-base hover:bg-gray-100 px-2 py-1 rounded ${
                    solutionsOptions.some((option) => isActive(option.link))
                      ? "text-primary bg-gray-100"
                      : "text-gray-600 hover:text-primary"
                  }`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  {t("header.solutions")}
                </button>
                {isDropdownOpen && (
                  <ul className="mr-4 mt-2 ml-4 space-y-2">
                    {solutionsOptions.map((option, index) => (
                      <li key={index}>
                        <Link
                          to={option.link}
                          className={`block text-sm hover:bg-gray-100 px-2 py-1 rounded ${
                            isActive(option.link)
                              ? "text-primary bg-gray-100"
                              : "text-gray-600 hover:text-primary"
                          }`}
                        >
                          {option.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block text-base hover:bg-gray-100 px-2 py-1 rounded ${
                    isActive("/contact")
                      ? "text-primary bg-gray-100"
                      : "text-gray-600 hover:text-primary"
                  }`}
                >
                  {t("header.contact")}
                </Link>
              </li>
            </ul>
            <motion.button
              className="mt-4 w-full bg-transparent hover:bg-primary hover:text-white text-primary font-bold py-2 px-4 border-solid border-2 border-primary rounded-[19px] transition-all duration-300"
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgb(255,255,255)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={handleTrialRequest}
            >
              {t("header.requestTrial")}
            </motion.button>
            <Link to={"/login"}>
              <motion.button
                className="mt-4 w-full bg-primary hover:bg-white hover:text-primary text-white font-bold py-2 px-4 border-solid border-2 border-primary rounded-[19px] transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0px 0px 8px rgb(255,255,255)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                {t("header.login")}
              </motion.button>
            </Link>
            <button
              className="mt-4 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-[19px] transition-all duration-300"
              onClick={() =>
                changeLanguage(i18n.language === "en" ? "ar" : "en")
              }
            >
              {i18n.language === "en" ? "العربية" : "English"}
            </button>
          </nav>
        )}
      </header>
      <TrialRequestForm
        isOpen={isFormOpen}
        onClose={() => dispatch(closeForm())}
      />
    </>
  );
}

export default Header;
