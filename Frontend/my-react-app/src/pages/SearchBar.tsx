import { FaSearch,FaThLarge } from "react-icons/fa"; 

function SearchBar() {
    return (
        <div>
            <div className='flex justify-between items-center mr-16'>
                <div className="my-4 flex items-center space-x-1 w-full">
                    <div className="relative flex-1 ml-4 md:ml-12">

                        <span className="absolute left-4 top-1/2 transform -translate-y-1/2 ms-2 text-black">
                            <FaSearch fontSize={'18px'} />
                        </span>

                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-[90%] md:w-[80%] p-2 md:p-4 pl-12 ml-2 rounded-lg bg-[#7A7A7A] border-none focus:outline-none text-black placeholder:text-black" // Updated padding-left
                            style={{ paddingLeft: '40px' }}
                        />
                    </div>
                </div>

                <div>
                    <FaThLarge className="text-black text-2xl md:text-4xl" />
                </div>
            </div>
        </div>
    )
}

export default SearchBar
