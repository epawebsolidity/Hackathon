"use client";
import Image from "next/image";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function Navbar() {
  return (
    <nav className="w-full h-16 shadow-lg bg-white md:bg-transparent md:shadow-none">
      <div className="h-full flex items-center justify-between px-4 md:px-6">
        {/* LEFT */}
        <div className="flex items-center gap-3">
          {/* HAMBURGER - MOBILE */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              />
            </svg>
            <span className="text-sm font-semibold">LOGO</span>{" "}
            {/* Nama Logo */}
          </button>

          {/* SEARCH - DESKTOP */}
          <div className="relative hidden md:block w-72">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2.5 text-sm rounded-lg
                border border-gray-300 bg-white
                focus:outline-none focus:ring-2 focus:ring-blue-500
                transition"
            />
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3 md:gap-4">
          {/* NOTIFICATION */}
          <ConnectButton.Custom>
            {({ account, mounted, openAccountModal }) => {
              if (!mounted || !account) return null;

              return (
                <button
                  onClick={openAccountModal}
                  className="p-2 rounded-lg bg-red-500 hover:bg-red-600 transition"
                  title="Account"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-5 text-white" 
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 12a2.25 2.25 0 0 0-2.25-2.25H15a3 3 0 1 1-6 0H5.25A2.25 2.25 0 0 0 3 12m18 0v6a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 9m18 0V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v3"
                    />
                  </svg>
                </button>
              );
            }}
          </ConnectButton.Custom>

          {/* THEME / ACTION */}
          <button className="p-2 rounded-full bg-yellow-200 hover:bg-yellow-300 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          </button>

          {/* AVATAR */}
          <div className="w-8 h-8">
            <Image
              src="https://img.freepik.com/vektor-gratis/ilustrasi-kera-gaya-nft-digambar-tangan_23-2149622021.jpg"
              alt="Avatar"
              width={32}
              height={32}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
