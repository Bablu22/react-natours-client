import React from "react";
import image from "../../images/about.png";
import Button from "../common/Button";

function About() {
    return (
        <div>
            <div className="grid grid-cols-1 gap-20 mt-36 md:grid-cols-2">
                <div>
                    <img src={image} className="w-full" alt="about" />
                </div>
                <div className="md:mt-20 ">
                    <div>
                        <span className="text-[#7EA6FF] font-roboto leading-tight">
                            About Us
                        </span>
                        <h2 className="text-[#00095E] text-5xl font-josefin font-bold leading-tight pt-6">
                            Get ready for real time adventure
                        </h2>
                        <p className="pt-5 text-gray-500 font-roboto">
                            Let’s start your journey with us, your dream will come true. Lorem
                            ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam quis nostrud exercitation.
                        </p>
                        <Button classname="bg-[#FCC900] px-5 text-[#00095E] mt-10">
                            Book Your Destination
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
