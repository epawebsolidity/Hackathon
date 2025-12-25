"use client";
import Image from "next/image";
import { useState } from "react";
export default function Profile() {
  const [activeTab, setActiveTab] = useState("module");
  return (
    <>
      {/* TAB HEADER */}
      <div className="flex gap-2 mt-4">
        <button
          onClick={() => setActiveTab("module")}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition
      ${
        activeTab === "module"
          ? "bg-gray-300 text-gray-800"
          : "text-gray-600 hover:text-blue-900"
      }`}
        >
          Profile
        </button>

        <button
          onClick={() => setActiveTab("video")}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition
      ${
        activeTab === "video"
          ? "bg-gray-300 text-gray-800"
          : "text-gray-600 hover:text-blue-900"
      }`}
        >
          Certificates
        </button>
      </div>

      {/* CONTENT */}
      <div className="mt-1">
        {/* COURSE MODULE */}
        {activeTab === "module" && (
          <div className="min-h-screen text-black">
            <main className="p-2">
              {/* Profile Picture */}
              <div className="flex items-center gap-6 mb-10">
                <div>
                  <h3 className="font-semibold text-lg">Profile Picture</h3>
                  <p className="text-sm text-black/60 mb-3">
                    We only support PNGs, JPEGs and GIFs under 10MB
                  </p>
                  <div className="flex items-center gap-6">
                    {/* Avatar */}
                    <div className="relative group">
                      <Image
                        src="https://img.freepik.com/vektor-gratis/ilustrasi-kera-gaya-nft-digambar-tangan_23-2149622021.jpg"
                        alt="Avatar"
                        width={140}
                        height={140}
                        className="rounded-full object-cover ring-4 ring-red-500/30 transition group-hover:ring-red-500"
                      />

                      {/* Hover overlay */}
                      <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
                        <span className="text-sm font-medium text-white">
                          Change
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 w-full">
                      <button
                        className="
      w-full
      flex items-center justify-center gap-2
      px-4 py-3
      bg-blue-900 text-white
      rounded-lg
      text-sm font-semibold
      active:scale-[0.98]
      hover:bg-blue-800
      transition
    "
                      >
                        Change Image
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Personal Info */}
              <section className="max-w-4xl">
                <h2 className="text-2xl font-semibold mb-1">Personal Info</h2>
                <p className="text-sm text-black/60 mb-6">
                  Manage your personal details
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-black/80">
                      First Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-md bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-red-500"
                      defaultValue="Eko Purnama"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-black/80">
                      Last Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-md bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-red-500"
                      defaultValue="Azi"
                    />
                  </div>

                  {/* Username */}
                  <div className="md:col-span-2 flex flex-col gap-1">
                    <label className="text-sm font-medium text-black/80">
                      Username
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-md bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-red-500"
                      defaultValue="@ekopurnamaazi-y4g4o"
                    />
                  </div>

                  {/* Email */}
                  <div className="md:col-span-2 flex flex-col gap-1">
                    <label className="text-sm font-medium text-black/80">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-md bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-red-500"
                      defaultValue="epaweb3js@gmail.com"
                    />
                  </div>

                  {/* Phone */}
                  <div className="md:col-span-2 flex flex-col gap-1">
                    <label className="text-sm font-medium text-black/80">
                      Phone
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-md bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-red-500"
                      defaultValue="+62 852 8194 4451"
                    />
                  </div>

                  {/* Date Birth */}
                  <div className="md:col-span-2 flex flex-col gap-1">
                    <label className="text-sm font-medium text-black/80">
                      Date of Birth
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-md bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-red-500"
                    />
                  </div>

                  {/* Country */}
                  <div className="md:col-span-2 flex flex-col gap-1">
                    <label className="text-sm font-medium text-black/80">
                      Country
                    </label>
                    <input
                      className="w-full px-4 py-3 rounded-md bg-white border border-black/10 focus:outline-none focus:ring-2 focus:ring-red-500"
                      defaultValue="Indonesia"
                    />
                  </div>

                  {/* Bio */}
                  <div className="md:col-span-2 flex flex-col gap-1">
                    <label className="text-sm font-medium text-black/80">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 rounded-md bg-white border border-black/10 resize-none focus:outline-none focus:ring-2 focus:ring-red-500"
                      placeholder="Tell us about yourself..."
                    />
                  </div>
                </div>
              </section>

              {/* Save Button */}
              <div className="mt-4 bottom-6 right-6">
                <button className="px-6 py-3 bg-blue-900 text-white rounded-md font-semibold hover:bg-blue-700">
                  Save Changes
                </button>
              </div>
            </main>
          </div>
        )}

        {/* COURSE VIDEOS */}
        {activeTab === "video" && (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
              {[1, 2, 3, 4, 5].map((item) => (
                <div
                  key={item}
                  className="bg-white rounded-xl shadow hover:shadow-lg transition text-black"
                >
                  {/* ICON */}
                  <div className="flex mb-4">
                    <div className="relative w-full h-50 rounded-t-lg overflow-hidden bg-black">
                      <Image
                        src="https://img.freepik.com/vektor-gratis/ilustrasi-kera-gaya-nft-digambar-tangan_23-2149622021.jpg"
                        alt="Avatar"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <button className="w-full bg-blue-900 rounded-b-lg text-white py-2 hover:bg-blue-700 transition">
                    Cleam Certifites
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
