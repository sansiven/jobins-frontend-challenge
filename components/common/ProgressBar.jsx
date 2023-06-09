import { classNames } from "@utils/classNames";

export const ProgressBar = ({
  value,
  fgClass = "bg-0F60FF",
  bgClass = "bg-E9E7FD",
  className,
}) => {
  return (
    <div
      className={classNames(
        "w-full my-2 rounded-full overflow-hidden",
        bgClass,
        className
      )}
    >
      <div
        className={classNames(
          "max-w-full h-full py-1 rounded-full duration-[0.3s]",
          fgClass
        )}
        style={{ width: `${value}%` }}
      />
    </div>
  );
};
