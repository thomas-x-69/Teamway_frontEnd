const CRMFeaturesSubSection = ({ title, description, features, image }) => {
  return (
    <section className="bg-gray-100 py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          {title}
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12">
          {description}
        </p>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-1/2">
            <img src={image} alt="CRM Features" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CRMFeaturesSubSection;
