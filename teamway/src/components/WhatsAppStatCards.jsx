import CountUp from "react-countup";
import RecievedMessages from "../assets/recieved_Messages.png";
import SentMessages from "../assets/sent_Messages.png";
import ReadMessages from "../assets/read_Messages.png";
import UnreadMessages from "../assets/unread_Messages.png";

const colors = {
  red: "bg-[#FF3939]",
  green: "bg-[#11C177]",
  teal: "bg-[#5CC8BE]",
  purple: "bg-[#AF52DE]",
  gray: "bg-[#979797]",
};

const WhatsAppStatCard = ({ image, title, value, change, color }) => {
  return (
    <div
      className={`${colors[color]} p-4 rounded-[1rem] shadow-lg relative overflow-hidden
                    transition-all duration-300 ease-in-out
                    hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02]
                    group`}
    >
      <div className="flex items-center justify-between mb-4">
        <div
          className={`bg-white rounded-full p-2 w-[3rem] h-[3rem]
                        transition-transform duration-300 ease-in-out
                        group-hover:scale-110`}
        >
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain
                       transition-transform duration-300 ease-in-out
                       group-hover:rotate-12"
          />
        </div>
        <p
          className="text-xs text-white opacity-70
                      transition-all duration-300 ease-in-out
                      group-hover:translate-x-[-2px]"
        >
          اخر 7 ايام
        </p>
      </div>
      <div>
        <h2
          className="text-lg font-semibold text-white mb-4
                       transition-all duration-300 ease-in-out
                       group-hover:translate-x-1"
        >
          {title}
        </h2>
        <div className="flex items-baseline justify-start">
          <p
            className="text-4xl font-bold text-white
                        transition-all duration-300 ease-in-out
                        group-hover:scale-110"
          >
            <CountUp end={parseInt(value)} duration={3} />
          </p>
          <p
            className="text-sm text-white opacity-70
                        transition-all duration-300 ease-in-out
                        group-hover:translate-y-[-2px] self-start pr-2"
          >
            <CountUp end={change} duration={3} />%{change > 0 ? "+" : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

const WhatsAppStatCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4 rtl">
      <WhatsAppStatCard
        image={RecievedMessages}
        title="الرسائل المستلمة"
        value="800"
        change={20}
        color="purple"
      />
      <WhatsAppStatCard
        image={SentMessages}
        title="الرسائل المرسلة"
        value="770"
        change={20}
        color="teal"
      />
      <WhatsAppStatCard
        image={ReadMessages}
        title="الرسائل المقروءة"
        value="30"
        change={50}
        color="green"
      />
      <WhatsAppStatCard
        image={UnreadMessages}
        title="الرسائل غير مقروءة"
        value="300"
        change={20}
        color="red"
      />
    </div>
  );
};

export default WhatsAppStatCards;
