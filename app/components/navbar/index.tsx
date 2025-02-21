"use client"
import Link from "next/link";
import { Logo } from "../logo";
import { useState } from "react";

const navbarStyles = {
  default:
    "block border-b border-gray-100 py-2 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-gray-500 md:dark:hover:bg-transparent md:dark:hover:text-white",
  active:
    "block rounded bg-blue-700 py-2 text-white dark:text-white md:bg-transparent md:p-0 md:text-gray-900 underline dark:md:text-white",
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav className="bg-gray-900 p-6">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link href="/" className="flex flex-1 text-white">
          <Logo />
          <span className="sr-only">Wieni</span>
        </Link>

        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded={isOpen}
          onClick={() => { setIsOpen(!isOpen) }}
        >
          <span className="sr-only">Open main menu</span>

          {isOpen ? <svg
            className=" size-6"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg> : <svg
            className="size-6"
            fill="white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>}

        </button>
        <div className={`w-full h-0 md:h-full md:block md:w-auto md:opacity-100 md:scale-y-100 transition-all duration-300 ease-in-out origin-top ${isOpen ? 'opacity-100 scale-y-100 h-fit' : 'opacity-0 scale-y-0'}`} id="mobile-menu">
          <ul className="mt-4 flex flex-col md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
            <li>
              <Link
                data-testid="navbar-link--home"
                href={"/"}
                className={navbarStyles.default}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                data-testid="navbar-link--recipes"
                href={"/recipes"}
                className={navbarStyles.default}
              >
                All recipes
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
