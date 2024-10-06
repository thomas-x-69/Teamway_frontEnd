import { useDispatch } from "react-redux";
import { openForm } from "../store/trialFormSlice";

function CallToAction() {
  const dispatch = useDispatch();

  const handleTrialRequest = () => {
    dispatch(openForm());
  };
  return (
    <section
      className={`py-20 relative z-10 transition-colors duration-300 ease-in-out bg-primary`}
    >
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4 ">
          ابدأ الآن مع حلولنا المتكاملة
        </h2>
        <p className="text-xl mb-8">
          اطلب تجربة مجانية واكتشف كيف يمكننا مساعدة عملك على النمو
        </p>
        <button
          className="bg-white text-primary px-6 py-3 rounded-full font-semibold transition-transform duration-300 ease-in-out hover:scale-105"
          onClick={handleTrialRequest}
        >
          طلب التجربة
        </button>
      </div>
    </section>
  );
}

export default CallToAction;
