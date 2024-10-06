import CountUp from "react-countup";
import card1 from "../assets/CRMDashBoardCard1.png";
import card2 from "../assets/CRMDashBoardCard2.png";
import card3 from "../assets/CRMDashBoardCard3.png";
import card4 from "../assets/CRMDashBoardCard4.png";
import card5 from "../assets/CRMDashBoardCard5.png";
import card6 from "../assets/CRMDashBoardCard6.png";

const CRMStatCard = ({ icon, title, value, change, color }) => (
  <div
    className={`bg-white p-2 sm:p-3 rounded-2xl  relative overflow-hidden
                  transition-all duration-300 ease-in-out
                  hover:shadow-xl hover:-translate-y-0.5 hover:scale-[1.01]
                  group`}
  >
    <div className="flex items-center justify-between mb-2 sm:mb-3">
      <div
        className={`${color} rounded-full p-1 w-[2.25rem] h-[2.25rem] sm:w-[2.75rem] sm:h-[2.75rem]
                      transition-transform duration-300 ease-in-out
                      group-hover:scale-105`}
      >
        <img
          src={icon}
          alt={title}
          className="w-[1.4rem] h-[1.4rem] sm:w-[2rem] sm:h-[2rem] m-auto mt-[2px] sm:mt-[3px]
                       transition-transform duration-300 ease-in-out
                       group-hover:rotate-6"
        />
      </div>
      <p
        className="text-[0.65rem] sm:text-xs text-black opacity-70
                    transition-all duration-300 ease-in-out
                    group-hover:translate-x-[-1px]"
      >
        اخر 7 ايام
      </p>
    </div>
    <div>
      <h2
        className="text-[0.9rem] sm:text-base font-semibold text-black mb-1 sm:mb-3
                     transition-all duration-300 ease-in-out
                     group-hover:translate-x-0.5"
      >
        {title}
      </h2>
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline">
          <p
            className="text-lg sm:text-3xl font-bold text-[#6B6B6B]
                        transition-all duration-300 ease-in-out
                        group-hover:scale-105"
          >
            <CountUp end={parseFloat(value)} duration={3} separator="," />
          </p>
          <p
            className="text-xs sm:text-sm text-[#6B6B6B] ml-1 self-start mt-[2px] sm:mt-[4px]
                        transition-all duration-300 ease-in-out
                        group-hover:translate-y-[-1px]"
          >
            <CountUp end={change} duration={3} />%{change > 0 ? "+" : ""}
          </p>
        </div>
      </div>
    </div>
  </div>
);

const CRMStatCards = () => {
  const cardData = [
    {
      icon: card1,
      title: "اجمالي الفرص",
      value: "19000",
      change: 20,
    },
    {
      icon: card2,
      title: "الفرص المفتوحة",
      value: "800",
      change: 20,
    },
    {
      icon: card3,
      title: "الفرص المغلقة",
      value: "40",
      change: 20,
    },
    {
      icon: card4,
      title: "توقعات الايرادات",
      value: "24000",
      change: 20,
    },
    {
      icon: card5,
      title: "معدل التحويل",
      value: "40",
      change: 20,
    },
    {
      icon: card6,
      title: "متوسط وقت التحويل",
      value: "48",
      change: 20,
    },
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 rtl">
      {cardData.map((card, index) => (
        <CRMStatCard key={index} {...card} />
      ))}
    </div>
  );
};

export default CRMStatCards;
