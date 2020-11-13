import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IcLogin } from '../../assets';
import './login.css'

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

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

    const loginSubmit = async () => {
        const data = {
            email: email,
            password: password,
        };
        await axios
            .post("/v1/users/login", data)
            .then((res) => {
                // console.log(res.data)
                if (res) {
                    localStorage.setItem("firstLogin", true);
                    window.location.href = "/shop"
                }
            })
            .catch((err) => {
                setError(err.response.data.message);
            });
    };

    return (
        <>
            <div className="login-wrapper" >
                <div className="form-wrapper">
                    <div className="login-icon">
                        <h3>Masuk</h3>
                        <img src={IcLogin} alt="" />
                    </div>
                    {error && (
                        <div className="alert-danger" style={{ marginTop: "5px" }}>
                            <p>{error}</p>
                        </div>
                    )}
                    <label htmlFor="email">email *</label>
                    <input
                        type="text"
                        value={email}
                        onChange={onChangeEmail}
                    />

                    <label htmlFor="password">
                        Password *
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={onChangePassword}
                    />

                    <Link to="/lupa-password"><p>Lupa Password ?</p></Link>

                    <button type="submit" onClick={loginSubmit}>
                        Masuk
                    </button>
                </div>
            </div>
        </>
    );
};

export default Login;
