import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Dashboard/Sidebar";

function Dashboard() {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex flex-row w-full h-screen overflow-hidden mt-28 bg-neutral-100">
            <Sidebar open={open} />

            <div className="flex-1 p-5 overflow-auto scrollbar scrollbar-thin-gray-900 scrollbar-track-gray-100">
                <button
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-center w-full py-1 mb-4 text-white bg-teal-600 rounded font-roboto md:hidden"
                >
                    {!open ? "Close Menu" : "Open Menu"}
                </button>
                <Outlet />
            </div>
        </div>
    );
}

export default Dashboard;
