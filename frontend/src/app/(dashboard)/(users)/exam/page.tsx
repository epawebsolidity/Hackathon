"use client";
import { useState } from "react";
export default function Exam() {
  const [activeTab, setActiveTab] = useState("module");
  return (
    <>
      <div className="flex gap-2 py-8 mt-4">
        <button
          onClick={() => setActiveTab("module")}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition
      ${
        activeTab === "module"
          ? "bg-gray-300 text-gray-800"
          : "text-gray-600 hover:text-blue-900"
      }`}
        >
          Examination
        </button>
      </div>

      {/* CONTENT */}
      <div className="mt-1">
        {/* COURSE MODULE */}
        {activeTab === "module" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[1].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 text-black"
                >
                  {/* ICON */}
                  <div className="flex justify-center mb-4">
                    <div className="flex items-center justify-center w-32 h-32 rounded-xl bg-blue-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-20 h-20 text-blue-900"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* XP */}
                  {/* <div className="flex justify-center mb-3">
                    <span className="text-xs font-semibold italic text-gray-600 border border-gray-300 rounded-full px-2 py-0.5">
                      100 XP
                    </span>
                  </div> */}

                  {/* TITLE */}
                  <h3 className="text-center font-semibold mb-4">
                    About Base Indonesia
                  </h3>

                  {/* BUTTON */}
                  <button className="w-full bg-blue-900 text-sm font-bold text-white py-2 rounded-lg hover:bg-blue-700 transition">
                    Start Examation
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
