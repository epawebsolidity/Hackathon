import Image from "next/image";
export default function Dashboard() {
    return (
        <div className="flex w-full p-4">
            <div className="grid w-full grid-cols-6 gap-6">
                <div className="col-span-3 row-span-3 bg-white rounded-2xl shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Leaderboard</h3>
                    <ul className="space-y-3">
                        {["John Doe", "Jane Smith", "Alex Johnson"].map((user, idx) => (
                            <li key={idx} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg hover:bg-gray-100 transition">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold w-5 text-gray-700">{idx + 1}</span>
                                    <div className="relative w-10 h-10">
                                        <Image
                                            src={`https://i.pravatar.cc/150?img=${idx + 1}`}
                                            alt="Avatar"
                                            width={40}
                                            height={40}
                                            className="rounded-full object-cover"
                                        />
                                        {idx === 0 && (
                                            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-yellow-400 border-2 border-white rounded-full" title="Top 1" />
                                        )}
                                    </div>
                                    <span className="text-gray-700 font-medium">{user}</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-800">{Math.floor(Math.random() * 5000) + 1000} XP</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-3 row-span-1 bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-xs text-gray-500 font-medium">Revenue</p>
                            <p className="text-xl font-bold text-gray-800">$12,450</p>
                        </div>
                        <div className="p-3 bg-blue-100 rounded-full">
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 6h18M3 14h18M3 18h18" />
                            </svg>
                        </div>
                    </div>
                    <div className="mt-4">
                        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-2 bg-blue-500 rounded-full" style={{ width: "70%" }}></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">Target progress</p>
                    </div>
                </div>
                <div className="col-span-3 row-span-2 bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between">
                    <div className="flex items-center gap-6">
                        <div className="relative shrink-0">
                            <Image
                                src="https://img.freepik.com/vektor-gratis/ilustrasi-kera-gaya-nft-digambar-tangan_23-2149622021.jpg"
                                alt="Avatar"
                                width={64}
                                height={64}
                                className="rounded-full object-cover"
                            />
                            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-base font-semibold text-gray-800 leading-tight">John Doe</p>
                            <p className="text-sm text-gray-500">UI Designer</p>
                        </div>
                    </div>

                    <div className="mt-6 w-full ">
                        <div className="flex justify-between mb-2 text-sm font-semibold text-gray-700">
                            <span>Level</span>
                            <span className="px-2 py-1 text-xs font-bold text-amber-700 bg-amber-100 rounded-full">300 XP</span>
                        </div>
                        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden shadow-inner">
                            <div className="h-4 bg-gradient-to-r from-amber-400 via-red-500 to-pink-500 rounded-full shadow-lg" style={{ width: "60%" }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}