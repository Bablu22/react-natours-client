import React from "react";
import { useDispatch } from "react-redux";
import { updateUserByAdmin } from "../../../redux/features/authSlice";
import { toast } from "react-toastify";
const options = [
    {
        label: "Select",
        value: "_",
    },
    {
        label: "User",
        value: "user",
    },
    {
        label: "Guide",
        value: "guide",
    },
    {
        label: "Leade-guide",
        value: "lead-guide",
    },
    {
        label: "Admin",
        value: "admin",
    },
];

const Status = [
    {
        label: "Select",
        value: "_",
    },
    {
        label: "Active",
        value: "true",
    },
    {
        label: "Deactive",
        value: "false",
    },
];

function TableBody({ user, status }) {

    const dispatch = useDispatch();

    return (
        <tbody>
            <tr>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12">
                            <img
                                className="w-full h-full rounded-full"
                                src={user?.photo}
                                alt=""
                            />
                        </div>
                        <div className="ml-3">
                            <p className="text-gray-900 whitespace-no-wrap">{user?.name}</p>
                        </div>
                    </div>
                </td>
                <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap"> {user?.email}</p>
                </td>
                <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
                    <p className="text-gray-900 whitespace-no-wrap uppercase">
                        {" "}
                        {user?.role}
                    </p>
                </td>

                <td className=" border border-gray-200 bg-white text-sm p-5">
                    <select
                        onChange={(e) =>
                            dispatch(
                                updateUserByAdmin({
                                    values: { role: e.target.value, id: user._id },
                                    toast,
                                })
                            )
                        }
                        name="role"
                        className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none w-full mx-auto "
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </td>
                <td className=" border border-gray-200 bg-white text-sm p-5">
                    <select
                        name="active"
                        onChange={(e) =>
                            dispatch(
                                updateUserByAdmin({
                                    values: { active: e.target.value, id: user._id },
                                    toast,
                                })
                            )
                        }
                        className="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none w-full mx-auto "
                    >
                        {Status.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </select>
                </td>

                <td className="px-5 py-5 border border-gray-200 bg-white text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold  leading-tight">
                        <span
                            aria-hidden
                            className={`absolute inset-0 ${status === "Active"
                                ? "bg-green-200 text-green-900"
                                : "bg-red-200 text-red-900"
                                } opacity-50 rounded-full`}
                        ></span>
                        <span className="relative">{status}</span>
                    </span>
                </td>

            </tr>
        </tbody>
    );
}

export default TableBody;
