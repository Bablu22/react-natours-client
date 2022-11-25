import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getInActiveUsers } from "../../../redux/features/authSlice";
import Loader from "../../common/Loader";
import TableBody from "./TableBody";

function DeactivatedUser() {
    const { inActiveUsers, loading } = useSelector((state) => ({
        ...state.auth,
    }));
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInActiveUsers());
    }, [dispatch]);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div classname="rounded-md w-full">
                    <div>
                        <div classname="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                            <div classname="inline-block min-w-full shadow rounded-lg overflow-hidden">
                                <table classname="min-w-full leading-normal">
                                    <thead>
                                        <tr>
                                            <th classname="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Name
                                            </th>
                                            <th classname="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Email
                                            </th>
                                            <th classname="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Role
                                            </th>

                                            <th classname="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Action
                                            </th>
                                            <th classname="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Action
                                            </th>
                                            <th classname="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                                                Action
                                            </th>

                                        </tr>
                                    </thead>
                                    {inActiveUsers?.map((user) => (
                                        <TableBody key={user._id} status="Deactive" user={user} />
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

export default DeactivatedUser;
