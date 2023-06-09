import { mainmenu } from "@constants/menulist";
import { classNames } from "@utils/classNames";
import Link from "next/link";
import React, { useState } from "react";

const MainMenu = ({ currentLink, open, setOpen }) => {
  return (
    <div
      className={("flex flex-col px-3.5", open ? "items-left" : "items-center")}
    >
      <p
        className={classNames(
          "text-8B909A text-[9px] sm:text-[11px] uppercase py-[15px]",
          open ? "px-4" : "px-1 text-center"
        )}
      >
        Main Menu
      </p>
      <div
        className={classNames(
          "flex flex-col gap-2",
          open ? "items-left" : "items-center"
        )}
      >
        {mainmenu.map((menuitem, index) => (
          <Link
            key={index}
            className={classNames(
              "flex py-[9px] gap-2 text-[15px] capitalize",
              currentLink === menuitem.route.replace("/admin/", "")
                ? "text-23272E"
                : "text-8B909A",
              open ? "px-4" : "px-0"
            )}
            href={menuitem.route}
          >
            {menuitem.icon}
            <span className={classNames(open ? "flex" : "hidden")}>
              {menuitem.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainMenu;
