import axios from 'axios';
import  { useEffect, useState } from 'react'
import { config } from '../config';

function Featured() {
    const [article, setArticle] = useState([]);

    useEffect(() => {
        axios.get(`${config.AUTH_BASE_URL}/articles`)
            .then((response) => {

                setArticle(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the product data!", error);
            });
    }, []);
    return (
        <div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl md:text-2xl font-bold mb-4 mx-4 md:mx-10 lg:mx-14">Featured Articles</h2>
                    <p className="text-right text-black mt-8 mr-4 md:mr-10 cursor-pointer">View More</p>
                </div>

                <div className="space-y-8 px-4 py-4 md:px-6 md:py-8 mx-4 md:mx-10 lg:mx-14">
                    {article.map((item:any) => (
                        <div key={item._id} className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 w-full">
                            <div
                                className="w-full md:w-2/5 flex items-center justify-center rounded-lg h-40 md:h-60"
                                style={{
                                    backgroundImage: `url(${item.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundRepeat: 'no-repeat',
                                }}
                            >
                            </div>
                            <div className="w-full md:w-3/5">
                                <h3 className="text-xl md:text-2xl font-semibold">{item.heading}</h3>
                                <p className="text-sm md:text-base text-gray-600 mb-3">
                                    {item.content}
                                </p>
                                <a href={item.linkUrl || '#'} className="text-black font-semibold text-sm md:text-base">Explore More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Featured
