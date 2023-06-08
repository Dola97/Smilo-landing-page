"use client";

import { CancelIcon } from "@/assest/svgs/cancel";
import { HamburgurIcon } from "@/assest/svgs/hamburger";
import { LogoIcon } from "@/assest/svgs/logo";
import { Routes } from "@/constants/routes";
import { Transition } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="">
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="-m-1.5 p-1.5 flex lg:flex-1 flex-row">
          <LogoIcon />
          <span className="text-2xl font-xbold text-blue ml-2">
            Smilo Dentalist
          </span>
        </Link>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <CancelIcon /> : <HamburgurIcon />}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {Routes.map((item) => (
            <nav key={item.name}>
              <Link
                href={item.to}
                className=" text-sm font-bold leading-6 text-blue"
              >
                {item.name}
              </Link>
            </nav>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            disabled
            className="disabled:opacity-25 bg-indigo p-3 text-sm font-bold text-gray-light-100 rounded-sm"
          >
            Book appointment soon!
          </button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <Transition
        show={mobileMenuOpen}
        appear
        enter="transition ease-out duration-300 transform"
        enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:scale-95"
        enterTo="translate-y-0 opacity-100 sm:scale-100"
        leave="transition ease-in duration-200 transform"
        leaveFrom="translate-y-0 opacity-100 sm:scale-100"
        leaveTo="translate-y-2 opacity-0 sm:translate-y-0 sm:scale-95"
      >
        <div className="lg:hidde" id="mobile-menu">
          <div className=" flex flex-row justify-center items-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {Routes.map((item) => (
              <nav key={item.name}>
                <Link
                  href={item.to}
                  className="text-sm font-bold leading-6 text-blue"
                >
                  {item.name}
                </Link>
              </nav>
            ))}
          </div>
        </div>
      </Transition>
    </header>
  );
};
