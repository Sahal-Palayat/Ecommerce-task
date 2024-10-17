import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ShopHeader from '../../pages/ShopHeader';
import Footer from '../../pages/Footer';
import { axiosApiUser } from '../../services/axios';

function ProductDetails() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axiosApiUser.get(`/products/category/${categoryId}`)  // Use axiosApiUser instance
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products for category', error);
            });
    }, [categoryId]);
    console.log(products)
    return (
        <div>
            <ShopHeader />

            <section className="flex justify-between items-center p-4 mx-4 md:mx-10 lg:mx-14">
            {products.slice(0,1).map((product: any) => (
                <h1 className="text-xl md:text-4xl font-bold m-4 md:m-8">{product.category}</h1>
            ))}
                <div className="flex space-x-4">
                    <button className="bg-[#7A7A7A] text-black px-4 py-2 rounded shadow hover:bg-gray-300 transition duration-200">
                        Filter
                    </button>
                    <button className="bg-[#7A7A7A] text-black px-4 py-2 rounded shadow hover:bg-gray-300 transition duration-200 flex items-center">
                        <span className="mr-1">Sort</span>
                        <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3-3 3 3m-3-3v12m5-12l3 3-3 3m0 0v12" />
                        </svg>
                    </button>
                </div>

            </section>




            <section className="md:mx-10 lg:mx-14 mx-4 mb-40">
                <div className="grid grid-cols-2 gap-4">
                    {products.map((product: any) => (
                        <div key={product.id} className="p-4 shadow-md rounded-lg bg-white">
                            {/* Responsive Image */}
                            <img
                                src={product.imageUrl}
                                className="w-full h-40 md:h-64 object-cover rounded-lg mb-4"
                                alt={product.name}
                            />
                            <div>
                                <h3 className="text-lg md:text-xl font-semibold">{product.name}</h3>
                                <p className="text-sm md:text-base text-gray-500">Price: ${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <br /><br /><br /><br /><br />
            <Footer />
        </div>
    );
}

export default ProductDetails;
