import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
    getReviews,
    getSingleTour,
    postReview,
} from "../redux/features/tourSlice";
import Rating from "react-rating";
import UserCard from "../components/common/UserCard";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Loader from "../components/common/Loader";
import { toast } from "react-toastify";
import Reviews from "../components/common/Reviews";
import { createBooking } from "../redux/features/BookingSlice";

function Tour() {
    const { id } = useParams();
    const [rating, setRating] = useState(0);
    const [review, setReview] = useState("");

    const { loading, tour, reviews } = useSelector((state) => ({
        ...state.tour,
    }));
    const { loading: load } = useSelector((state) => ({
        ...state.booking,
    }));
    const { user } = useSelector((state) => ({
        ...state.auth,
    }));

    const handleSubmit = () => {
        const reviews = { review, rating };
        if (!rating || !review) {
            toast.warning("Please give rating and comment");
        }
        dispatch(postReview({ reviews, toast, id }));
    };

    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getSingleTour(id));
        dispatch(getReviews(id));
    }, [dispatch, id]);

    const handleBooking = () => {
        const data = {
            tour: tour._id,
            user: user._id,
            price: tour.price,
        };

        dispatch(createBooking({ data, toast, navigate }));
    };

    return (
        <>
            {loading || load ? (
                <div className="mt-56">
                    <Loader />
                </div>
            ) : (
                <div className="container mx-auto">
                    <main>
                        <section className="bg-white dark:bg-gray-900 mt-28">
                            <div className="container px-6 py-16 mx-auto text-center">
                                <div className="max-w-2xl mx-auto">
                                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                                        {tour.name}
                                    </h1>

                                    <p className="pt-10 text-justify font-josefin">
                                        {tour.description}
                                    </p>
                                </div>

                                <div className="flex justify-center mt-10">
                                    <img
                                        className="object-cover w-full h-96 rounded-xl lg:w-4/5"
                                        src={tour.imageCover}
                                        alt="coverimage"
                                    />
                                </div>
                                <h1 className="mt-10 text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
                                    Your tour guides
                                </h1>
                                <div className="flex items-center justify-center max-w-4xl mx-auto ">
                                    <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3 xl:mt-16 xl:grid-cols-3">
                                        {tour?.guides?.map((user) => (
                                            <UserCard key={user._id} user={user} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white dark:bg-gray-900">
                            <div className="container px-20 py-10 mx-auto">
                                <h1 className="text-3xl font-semibold text-center text-gray-800 capitalize dark:text-white lg:text-4xl">
                                    What clients saying
                                </h1>

                                <div className="flex justify-center mx-auto mt-6">
                                    <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                                    <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                                    <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
                                </div>

                                <div className="mt-10">
                                    <Reviews reviews={reviews} />
                                </div>
                            </div>
                        </section>

                        <section className="bg-white dark:bg-gray-900">
                            <div className="container max-w-4xl px-6 py-10 mx-auto">
                                <h1 className="text-4xl font-semibold text-center text-gray-800 dark:text-white">
                                    Review
                                </h1>
                                <div className="mt-12 space-y-8">
                                    <div className="p-5 border-2 border-gray-100 rounded-lg dark:border-gray-700">
                                        <Rating
                                            onChange={(e) => setRating(e)}
                                            className="text-3xl text-black"
                                            initialRating={rating}
                                            emptySymbol={<AiOutlineStar />}
                                            fullSymbol={<AiFillStar />}
                                        />

                                        <hr className="my-2 border-gray-200 dark:border-gray-700" />

                                        <div>
                                            <label
                                                htmlFor="description"
                                                className="block mb-2 text-lg font-serif"
                                            >
                                                Comment:
                                            </label>
                                            <textarea
                                                name="review"
                                                onChange={(e) => setReview(e.target.value)}
                                                id="description"
                                                cols="10"
                                                rows="2"
                                                placeholder="whrite here.."
                                                className="w-full p-4 font-serif text-gray-600 rounded-md outline-none bg-indigo-50"
                                            ></textarea>
                                        </div>
                                        <button
                                            onClick={handleSubmit}
                                            className="bg-[#ffc800] px-10 py-2 mt-4 font-josefin font-bold"
                                        >
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white dark:bg-gray-900">
                            <div className="container max-w-4xl px-6 py-10 mx-auto">
                                <button
                                    onClick={handleBooking}
                                    disabled={!user}
                                    className="bg-gray-800 text-white w-full py-3 font-bold"
                                >
                                    {user ? "Book now" : "Login first to book"}
                                </button>
                            </div>
                        </section>
                    </main>
                </div>
            )}
        </>
    );
}

export default Tour;
