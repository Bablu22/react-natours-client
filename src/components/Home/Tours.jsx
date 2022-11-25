import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getTopTour } from "../../redux/features/tourSlice";
import Heading from "../common/Heading";
import Loader from "../common/Loader";
import Tourcard from "../common/Tourcard";

function Tours() {
    const { loading, topTours, error } = useSelector((state) => ({
        ...state.tour,
    }));
    const dispatch = useDispatch();
    useEffect(() => {

        error && toast.warning(error)

        dispatch(getTopTour());
    }, [dispatch, error]);

    return (
        <div>
            <Heading
                subHeading="Check Our Best Promotional Tour"
                heading="Out Top Events"
            />
            {loading ? (
                <Loader />
            ) : (
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {topTours.map((tour) => (
                        <Tourcard key={tour._id} tour={tour} />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Tours;
