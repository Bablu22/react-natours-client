import React, { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import logo from "../../images/logo.png";
import Button from "./Button";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Nav() {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "TOURS", link: "/tours" },
        { name: "ABOUT", link: "/" },
        { name: "BLOG'S", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const { user } = useSelector((state) => ({ ...state.auth }));
    useEffect(() => {
        window.addEventListener("scroll", () => {
            window.scrollY > 100 ? setIsActive(true) : setIsActive(false);
        });
    });

    return (
        <div
            className={`fixed top-0 left-0 w-full z-[1000] bg-white ${isActive ? "shadow-lg" : ""
                }`}
        >
            <div className="container mx-auto">
                <div className="items-center justify-between py-6 bg-white md:flex md:px-10 px-7 ">
                    <div className="flex items-center text-2xl font-bold cursor-pointer">
                        <Link to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div
                        onClick={() => setOpen(!open)}
                        className="absolute text-2xl cursor-pointer right-8 top-8 md:hidden"
                    >
                        {open ? <BsXLg /> : <FaBars />}
                    </div>

                    <ul
                        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in  ${open ? "top-20 " : "top-[-490px]"
                            }`}
                    >
                        {Links.map((link) => (
                            <li key={link.name} className="md:ml-5 md:my-0 my-7 ">
                                <Link
                                    to={link.link}
                                    className="text-sm font-bold text-gray-900 duration-500 hover:text-indigo-600 font-josefin"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                        {user ? (
                            <Button
                                link="/dashboard"
                                classname="px-5 py-1 bg-teal-600 md:ml-10"
                            >
                                Dashboard
                            </Button>
                        ) : (
                            <Button
                                link="/register"
                                classname="px-5 py-1 bg-gray-900 md:ml-10"
                            >
                                Login
                            </Button>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Nav;
