import { classNames } from "@utils/classNames";

export const headers = [
  {
    tag: "all",
    displayAs: "All Orders",
  },
  {
    tag: "completed",
    displayAs: "Completed",
  },
  {
    tag: "canceled",
    displayAs: "Canceled",
  },
];

export const TabHeaders = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex">
      {headers.map((header, index) => (
        <div
          key={index}
          className={classNames(
            "text-[15px] min-w-[115px] py-4 flex justify-center cursor-pointer",
            selectedTab === header.tag
              ? "text-0F60FF border-b-2 border-b-0F60FF"
              : "text-8B909A"
          )}
          onClick={
            selectedTab !== header.tag
              ? () => setSelectedTab(header.tag)
              : () => {}
          }
        >
          {header.displayAs}
        </div>
      ))}
    </div>
  );
};
