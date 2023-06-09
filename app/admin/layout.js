"use client";

import Bell from "@assets/Icons/Bell";
import { usePathname } from "next/navigation";

export default function AdminLayout({ children }) {
  const pathname = usePathname();

  return (
    <section className="max-w-full w-full pr-1">
      <div className="w-full flex justify-between my-2 py-3">
        <h2 className="text-2xl text-23272E font-bold capitalize">
          {pathname.replace("/admin/", "").replace("-", " ")}
        </h2>

        <div className="flex gap-6 items-center">
          <div className="relative">
            <Bell />
            <div className="bg-EA5455 rounded-full w-[18px] h-[18px] absolute text-white flex pl-[4.5px] text-[13px] -top-1 -right-1">
              4
            </div>
          </div>
          <div className="w-[38px] h-[38px] bg-7367F0 rounded-full relative">
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-white rounded-full flex justify-center items-center">
              <div className="w-2 h-2 bg-28C76F rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-1 sm:px-0">{children}</div>
    </section>
  );
}
