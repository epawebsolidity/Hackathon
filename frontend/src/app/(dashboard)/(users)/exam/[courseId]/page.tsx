export default function Exam() {
  return (
    <div className="flex w-full">
      <div className="flex flex-col md:w-full rounded-xl">
        <div className="mt-2 p-2">
          <h1 className="text-2xl font-bold mb-4">
            [ Nama Course Yang Diambil ]
          </h1>
          <p className="text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea nemo
            dolor soluta perspiciatis quae reprehenderit ipsa quibusdam modi
            repudiandae autem ex reiciendis praesentium, ut minus doloremque?
            Incidunt dignissimos maxime aspernatur? [ description course ]
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-5 text-black"
            >
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-24 h-24 rounded-xl bg-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-12 h-12 text-blue-900"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="text-center font-semibold text-gray-800 mb-1">
                Part {item}: Dasar Pembelajaran
              </h3>

              <p className="text-center text-sm text-gray-500 mb-4">
                Pengenalan konsep awal & alur pembelajaran
              </p>

              <button
                className="w-full py-2 text-sm font-semibold rounded-lg
        bg-blue-900 text-white hover:bg-blue-700 transition"
              >
                Start Learning
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
