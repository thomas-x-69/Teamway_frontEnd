const MultiplePointsSubSection = ({
  title,
  description,
  description1,
  description2,
  features,
  image,
  buttonText,
  imageOnLeft = false,
}) => {
  const contentOrder = imageOnLeft ? "md:flex-row" : "md:flex-row-reverse";

  return (
    <section className="relative z-20 bg-[#ECEFFA] pb-[10rem] sm:py-12 md:py-[2rem] px-4 sm:px-8 md:px-[8rem]">
      <div className="container mx-auto">
        <div className={`flex flex-col-reverse ${contentOrder} items-center`}>
          <div
            className={`leading-10 ${
              imageOnLeft ? "md:pl-12" : "md:pr-12"
            } mb-8 md:mb-0`}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-primary ">
              {title}
            </h2>
            <p className="text-paragraph mb-6">{description}</p>
            <p className="text-paragraph mb-6">{description1}</p>
            <p className="text-paragraph mb-6">{description2}</p>
            <ul className="mb-6 md:mb-[2rem]">
              {features &&
                features.map((feature, index) => (
                  <li key={index} className="flex items-center mb-2">
                    <svg
                      className="w-6 sm:w-8 h-4 sm:h-5 mr-[-0.25rem] sm:mr-[-.5rem] text-primary"
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
                ))}
            </ul>
          </div>
          <div
            className={`w-full md:w-[50rem] ${
              imageOnLeft ? "md:mr-5 " : "md:ml-5"
            }`}
          >
            <img
              src={image}
              alt={title}
              className="w-[21rem] md:w-[22rem] lg:w-[35rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiplePointsSubSection;
