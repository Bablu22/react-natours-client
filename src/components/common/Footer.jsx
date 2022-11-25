import React from 'react'
import image from "../../images/logo2.png"
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs"

function Footer() {
    return (
        <div>
            <footer className="text-center text-white bg-gray-900" >
                <div className="container p-6">
                    <div className="">
                        <div className="flex items-center justify-between">
                            <img src={image} alt="" />
                            <div className='flex items-center justify-center space-x-4 md:space-x-8'>
                                <BsFacebook />
                                <BsInstagram />
                                <BsTwitter />
                                <BsYoutube />
                                <BsLinkedin />
                            </div>
                        </div>

                    </div>
                </div>

                <div className="p-4 text-center bg-gray-800 font-josefin">
                    © 2022 Copyright: Bablu Mia
                </div>
            </footer>
        </div>
    )
}

export default Footer