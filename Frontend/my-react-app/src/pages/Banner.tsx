import React, { useEffect, useState } from 'react'
import { config } from '../config';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Banner() {
    const [banner, setBanner] = useState([]);

    useEffect(() => {
        axios.get(`${config.AUTH_BASE_URL}/banner`)
            .then((response) => {

                setBanner(response.data);
            })
            .catch((error) => {
                console.error("There was an error fetching the product data!", error);
            });
    }, []);

    return (
        <div className="mx-4 md:mx-14 my-4 md:my-10">
            <Carousel
                showThumbs={false} // Disable thumbnail images below the carousel
                showStatus={false} // Disable status (e.g., 1/5)
                infiniteLoop
                autoPlay
                interval={4000}
                stopOnHover
                dynamicHeight={false}
                className="rounded-lg"
            >
                {banner.map((item: any) => (
                    <div key={item._id} className="h-40 md:h-80 flex items-center justify-center">
                        <img
                            src={item.imageUrl}
                            alt={item.title || "Banner"}
                            className="w-full h-full object-cover rounded-lg"
                        />
                        <p className="absolute text-white text-2xl md:text-5xl font-bold">
                            {item.title}
                        </p>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Banner
