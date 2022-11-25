import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import Loader from "../common/Loader";

function Profile() {
    const { user, loading } = useSelector((state) => ({ ...state.auth }));
    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div className="flex flex-row items-center justify-center w-full py-10 font-roboto">
                    <div className="w-full mx-auto bg-white shadow-xl card md:w-2/4 hover:shadow">
                        <img
                            src={user?.photo}
                            alt=""
                            className="w-1/2 py-8 mx-auto rounded-xl"
                        />
                        <div className="mt-2 text-3xl font-medium text-center">
                            {user?.name}
                        </div>
                        <div className="mt-2 text-lg font-light text-center">
                            Email: {user?.email}
                        </div>
                        <div className="text-lg font-normal text-center">
                            Role: {user?.role}
                        </div>
                        <hr className="mt-8" />
                        <Link
                            to="edit-profile"
                            className="flex items-center justify-center p-4"
                        >
                            <div to="edit-profile" className="flex items-center text-center ">
                                <FiEdit className="mr-2" />
                                Upate profile
                            </div>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Profile;
