import React from 'react'
import { HiArrowCircleUp } from "react-icons/hi"

function GoTop() {

    return (
        <>
            <button
                onClick={() => {
                    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
                }}
                style={{
                    position: "fixed",
                    padding: "1rem 1rem",
                    fontSize: "20px",
                    bottom: "40px",
                    right: "40px",
                    backgroundColor: "#7EA0FF",
                    color: "#fff",
                    textAlign: "center",
                    borderRadius: "50%"
                }}
            >
                <HiArrowCircleUp />
            </button>
        </>
    )
}

export default GoTop