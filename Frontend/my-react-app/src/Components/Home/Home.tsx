import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaBell, FaShoppingCart, FaHeart, FaUser, FaThLarge, FaSearch } from "react-icons/fa"; // Icons from Font Awesome
import { Link } from 'react-router-dom';

function Home() {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/products')
            .then((response) => {

                setProducts(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the product data!", error);
            });
    }, []);
    console.log(products); //


    return (
        <div>
            <div className="min-h-screen">
                {/* Header */}
                <div className="flex justify-between items-center bg-white p-4 ">
                    <span className="text-3xl md:text-5xl font-bold m-4 md:m-8">Eyision</span>
                    <div className="flex gap-4 m-4 md:m-8">
                        <FaBell className="text-black text-2xl md:text-4xl" />
                        <FaShoppingCart className="text-black text-2xl md:text-4xl" />
                        <FaHeart className="text-black text-2xl md:text-4xl" />
                        <FaUser className="text-black text-2xl md:text-4xl" />
                    </div>
                </div>

                {/* Search Bar */}
                <div className='flex justify-between items-center mr-16'>
                    <div className="my-4 flex items-center space-x-1 w-full">
                        <div className="relative flex-1 ml-4 md:ml-12">
                            {/* Adding the search icon with better spacing */}
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 ms-2 text-black">
                                <FaSearch fontSize={'18px'} />
                            </span>
                            {/* Search input with proper padding for the icon */}
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-[90%] md:w-[80%] p-2 md:p-4 pl-12 ml-2 rounded-lg bg-[#7A7A7A] border-none focus:outline-none text-black placeholder:text-black" // Updated padding-left
                                style={{ paddingLeft: '40px' }} // Additional padding for better spacing
                            />
                        </div>
                    </div>

                    <div>
                        <FaThLarge className="text-black text-2xl md:text-4xl" />
                    </div>
                </div>

                {/* Offer & Promotions Banner */}
                <div className="bg-[#7A7A7A] text-center text-2xl md:text-5xl font-bold p-4 md:p-6 rounded-lg mx-4 md:mx-14 my-4 md:my-10 h-40 md:h-80 flex items-center justify-center text-black">
                    Offers & Promotions <br /> Banner
                </div>

                {/* Featured Collections */}
                <section className="md:mx-10 lg:mx-14 mx-4">
                    <h2 className="text-xl md:text-2xl font-bold">Featured Collections</h2>
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2">
                        {products.slice(0, 2).map((product: any) => ( // Slicing the first two products
                            <div key={product.id} className="p-4 shadow-md rounded-lg bg-white">
                                {/* Image Placeholder */}
                                <div className="w-full h-40 md:h-64 bg-[#7A7A7A] rounded-lg flex items-center justify-center mb-4">
                                    <span className="text-black">Product Image</span>
                                </div>
                                {/* Product Details */}
                                <div>
                                    <h3 className="text-lg md:text-xl font-semibold">{product.name}</h3>
                                    <p className="text-sm md:text-base text-gray-500">Price: ${product.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Paid Ads Section */}
                <div className="bg-[#7A7A7A] text-center text-2xl md:text-5xl font-bold p-4 md:p-6 rounded-lg mx-4 md:mx-14 my-4 md:my-10 h-40 md:h-80 flex items-center justify-center text-black">
                    Paid Ads
                </div>

                {/* Personalized Outfit Recommendations */}
                <h2 className="text-xl md:text-2xl font-bold mb-4 mx-4 md:mx-10 lg:mx-14">Personalized Outfit Recommendations</h2>
                <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2">
                    {products.slice(0, 2).map((product: any) => ( // Slicing the first two products
                        <div key={product.id} className="p-4 shadow-md rounded-lg bg-white">
                            {/* Image Placeholder */}
                            <div className="w-full h-40 md:h-64 bg-[#7A7A7A] rounded-lg flex items-center justify-center mb-4">
                                <span className="text-black">Product Image</span>
                            </div>
                            {/* Product Details */}
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold">{product.name}</h3>
                                <p className="text-sm md:text-base text-gray-500">Price: ${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Leading Designers */}
                <div className='mx-8'>
                    <p className="text-right text-black mt-8 mr-4 md:mr-10 cursor-pointer">View More</p>
                    <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-10 lg:ml-14">Leading Designers</h2>

                    {/* Grid with 4 equal columns */}
                    <div className="mt-8 grid grid-cols-4 gap-4 ml-4 md:ml-10 lg:ml-14">
                        {/* {Array(4).fill('').map((_, index) => ( */}
                        <div className='flex justify-between flex-col items-center gap-4'>
                            <div className="bg-[#7A7A7A] rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center">

                            </div>
                            <p className="text-center text-sm md:text-base text-black">Lorem ipsum</p>
                        </div>
                        <div className='flex justify-between flex-col items-center gap-4'>
                            <div className="bg-[#7A7A7A] rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center">

                            </div>
                            <p className="text-center text-sm md:text-base text-black">Lorem ipsum</p>
                        </div>

                        <div className='flex justify-between flex-col items-center gap-4'>
                            <div className="bg-[#7A7A7A] rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center">

                            </div>
                            <p className="text-center text-sm md:text-base text-black">Lorem ipsum</p>
                        </div>

                        <div className='flex justify-between flex-col items-center gap-4'>
                            <div className="bg-[#7A7A7A] rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center">

                            </div>
                            <p className="text-center text-sm md:text-base text-black">Lorem ipsum</p>
                        </div>


                        {/* ))} */}
                    </div>
                </div>



                {/* Featured Articles */}
                <div className="p-4">
                <div className="p-4">
    <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl md:text-2xl font-bold mb-4 mx-4 md:mx-10 lg:mx-14">Featured Articles</h2>
        <p className="text-right text-black mt-8 mr-4 md:mr-10 cursor-pointer">View More</p>
    </div>

    <div className="space-y-8 px-4 py-4 md:px-6 md:py-8 mx-4 md:mx-10 lg:mx-14">
        {/* First article */}
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 w-full">
            <div className="w-full md:w-2/5 bg-[#7A7A7A] flex items-center justify-center rounded-lg h-40 md:h-60">
                <p className="text-center text-lg">Image</p> {/* Placeholder for image */}
            </div>
            <div className="w-full md:w-3/5">
                <h3 className="text-xl md:text-2xl font-semibold">Lorem Ipsum</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3">
                    Lorem ipsum dolor sit amet consectetur Vulputate ni dummy. Lorem ipsum dolor sit amet consectetur.
                </p>
                <a href="#" className="text-black font-semibold text-sm md:text-base">Explore More</a>
            </div>
        </div>

        {/* Second article */}
        <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 w-full">
            <div className="w-full md:w-2/5 bg-[#7A7A7A] flex items-center justify-center rounded-lg h-40 md:h-60">
                <p className="text-center text-lg">Image</p> {/* Placeholder for image */}
            </div>
            <div className="w-full md:w-3/5">
                <h3 className="text-xl md:text-2xl font-semibold">Lorem Ipsum</h3>
                <p className="text-sm md:text-base text-gray-600 mb-3">
                    Lorem ipsum dolor sit amet consectetur Vulputate ni dummy. Lorem ipsum dolor sit amet consectetur.
                </p>
                <a href="#" className="text-black font-semibold text-sm md:text-base">Explore More</a>
            </div>
        </div>
    </div>
</div>


                    {/* Bottom Paid Ads Section */}
                    <div className="bg-[#7A7A7A] text-center text-2xl md:text-5xl font-bold p-4 md:p-6 rounded-lg mx-4 md:mx-14 my-4 md:my-10 h-40 md:h-80 flex items-center justify-center text-black">
                        Paid Ads
                    </div>

                    <section className="my-6 mx-4 md:mx-10 lg:mx-14">
                        <h2 className="text-xl md:text-2xl font-bold">Seasonal Trends</h2>
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2">
                            {products.slice(0, 2).map((product: any) => ( // Slicing the first two products
                                <div key={product.id} className="p-4 shadow-md rounded-lg bg-white">
                                    {/* Image Placeholder */}
                                    <div className="w-full h-40 md:h-64 bg-[#7A7A7A] rounded-lg flex items-center justify-center mb-4">
                                        <span className="text-black">Product Image</span>
                                    </div>
                                    {/* Product Details */}
                                    <div>
                                        <h3 className="text-lg md:text-xl font-semibold">{product.name}</h3>
                                        <p className="text-sm md:text-base text-gray-500">Price: ${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <br />
                    <br /><br /><br />

                    <hr className="border-t-4 border-black my-8 mx-12" />
                    <nav className="fixed bottom-0 left-0 right-0 bg-white p-2 md:p-4">
                        <div className="flex justify-around text-center">
                            {/* Active Tab (Home) */}
                            <div className="text-black">
                                <div className="h-8 w-8 md:h-10 md:w-10 bg-black mx-auto mb-1 md:mb-2 rounded-lg"></div>
                                <span className="text-xs md:text-sm">Home</span>
                            </div>
                            {/* Inactive Tab (Shop/Customize) */}
                            <div className="text-gray-700">
                                <Link to="/shop"> {/* Wrap the div with Link */}
                                    <div className="h-8 w-8 md:h-10 md:w-10 bg-[#7A7A7A] mx-auto mb-1 md:mb-2 rounded-lg"></div>
                                    <span className="text-xs md:text-sm">Shop/Customize</span>
                                </Link>
                            </div>
                            {/* Inactive Tab (Des. Profiles) */}
                            <div className="text-gray-700">
                                <div className="h-8 w-8 md:h-10 md:w-10 bg-[#7A7A7A] mx-auto mb-1 md:mb-2 rounded-lg"></div>
                                <span className="text-xs md:text-sm">Des. Profiles</span>
                            </div>
                            {/* Inactive Tab (Community) */}
                            <div className="text-gray-700">
                                <div className="h-8 w-8 md:h-10 md:w-10 bg-[#7A7A7A] mx-auto mb-1 md:mb-2 rounded-lg"></div>
                                <span className="text-xs md:text-sm">Community</span>
                            </div>
                        </div>
                    </nav>



                </div>
            </div>
        </div>
    );
}

export default Home;
