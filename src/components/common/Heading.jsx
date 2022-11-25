import React from "react";

function Heading({ subHeading, heading }) {
    return (
        <div className="flex items-center justify-center text-center py-14">
            <div>
                <span className="text-[#7EA6FF] font-roboto leading-tight">
                    {subHeading}
                </span>
                <h2 className="text-[#00095E] md:text-5xl font-josefin font-bold leading-tight text-4xl pt-6">
                    {heading}
                </h2>
            </div>
        </div>
    );
}

export default Heading;
