import axios from 'axios';
import { useEffect, useState } from 'react'
import { config } from '../config';

function Leading() {
    const [designers, setDesigners] = useState([]);

    useEffect(() => {
        axios.get(`${config.AUTH_BASE_URL}/designers`)
            .then((response) => {

                setDesigners(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the product data!", error);
            });
    }, []);



    return (
        <div className='mx-8'>
        <p className="text-right text-black mt-8 mr-4 md:mr-10 cursor-pointer">View More</p>
        <h2 className="text-xl md:text-2xl font-bold mb-4 ml-4 md:ml-10 lg:ml-14">Leading Designers</h2>

        {/* Designer Cards Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 ml-4 md:ml-10 lg:ml-14">
            {designers.map((designer: any) => (
                <div key={designer._id} className='flex flex-col items-center gap-4'>
                    <div
                        className="rounded-full w-20 h-20 md:w-24 md:h-24 flex flex-col items-center justify-center"
                        style={{
                            backgroundImage: `url(${designer.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    ></div>
                    <p className="text-center text-sm md:text-base text-black">{designer.name}</p>
                </div>
            ))}
        </div>
    </div>
    )
}

export default Leading
