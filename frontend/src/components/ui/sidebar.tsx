import Image from "next/image";
export default function Sidebar() {
  return (
    <aside className="hidden md:block w-80 h-screen sticky top-0">
      <div className="flex flex-col bg-white w-full h-full shadow-sm overflow-y-auto">
        <div className="w-full h-10 flex items-center  font-bold p-6">
          LOGO
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 justify-self-end ml-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
        </div>

        <div className="w-full flex items-center p-3">
          <div className="flex w-full gap-4 border-2 border-gray-200 rounded-xl p-2 items-center bg-gray-100 hover:bg-transparent">
            <Image
              src="https://img.freepik.com/vektor-gratis/ilustrasi-kera-gaya-nft-digambar-tangan_23-2149622021.jpg"
              alt="Avatar"
              width={35}
              height={15}
              className="rounded-full object-cover"
            />

            <p className="text-sm font-bold">John Doe</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 justify-self-end ml-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>

        {/* MENU ATAS */}
        <ul className="space-y-2 text-sm text-blue-900">
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
              />
            </svg>

            <span className="text-sm font-medium">Course</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <span className="text-sm font-medium">Profile</span>
          </li>
          <li className="flex items-center gap-3 p-3 rounded-lg cursor-pointer hover:bg-gray-200 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>

            <span className="text-sm font-medium">Logout</span>
          </li>
        </ul>

        {/* MENU BAWAH */}
        <ul className="p-4 mt-auto text-sm">
          <li className="hover:bg-red-100 text-red-600 p-2 rounded">Logout</li>
        </ul>
      </div>
    </aside>
  );
}
