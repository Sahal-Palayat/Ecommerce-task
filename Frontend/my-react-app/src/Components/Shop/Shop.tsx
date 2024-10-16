import axios from 'axios';
import { useEffect, useState } from 'react'
import { FaBell, FaShoppingCart, FaHeart, FaUser } from "react-icons/fa"; // Icons from Font Awesome


import { Link } from 'react-router-dom'
function Shop() {


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
        <div className="min-h-screen bg-white">
            {/* Top Navbar */}
            <div className="flex justify-between items-center bg-white p-4">
                <span className="text-3xl md:text-5xl font-bold m-4 md:m-8">Eyision</span>
                <div className="flex gap-4 m-4 md:m-8">
                    <FaBell className="text-black text-2xl md:text-4xl" />
                    <FaShoppingCart className="text-black text-2xl md:text-4xl" />
                    <FaHeart className="text-black text-2xl md:text-4xl" />
                    <FaUser className="text-black text-2xl md:text-4xl" />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-around mt-4">
                <button className="bg-[#7A7A7A] rounded-lg w-80 h-18 text-white text-lg">Gender</button>
                <button className="bg-[#7A7A7A] rounded-lg w-80 h-14 text-white text-lg">Consult a Designer</button>
            </div>


            {/* Categories Grid */}
            <div className="grid grid-cols-2 gap-4 p-4 mt-8 md:px-6 md:py-8 mx-4 md:mx-10">
                {products.map((product:any, index) => (
                    <div key={index} className='flex justify-between flex-col gap-4 mb-3'>
                        <div className="bg-[#7A7A7A] rounded-lg h-60 flex flex-col items-center justify-center">
                            {/* You can use product.image or product.name to show actual data */}
                            <img src={product.imageUrl} alt={product.name} className="h-full w-full object-cover rounded-lg" />
                        </div>
                        <span className="text-black text-center">{product.name}</span>
                    </div>
                ))}
            </div>
            <br /><br /><br /><br />
            {/* Bottom Navbar */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white p-4">
                <div className="flex justify-around text-center">
                    {/* Home Tab */}
                    <Link to="/" className="text-gray-500">
                        <div className="h-6 w-6 bg-gray-300 mx-auto mb-1 rounded-lg"></div>
                        <span className="text-sm">Home</span>
                    </Link>

                    {/* Shop/Customize Tab */}
                    <Link to="/shop" className="text-black">
                        <div className="h-6 w-6 bg-black mx-auto mb-1 rounded-lg"></div>
                        <span className="text-sm">Shop/Customize</span>
                    </Link>

                    {/* Des. Profiles Tab */}
                    <Link to="/profiles" className="text-gray-500">
                        <div className="h-6 w-6 bg-gray-300 mx-auto mb-1 rounded-lg"></div>
                        <span className="text-sm">Des. Profiles</span>
                    </Link>

                    {/* Community Tab */}
                    <Link to="/community" className="text-gray-500">
                        <div className="h-6 w-6 bg-gray-300 mx-auto mb-1 rounded-lg"></div>
                        <span className="text-sm">Community</span>
                    </Link>


                </div>
            </nav>
        </div>
    )
}

export default Shop
