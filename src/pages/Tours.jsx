import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/common/Loader';
import Tourcard from '../components/common/Tourcard';
import { getAllTour } from '../redux/features/tourSlice';



const options = [
    {
        label: "Recommended",
        value: "-ratingsAverage",
    },
    {
        label: "High Price",
        value: "-price",
    },
    {
        label: "Low Price",
        value: "price",
    },
    {
        label: "Duration",
        value: "duration",
    },
    {
        label: "Group Size",
        value: "maxGroupSize",
    },
];


function Tours() {
    const { loading, tours } = useSelector((state) => ({
        ...state.tour,
    }));
    const [sort, setSort] = useState("")
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTour(sort));
    }, [dispatch, sort]);

    return (
        <>
            <div className='container mx-auto'>
                {loading ? (
                    <div className='mt-56'>
                        <Loader />
                    </div>
                ) : (
                    <section className="bg-white dark:bg-gray-900 mt-28">
                        <div className="container px-6 py-8 mx-auto">
                            <div className="mt-6 lg:mt-0 lg:px-2 w-full">
                                <div className="flex items-center justify-between text-sm tracking-widest font-josefin bg-gray-100 my-5 p-3">
                                    <p className="text-gray-500 dark:text-gray-300">{tours.length} Tours</p>
                                    <div className="flex items-center text-lg">
                                        <p className="text-gray-500 dark:text-gray-300 mr-5">Sort</p>
                                        <select onChange={(e) => setSort(e.target.value)} className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none p-5">
                                            {options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">

                                    {tours.map((tour) => (
                                        <Tourcard key={tour._id} tour={tour} />
                                    ))}

                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>
        </>
    )
}


export default Tours

