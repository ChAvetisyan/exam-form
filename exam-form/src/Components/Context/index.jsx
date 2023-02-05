import React, { useContext, useState} from "react";
import { createContext } from "react";

const myContext = createContext();

const AppProvider = ({ children }) => {
    const [info, setInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        file: ""
    })

    const [profiles, setProfiles] = useState([]);
    const [button, setButton] = useState(false);
    const [id, setId] = useState();

    return (
        <myContext.Provider value={
            {
                info, setInfo,
                profiles, setProfiles,
                button, setButton,
                id, setId
            }
        }>
            {children}
        </myContext.Provider>
    );
}

const useGlobalContext = () => {
    return useContext(myContext)
}

export { AppProvider, useGlobalContext }