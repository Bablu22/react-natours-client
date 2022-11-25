import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Reviews({ reviews }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            <Slider {...settings}>
                {reviews?.map((review) => (
                    <div key={review._id} className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg my-20 slider">
                        <div className="flex justify-center  -mt-16">
                            <img
                                className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                                src={review?.user?.photo}
                                alt="user"
                            />
                        </div>
                        <div>
                            <h2 className="text-gray-800 text-center text-3xl font-semibold py-5">
                                {review?.user?.name}
                            </h2>
                            <p className="mt-2 text-gray-600">{review?.review}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Reviews;
