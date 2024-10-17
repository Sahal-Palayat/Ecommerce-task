import axios from 'axios';
import { useEffect, useState } from 'react'
import { config } from '../config';

function ProductList() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get(`${config.AUTH_BASE_URL}/products`)
            .then((response) => {

                setProducts(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the product data!", error);
            });
    }, []);
    
    return (
        <div>
        <section className="md:mx-10 lg:mx-14 mx-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2">
                {products.slice(0, 2).map((product: any) => (
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
    </div>
    )
}

export default ProductList
