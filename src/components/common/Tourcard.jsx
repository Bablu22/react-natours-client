import React from "react";
import Moment from "react-moment";
import Button from "./Button";
import { AiFillStar } from "react-icons/ai"


function Tourcard({ tour }) {
    const {
        name,
        summary,
        imageCover,
        difficulty,
        duration,
        maxGroupSize,
        startDates,
        ratingsAverage,
        price
    } = tour;
    return (
        <div>
            <div className="mb-10 card">
                <div className="card__header">
                    <div className="card__picture">
                        <div className="card__picture-overlay">&nbsp;</div>
                        <img src={imageCover} alt="Tour 1" className="card__picture-img" />
                    </div>

                    <h3 className="heading-tertirary ">
                        <span>{name}</span>
                    </h3>
                </div>

                <div className="card__details">
                    <h4 className="card__sub-heading font-josefin">
                        {difficulty} {duration}-day tour
                    </h4>
                    <p className="card__text font-roboto">{summary}</p>
                    <div className="card__data">
                        <span>
                            <Moment format="MMM Do YY">{startDates}</Moment>
                        </span>
                    </div>
                    <div className="card__data">
                        <span>{maxGroupSize} people</span>
                    </div>
                </div>

                <div className="bg-gray-400 card__footer">
                    <p>
                        <span className="card__footer-value ">${price}</span>

                    </p>
                    <p className="card__ratings">
                        <span className="flex items-center card__footer-value"><AiFillStar className="text-yellow-500" />{ratingsAverage}</span>

                    </p>
                </div>

                <Button link={`/tour/${tour._id}`} classname="bg-[#117153] rounded-none  px-7 w-full">
                    Details
                </Button>

            </div>
        </div>
    );
}

export default Tourcard;


