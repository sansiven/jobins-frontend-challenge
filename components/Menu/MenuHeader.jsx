import DashboardCollapse from "@assets/Icons/DashboardCollapse";
import Logo from "@assets/Icons/Logo";
import { classNames } from "@utils/classNames";
import Link from "next/link";

const MenuHeader = ({ open, setOpen }) => {
  return (
    <div className="py-5 pl-[18px] pr-3.5 flex w-full items-center justify-between">
      <Link
        href="/"
        className={classNames(
          "flex gap-2.5 font-bold text-[22px] text-23272E items-center",
          open ? "flex" : "hidden"
        )}
      >
        <Logo />
        JoBins
      </Link>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={classNames("duration-200", !open && "rotate-180")}
      >
        <DashboardCollapse />
      </button>
    </div>
  );
};

export default MenuHeader;
