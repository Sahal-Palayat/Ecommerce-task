import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { axiosApiUser } from '../services/axios';

function AllProducts() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axiosApiUser.get('/categories')  
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the categories data!", error);
            });
    }, []);
    const navigate = useNavigate();

    const handleClick = (categoryId: string) => {
        navigate(`/shop/${categoryId}`); 
    };

    return (
        <div>
            <div className="grid grid-cols-2 gap-4 p-4 mt-8 md:px-6 md:py-8 mx-4 md:mx-10">
                {categories.map((category: any) => (
                    <div
                        key={category._id}
                        onClick={() => handleClick(category._id)} // Navigate with categoryId
                        className='flex justify-between flex-col gap-4 mb-3 cursor-pointer'
                    >
                        <div className="bg-[#7A7A7A] rounded-lg h-60 flex flex-col items-center justify-center">
                            <img
                                src={category.imageUrl}
                                alt={category.name}
                                className="h-full w-full object-cover rounded-lg"
                            />
                        </div>
                        <span className="text-black text-center">{category.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AllProducts;
