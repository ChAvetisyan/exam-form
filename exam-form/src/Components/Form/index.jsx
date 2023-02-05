import React from "react";
import "./index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../Context";
import { PostUsers } from "../../Platform/Api";


export const Form = () => {
    const navigate = useNavigate()

    const [inputs] = useState([
        {
            name: "firstName",
            label: "First name"
        },
        {
            name: "lastName",
            label: "Last name"
        },
        {
            name: "email",
            label: "Email"
        },
        {
            name: "password",
            label: "Password"
        },
        {
            name: "confirmPassword",
            label: "Confirm password"
        }])

    const { info, setInfo, profiles, setProfiles, setButton } = useGlobalContext();

    const [error, setError] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        file: ""
    });

    const change = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    }

    const validation = (e) => {
        let valid = true

        const errors = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            file: ""
        };

        if (!info.firstName) {
            errors.firstName = "First name is required";
            valid = false
        } else {
            let match = info.firstName.match(/[A-z]([a-z]{2,})/);
            if (match) {
                if (match[0] !== info.firstName) {
                    errors.firstName = "First name is required";
                    valid = false
                }
            } else {
                errors.firstName = "First name is required";
                valid = false
            }
        }

        if (!info.lastName) {
            errors.lastName = "Last name is required";
            valid = false
        } else {
            let match = info.lastName.match(/[A-z]([a-z]{2,})/);
            if (match) {
                if (match[0] !== info.lastName) {
                    errors.lastName = "Last name is required";
                    valid = false
                }
            } else {
                errors.lastName = "Last name is required";
                valid = false
            }
        }

        if (!info.email) {
            errors.email = "Email is required";
            valid = false
        } else {
            let match = info.email.match(/[A-z\d-_]+@[a-z]+.[a-z]{2,}/);
            if (match) {
                if (match[0] && match[0] !== info.email) {
                    errors.email = "Email is required";
                    valid = false
                }
            } else {
                errors.email = "Email is required";
                valid = false
            }
        }
        if (!info.password) {
            errors.password = "Password is required";
            valid = false
        } else {
            let match = info.password.match(/[A-z]{6,14}/);
            if (match) {
                if (match[0] !== info.password) {
                    errors.password = "Password should contain min 6 characters";
                    valid = false
                } else {
                    errors.email = "Email is required";
                    valid = false
                }
            }
        }

        if (!info.confirmPassword) {
            errors.confirmPassword = "Password confirmation is required";
            valid = false
        } else {
            if (info.confirmPassword !== info.password) {
                errors.email = "Passwords do not match";
                valid = false
            }
        }
        if (true) {
            setProfiles([...profiles, info])
            Users() 
            setButton(true)

        }
        setError(errors);
        return true
    }

    const Users = async (e) => {
        e.preventDefault();

        if (validation()) {
            const result = await PostUsers(info)
            if (result) {
                setProfiles([profiles, result.data])
                localStorage.setItem("id", result.data._id)
                navigate("/profiles")
            } else {
                console.log("Error")
            }
        }
    }

    const changeFile = (e) => {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(e.target.files[0])
        fileReader.onload = function (event) {
            setInfo({ ...info, file: event.target.result })
        }
    }

    return (
        <div className="container">
            <div className="form">
                {inputs.map((elem, index) => {
                    return <div key={index} className="inputs">
                        <p className={error[elem.name] ? "red" : null}>{error[elem.name] ? error[elem.name] : elem.label}</p>
                        <input className={error[elem.name] ? "redBorder" : null} onChange={change} name={[elem.name]} placeholder={elem.label} />
                    </div>
                })}
            </div>
            <div className="bottom">
                <div className="file">
                    <p className={error.file ? "red" : null}>{error.file ? error.file : "Choose file"}</p>
                    <input type="file" name="file" accept="image/*,.png,.jpg,.web," onChange={changeFile} />
                </div>

                <button onClick={Users} className="formButton">Save Changes</button>
            </div>
        </div>
    );
}
