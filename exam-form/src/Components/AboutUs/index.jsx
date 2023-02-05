import React, { useState } from "react";
import "./index.css";
import ProfPic from "../../Assets/Images/prof.jpg";
import Facebook from "../../Assets/Icons/fb.png";
import Instagram from "../../Assets/Icons/ig.png";

export const AboutUs = () => {

    const [profile] = useState({
        name: "Kristine",
        surname: "Avetisyan",
        position: "Trainee",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quaerat nemo magni placeat reprehenderit. Labore ipsam nam sapiente eos dolore animi neque, id officiis expedita atque magnam nobis saepe, perspiciatis mollitia distinctio deleniti vero velit aliquid. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ea veritatis animi libero earum. Quos atque placeat reprehenderit? Harum neque, aut iure nulla repellat voluptatibus esse animi, cumque laudantium porro quo voluptatem dicta repudiandae fugit exercitationem est culpa eos quas. Delectus, ducimus. Eos, fugit adipisci sint necessitatibus sed veniam expedita, numquam quis fuga optio ratione, reprehenderit rem architecto eveniet asperiores aspernatur. Ducimus ipsa earum, molestias doloremque nemo nisi eius eum perspiciatis reprehenderit.",
        contacts: [
            {
                icon: Facebook,
                name: "Facebook",
                link: "https://www.facebook.com"
            },
            {
                icon: Instagram,
                name: "Instagram",
                link: "https://www.instagram.com"
            },
        ]
    })
    return (
        <div className="container">
            <div className="aboutus">
                <div className="info">
                    <img src={ProfPic} alt="img" />
                    <h3>{profile.name} {profile.surname}</h3>
                    <p>{profile.position}</p>
                    <div className="contacts">
                        {profile.contacts.map((icon, index) => {
                            return <div key={index}>
                                <a href={icon.link}><img src={icon.icon} alt={icon.name} /></a>
                            </div>
                        })}
                    </div>
                </div>
                <div className="desc">
                    <p className="description">{profile.description}</p>
                </div>
            </div>
        </div>
    );
}