import ArrowUp from "@assets/Icons/Arrowup";
import BusinessAndFinance from "@assets/Icons/BusinessAndFinance";
import { classNames } from "@utils/classNames";

const SalesAndCostCard = ({
  sales = "350k",
  increased = true,
  increasedAmount = "8.56K",
}) => {
  return (
    <div className="max-w-none lg:max-w-[398px] w-full flex pt-5 pb-7 justify-center items-center bg-white rounded-2xl">
      <div className="pr-5 sm:pr-10">
        <BusinessAndFinance />
      </div>
      <div className="pl-5 sm:pl-[33px] border-l border-l-DBDADE">
        <p className="text-base sm:text-lg text-23272E font-semibold">
          Total Sales & Costs
        </p>
        <p className="text-8B909A font-medium tracking-0.02 text-xs sm:text-sm mt-1">
          Last 7 days
        </p>
        <p className="font-bold text-[26px] sm:text-[32px] text-23272E tracking-0.02 uppercase mt-5 sm:mt-[30px]">
          ${sales}
        </p>
        <div className="flex mt-3 sm:mt-4 items-center">
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
            {increasedAmount}
          </p>
          <p className="ml-2 tracking-0.02 text-xs sm:text-sm font-medium text-8B909A">
            vs last 7 days
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalesAndCostCard;
