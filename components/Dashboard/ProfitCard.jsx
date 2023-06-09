import ArrowUp from "@assets/Icons/Arrowup";
import Yen from "@assets/Icons/Yen";
import { classNames } from "@utils/classNames";

const ProfitCard = ({ profit = "50k", increased = true, change = "12%" }) => {
  return (
    <div className="max-w-none lg:max-w-[242px] w-full pt-[21px] pb-5 px-6 bg-white rounded-2xl flex flex-col items-center lg:items-start">
      <div className="flex items-center gap-[22px]">
        <Yen />
        <div>
          <p className="text-base sm:text-lg text-23272E font-semibold">
            Total Profit
          </p>
          <p className="text-8B909A font-medium tracking-0.02 text-xs sm:text-sm mt-1">
            Last 7 days
          </p>
        </div>
      </div>
      <p className="font-bold text-[26px] sm:text-[32px] text-23272E tracking-0.02 uppercase mt-[30px] sm:mt-[42px]">
        {profit}
      </p>
      <div className="flex mt-2 sm:mt-4 items-center">
        <ArrowUp
          className={classNames(
            "animate-pulse mb-0.5",
            increased ? "text-1EB564" : "text-EA5455"
          )}
        />
        <p
          className={classNames(
            "animate-pulse text-xs sm:text-sm font-medium ml-1",
            increased ? "text-1EB564" : "text-EA5455"
          )}
        >
          {change}
        </p>
        <p className="ml-2 tracking-0.02 text-xs sm:text-sm font-medium text-8B909A">
          vs last 7 days
        </p>
      </div>
    </div>
  );
};

export default ProfitCard;
