import React from "react";
import Footer from "../components/common/Footer";
import About from "../components/Home/About";
import Banner from "../components/Home/Banner";
import Tours from "../components/Home/Tours";

function Home() {
    return (
        <div className="">
            <Banner />
            <div className="container p-4 mx-auto my-20 md:p-10">
                <Tours />
                <About />
            </div>
            <Footer />
        </div>
    );
}

export default Home;
