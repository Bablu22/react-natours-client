import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { deleteBooking, getAllBookings } from "../../../redux/features/BookingSlice";
import Loader from "../../common/Loader";
import BookingTable from "./BookingTable";

function AllBookings() {
    const { allBookings, loading, error } = useSelector((state) => ({
        ...state.booking,
    }));
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteBooking({ id, toast }));
    };
    useEffect(() => {
        error && toast.warning(error);
        dispatch(getAllBookings());
    }, [dispatch, error]);



    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="rounded-md w-full">
                    <div>
                        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table className="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Tour name & Id
                                            </th>

                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                price
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                date
                                            </th>
                                            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                delete
                                            </th>
                                        </tr>
                                    </thead>
                                    {allBookings?.map((item) => (
                                        <BookingTable
                                            key={item._id}
                                            status="Active"
                                            tour={item.tour}
                                            user={item.user}
                                            item={item}
                                            handleDelete={handleDelete}
                                        />
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AllBookings;
