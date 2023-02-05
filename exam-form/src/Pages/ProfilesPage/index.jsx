import React from "react";
import { Footer } from "../../Components/Footer";
import { Header } from "../../Components/Header/index";
import { Data } from "../../Components/Data"

export const ProfilesPage = () => {
    return <div className="homepage">
        <Header />
        <Data />
        <Footer/>
    </div>
}