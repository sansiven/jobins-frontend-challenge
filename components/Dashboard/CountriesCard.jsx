import Australia from "@assets/Icons/Australia";
import Brazil from "@assets/Icons/Brazil";
import Chevron from "@assets/Icons/Chevron";
import US from "@assets/Icons/US";
import { ProgressBar } from "@components/common/ProgressBar";
import { classNames } from "@utils/classNames";

const CountriesCard = () => {
  const getCorrespondingIcon = (increased, percentage) => {
    return (
      <div
        className={classNames(
          "text-[15px] font-semibold animate-pulse flex gap-1",
          increased ? "text-28C76F" : "text-EA5455"
        )}
      >
        <div className={classNames(!increased && "rotate-180")}>
          <Chevron />
        </div>
        {percentage}%
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-6 max-w-none lg:max-w-[428px] w-full flex flex-col gap-3 sm:gap-[18px]">
      {countriesData.map((data, index) => (
        <div className="flex gap-2 sm:gap-4 items-center">
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0">
            {data.icon}
            <div className="min-w-[55px] sm:min-w-[84px]">
              <p className="font-semibold text-[15px] text-4B465C">
                {data.amount}
              </p>
              <p className="text-8B909A text-[9px] sm:text-[13px]">
                {data.name}
              </p>
            </div>
          </div>
          <ProgressBar className="h-1.5 w-[168px]" value={data.percentage} />
          <div className="flex items-center gap-1 min-w-[68px]">
            {getCorrespondingIcon(data.increased, data.percentage)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountriesCard;

const countriesData = [
  {
    icon: <US />,
    amount: "30k",
    name: "United States",
    increased: true,
    percentage: "25.8",
  },
  {
    icon: <Brazil />,
    amount: "26k",
    name: "Brazil",
    increased: false,
    percentage: "16.2",
  },
  {
    icon: <Australia />,
    amount: "17k",
    name: "Australia",
    increased: false,
    percentage: "11.9",
  },
];
