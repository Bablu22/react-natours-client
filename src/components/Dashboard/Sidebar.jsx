import React from "react";
import classNames from "classnames";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiOutlineLogout } from "react-icons/hi";
import { DASHBOARD_SIDEBAR_LINKS, DASHBOARD_SIDEBAR_ADMIN } from "./Links";
import { setLogout } from "../../redux/features/authSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const linkClass =
    "flex items-center gap-2 font-light px-3 py-2  hover:no-underline active:bg-neutral-600 rounded-sm text-base font-roboto";

export default function Sidebar({ open }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const user = JSON.parse(localStorage.getItem("profile")).user;
    const user = JSON.parse(localStorage.getItem("profile")).user
    const handleLogout = () => {
        dispatch(setLogout());
        toast.success("You are loged out");
        navigate("/register");
    };
    return (
        <div
            className={`flex-col ${open ? "hidden" : ""
                } p-3 md:flex bg-neutral-900 w-60`}
        >
            <div className="py-8 flex flex-1 flex-col gap-0.5">
                {DASHBOARD_SIDEBAR_LINKS.map((link) => (
                    <SidebarLink key={link.key} link={link} />
                ))}

                {user.role === "admin" &&
                    DASHBOARD_SIDEBAR_ADMIN.map((link) => (
                        <SidebarLink key={link.key} link={link} />
                    ))}
            </div>

            <div className="flex flex-col gap-0.5 pt-2 border-t border-neutral-700">
                <button
                    onClick={handleLogout}
                    className={classNames(linkClass, "cursor-pointer text-red-500")}
                >
                    <span className="text-xl">
                        <HiOutlineLogout />
                    </span>
                    Logout
                </button>
            </div>
        </div>
    );
}

function SidebarLink({ link }) {
    const { pathname } = useLocation();

    return (
        <Link
            to={link.path}
            className={classNames(
                pathname === link.path ? "bg-[#FFC800] text-dark" : "text-neutral-400",
                linkClass
            )}
        >
            <span className="text-xl">{link.icon}</span>
            {link.label}
        </Link>
    );
}
