const ProgressBar = ({ label, value, color }) => (
  <div className="flex flex-col mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-sm font-medium text-right mb-3">{label}</span>
      <span className="text-sm font-medium">{value}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="h-4 rounded-full"
        style={{ width: `${value}%`, backgroundColor: color }}
      ></div>
    </div>
  </div>
);

const CRMProgressBarChart = () => {
  return (
    <div
      className="bg-white p-6 rounded-[1.5rem] shadow-md max-w-md mx-auto h-[350px] "
      dir="rtl"
    >
      <div className="flex justify-between items-start mb-6">
        <h2 className="text-base text-[#6B6B6B]  font-bold">
          كفاءة فريق العمل
        </h2>
      </div>
      <div className="mt-[3rem] flex flex-col gap-8">
        <ProgressBar label="سرعة الاستجالة" value={79} color="#FDB813" />
        <ProgressBar label="معدل الشكاوي" value={35} color="#E74C3C" />
      </div>
    </div>
  );
};

export default CRMProgressBarChart;
