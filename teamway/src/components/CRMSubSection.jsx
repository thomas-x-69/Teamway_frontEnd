const CRMSubSection = ({ title, description }) => {
  return (
    <section className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          {title}
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto">{description}</p>
      </div>
    </section>
  );
};

export default CRMSubSection;
