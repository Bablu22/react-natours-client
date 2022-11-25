import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBooking,
  getUsersBooking,
} from "../../redux/features/BookingSlice";
import { AiFillDelete } from "react-icons/ai";
import Moment from "react-moment";
import Loader from "../common/Loader";
import { toast } from "react-toastify";

function Booking() {
  const { loading, bookings, error } = useSelector((state) => ({
    ...state.booking,
  }));
  console.log(bookings);
  const user = JSON.parse(localStorage.getItem("profile")).user;
  const dispatch = useDispatch();
  const id = user._id;
  useEffect(() => {
    error && toast.warning(error);
    dispatch(getUsersBooking(id));
  }, [dispatch, id, error]);

  const handleDelete = (id) => {
    dispatch(deleteBooking({ id, toast }));
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {bookings.map((item) => (
            <div key={item._id} className="rounded-xl bg-white p-4 py-8 shadow-lg">
              <div className="flex justify-between">
                <div className="ml-4">
                  <h2 className="font-semibold font-josefin text-2xl">
                    Tour name: {item?.tour?.name}
                  </h2>
                  <h2 className="font-semibold font-josefin text-2xl">
                    Tour price: ${item?.price}
                  </h2>
                  <p className="mt-2 text-lg text-gray-500">
                    Tour id: {item?.tour?._id}
                  </p>
                  <p className="mt-2  text-gray-500 text-lg">
                    Date:{" "}
                    <Moment format="MMM Do YY, h:mm a">
                      {item?.tour?.createdAt}
                    </Moment>
                  </p>
                </div>
                <div className="">
                  <AiFillDelete
                    onClick={() => handleDelete(item?._id)}
                    className="bg-red-300 w-7 p-1 h-7 rounded-full cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Booking;
