import React from "react";
import Moment from "react-moment";
import { AiFillDelete } from "react-icons/ai";

function BookingTable({ tour, user, item, handleDelete }) {
    return (
        <tbody>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12">
                            <img
                                className="w-full h-full rounded-full"
                                src={user.photo}
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">{user.name}</p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap">{user.email} </p>
                </td>
                <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap uppercase">
                        {tour.name}
                    </p>
                    <p className="text-gray-900 whitespace-no-wrap uppercase">
                        {tour._id}
                    </p>
                </td>

                <td className=" border border-gray-200 bg-white text-sm p-5">
                    <p className="text-gray-900 whitespace-no-wrap uppercase">
                        ${item.price}
                    </p>
                </td>
                <td className=" border border-gray-200 bg-white text-sm p-5">
                    <p className="text-gray-900 whitespace-no-wrap uppercase">
                        <Moment format="MMM Do YY">{item.createdAt}</Moment>
                    </p>
                </td>

                <td className="px-5 py-5 text-center border border-gray-200 bg-white text-sm">
                    <button>
                        <AiFillDelete
                            onClick={() => handleDelete(item?._id)}
                            className="text-xl text-red-600"
                        />
                    </button>
                </td>
            </tr>
        </tbody>
    );
}

export default BookingTable;
