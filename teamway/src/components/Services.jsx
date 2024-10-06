import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useTranslation } from "react-i18next";
import msgImg from "../assets/message_Icon.png";
import headsetImg from "../assets/headset_Icon.png";
import phoneCallImg from "../assets/phoneCall_Icon.png";
import phonePassImg from "../assets/phonePass_Icon.png";

function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { t } = useTranslation();

  const services = [
    { icon: phonePassImg, title: t("services.numbersAndLines") },
    { icon: msgImg, title: t("services.whatsapp") },
    { icon: headsetImg, title: t("services.callCenter") },
    { icon: phoneCallImg, title: t("services.crm") },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="py-8 sm:py-12 md:py-16 px-4 sm:px-8 md:px-16 lg:px-[10rem] bg-gradient-to-b mb-[-2rem] sm:mb-[-3rem] md:mb-[-4rem]"
    >
      <div className="container mx-auto mb-20">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-right text-primary">
              {t("services.title")}
            </h2>
            <p className="text-right mb-6 text-paragraph">
              {t("services.subtitle")}
            </p>
          </motion.div>
          <div className="w-full md:w-2/3 flex flex-wrap justify-end">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="w-full sm:w-1/2 p-2 sm:p-[.4rem]"
              >
                <motion.div
                  className="bg-white p-4 sm:p-6 md:p-8 text-center flex flex-col items-start rounded-[19px] shadow-lg hover:shadow-xl transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    rotate: [0, 2, -2, 0],
                    transition: { duration: 0.3 },
                  }}
                >
                  <motion.div
                    className="bg-[#DEE1EB] rounded-full p-3 sm:p-4 md:p-5 mb-4 relative overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.img
                      src={service.icon}
                      alt={service.title}
                      className="w-8 h-8 sm:w-10 sm:h-10 relative z-10"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    />
                  </motion.div>
                  <h3 className="font-bold text-base sm:text-lg text-primary">
                    {service.title}
                  </h3>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
