"use client";

import Menu from "@components/Menu";
import "./globals.css";
import { Public_Sans } from "next/font/google";
import { useState } from "react";
import { classNames } from "@utils/classNames";

const public_sans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
});

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(true);

  return (
    <html lang="en" className="bg-F5F5F5">
      <body
        className={`${public_sans.variable} font-public-sans flex justify-center w-full text-23272E`}
      >
        <Menu open={open} setOpen={setOpen} />
        <div
          className={classNames(
            "w-full flex justify-center duration-150",
            !open
              ? "max-w-[calc(100%_-_60px)] ml-[70px]"
              : "max-w-[calc(100%_-_260px)] ml-[270px]"
          )}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
