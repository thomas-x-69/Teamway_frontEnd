import { useDispatch } from "react-redux";
import { openForm } from "../store/trialFormSlice";

const HeroSection = ({ title, description, image }) => {
  const dispatch = useDispatch();

  const handleTrialRequest = () => {
    dispatch(openForm());
  };
  return (
    <section className="text-white">
      <div className="m-auto w-full bg-primary container px-10 py-10 md:mx-20 my-20 md:w-fit md:rounded-[22px] ">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between ">
          <div className="w-full mb-8 lg:mb-0 text-right lg:w-1/2 lg:py-0 items-center ">
            <h1 className="text-xl lg:text-4xl font-bold mb-4 leading-10 ">
              {title}
            </h1>
            <p className=" text-s lg:text-xl mb-6 opacity-90 leading-relaxed">
              {description}
            </p>
            <button
              className="bg-white text-[#0099cc] px-8 py-3 rounded-[19px] font-bold hover:bg-opacity-90 transition duration-300 text-lg ease-in-out hover:scale-105"
              onClick={handleTrialRequest}
            >
              طلب التجربة
            </button>
          </div>
          <div className="w-[20rem] lg:w-1/2 relative">
            <img
              src={image}
              alt="Hero"
              className="w-[40rem] xl:max-w-fit lg:mb-[-11.6rem] lg:mt-[-5rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
