import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaStore } from "react-icons/fa";

function Footer() {
    const location = useLocation();

    return (
        <div>
            <nav className="fixed bottom-0 left-0 right-0 bg-white p-2 md:p-4">
                <hr className="border-t-4 border-black mb-2 mx-12" />
                <div className="flex justify-around items-center text-center">
                    {/* Home Icon */}
                    <div className="flex flex-col items-center">
                        <div className="text-black">
                            <Link to="/">
                                <div className={`h-8 w-8 md:h-10 md:w-10 mx-auto mb-1 md:mb-2 rounded-lg flex items-center justify-center ${location.pathname === "/" ? "bg-black" : "bg-[#7A7A7A]"}`}>
                                    <FaHome className={`text-white text-xs md:text-lg`} />
                                </div>
                                <span className="text-xs md:text-sm">Home</span>
                            </Link>
                        </div>
                    </div>

                    {/* Shop Icon */}
                    <div className="flex flex-col items-center">
                        <div className="text-gray-700">
                            <Link to="/shop">
                                <div className={`h-8 w-8 md:h-10 md:w-10 mx-auto mb-1 md:mb-2 rounded-lg flex items-center justify-center ${location.pathname === "/shop" ? "bg-black" : "bg-[#7A7A7A]"}`}>
                                    <FaStore className={`text-white text-xs md:text-lg`} />
                                </div>
                                <span className="text-xs md:text-sm">Shop/Customize</span>
                            </Link>
                        </div>
                    </div>

                    {/* Designer Profiles */}
                    <div className="flex flex-col items-center">
                        <div className="text-gray-700">
                            <div className="h-8 w-8 md:h-10 md:w-10 bg-[#7A7A7A] mx-auto mb-1 md:mb-2 rounded-lg"></div>
                            <span className="text-xs md:text-sm">Des. Profiles</span>
                        </div>
                    </div>

                    {/* Community */}
                    <div className="flex flex-col items-center">
                        <div className="text-gray-700">
                            <div className="h-8 w-8 md:h-10 md:w-10 bg-[#7A7A7A] mx-auto mb-1 md:mb-2 rounded-lg"></div>
                            <span className="text-xs md:text-sm">Community</span>
                        </div>
                    </div>
                </div>

            </nav>
        </div>
    )
}

export default Footer
