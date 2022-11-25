import React from "react";
import Button from "../common/Button";
import car from "../../images/car.png";

function Banner() {
    return (
        <div className="mt-36">
            <div className="flex items-center justify-center w-full text-center">
                <div className="">
                    <h1 className="text-3xl md:text-6xl font-bold r text-[#00095E] font-josefin text-center leading-tight	">
                        Lifelong memories just a <br />
                        <span className="relative dd z-[-1]">few seconds away</span>
                    </h1>
                    <p className="text-sm font-roboto text-[#00095E] leading-loose		">
                        Let’s start your journey with us, your dream will come true
                    </p>
                    <Button classname="mt-10 bg-gray-900">Explore Destination</Button>
                </div>
            </div>
            <div className="banner-background md:h-[880px] h-[600px] 2xl:h-[1000px] flex justify-center items-start">
                <div className="container">
                    <div className="car running">
                        <img src={car} alt="car" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
