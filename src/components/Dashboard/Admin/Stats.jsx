import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import { getStats } from '../../../redux/features/tourSlice'
import Loader from '../../common/Loader';

function Stats() {
    const { stats, loading, error } = useSelector((state) => ({ ...state.tour }));
    const dispatch = useDispatch()

    useEffect(() => {
        error && toast.warning(error)
        dispatch(getStats())
    }, [dispatch, error])

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
                    {stats.map((item) => (
                        <div className="rounded-xl bg-white p-4 py-8 shadow-lg">
                            <div className="flex justify-between font-roboto">
                                <div className="ml-4">
                                    <h2 className="font-semibold font-roboto text-xl">
                                        Tour level: {item?._id}
                                    </h2>
                                    <h2 className="font-semibold font-roboto text-xl">
                                        Number of tour: {item?.numTours}
                                    </h2>
                                    <p className="mt-2 text-lg text-gray-500 border p-2  font-roboto font-semibold">
                                        Average price: $ {item?.avgPrice}
                                    </p>
                                    <p className="mt-2  text-gray-500 border p-2  text-lg font-roboto font-semibold">
                                        Minimum price:$ {item?.minPrice}
                                    </p>
                                    <p className="mt-2  text-gray-500 border p-2  text-lg font-roboto font-semibold">
                                        Maximum price:$ {item?.maxPrice}
                                    </p>
                                    <p className="mt-2  text-gray-500 border p-2 text-lg font-roboto font-semibold">
                                        Average rating: {item?.avgRating}
                                    </p>

                                </div>
                                <div className="">
                                    <h2 className="font-semibold font-roboto text-xl mb-3">
                                        Tours:
                                    </h2>
                                    {
                                        item.tours.map(tour => <li key={tour}>{tour}</li>)
                                    }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Stats

