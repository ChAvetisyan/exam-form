import React from "react";
import { AboutUs } from "../../Components/AboutUs/index";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header/index";

export const HomePage = () => {
    return <div className="homepage">
        <Header />
        <AboutUs />
        <Footer />
    </div>
}