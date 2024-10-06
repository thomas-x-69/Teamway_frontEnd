const DescriptionSubSection = ({ title, description }) => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4 ">
        <h2 className="text-primary text-3xl leading-loose font-bold mb-6 text-center ">
          {title}
        </h2>
        <p className="text-paragraph text-xl text-center max-w-[80vw] mx-auto ">
          {description}
        </p>
      </div>
    </section>
  );
};

export default DescriptionSubSection;
