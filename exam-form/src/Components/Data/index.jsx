import React, { useEffect } from "react";
import { GetUser, GetUsers } from "../../Platform/Api";
import { useGlobalContext } from "../Context";
import Avatar from "../../Assets/Images/Avatar.png";
import "./index.css";

export const Data = () => {

    const { profiles, setProfiles, id, setId } = useGlobalContext();

    useEffect(() => {
        let s = localStorage.getItem("id")
        if (s) {
            setId(s)
        }
        Get()
    }, [id])

    const GetAll = async () => {
        const result = await GetUsers()
        if (result) {
            setProfiles([...result.data])
        }
    }

    const Get = async () => {
        const result = await GetUser(id)
        if (result) {
            setProfiles([result.data])
        }
    }

    return (<div className="container">
        <div className="buttons">
            <button onClick={GetAll}>Select all profiles</button>
            <button onClick={Get}>Select last profile</button>
        </div>
        <div className="profileData">
            {profiles.length !== 0 ? profiles.map((element, index) => {
                return <div className="data" key={index}>
                    <div className="avatar">
                        <img src={element.file ? element.file : Avatar} alt="img" />
                    </div>
                    <div className="info_list">
                        <h3>{element.firstName} {element.lastName}</h3>
                        <p>{element.email}</p>
                    </div>
                </div>
            }) : <h2>No profiles found</h2>
            }
        </div>
    </div>
    )
}
