import React, { useState } from "react";
import axios from "axios";
import { IcRegister } from '../../assets';
import './register.css'

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [alert, setAlert] = useState("");
    const [error, setError] = useState("");

    const onChangeUsername = (e) => {
        const value = e.target.value;
        setUsername(value);
        setError("");
    };

    const onChangeEmail = (e) => {
        const value = e.target.value;
        setEmail(value);
        setError("");
    };

    const onChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value);
        setError("");
    };

    const klikDaftar = () => {
        const data = {
            username: username,
            email: email,
            password: password,
        };
        axios
            .post("v1/users/register", data)
            .then((res) => {
                
                if (res) {
                    localStorage.setItem("firstLogin", true);
                    window.location.href = "/account"

                    if (res.data) {
                        setUsername("");
                        setEmail("");
                        setPassword("");
                        setAlert(res.data.message);
                        setTimeout(() => {
                            setAlert("");
                        }, 3000);
                    }
                }
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    };

    return (
        <>
            <div className="register-wrapper">
                <div className="form-wrapper">
                    <div className="register-icon">
                        <h3>Daftar</h3>
                        <img src={IcRegister} alt="" />
                    </div>
                    {error && (
                        <div className="alert alert-danger" style={{ marginTop: "5px" }}>
                            <p>{error}</p>
                        </div>
                    )}
                    {alert && (
                        <div className="alert alert-primary" style={{ marginTop: "5px" }}>
                            <p>{alert}</p>
                        </div>
                    )}
                    <label htmlFor="username">
                        Username *
                    </label>
                    <input
                        type="text"
                        value={username}
                        onChange={onChangeUsername}
                    />
                    <label htmlFor="email">E-mail *</label>
                    <input
                        type="text"
                        value={email}
                        onChange={onChangeEmail}
                    />
                    <label htmlFor="password">Password *</label>
                    <input
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                    />
                    <button type="submit" onClick={klikDaftar}>
                        Daftar
                </button>
                </div>
            </div>
        </>
    );
};

export default Register;
