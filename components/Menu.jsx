"use client";

import DashboardCollapse from "@assets/Icons/DashboardCollapse";
import Logo from "@assets/Icons/Logo";
import MenuHeader from "./Menu/MenuHeader";
import MainMenu from "./Menu/MainMenu";
import ProductMenu from "./Menu/ProductMenu";
import { useEffect, useState } from "react";
import { classNames } from "@utils/classNames";
import { usePathname } from "next/navigation";

const Menu = ({ open, setOpen }) => {
  const pathname = usePathname();

  useEffect(() => {
    const isCurrent = pathname.replace("/admin/", "");
    setCurrentLink(isCurrent);
  }, [pathname]);

  const [currentLink, setCurrentLink] = useState("");

  return (
    <div
      className={classNames(
        "menu w-full flex flex-col bg-white h-full fixed left-0 duration-200",
        !open ? "max-w-menuMobile" : "max-w-menu"
      )}
    >
      <MenuHeader open={open} setOpen={setOpen} />
      <MainMenu currentLink={currentLink} open={open} setOpen={setOpen} />
      <ProductMenu currentLink={currentLink} open={open} setOpen={setOpen} />
    </div>
  );
};

export default Menu;
