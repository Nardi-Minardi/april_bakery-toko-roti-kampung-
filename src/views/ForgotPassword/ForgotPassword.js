import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');  
    const [alert, setAlert] = useState('');

    const changeEmail = (e) =>{  
        setEmail(e.target.value)
        setError('')
    }

    const kirim = () => {
        if(!email) {
            setError('Silahkan masukan email');
        } else {
            axios.put('http://localhost:3001/forgotpassword', {email: email})
            .then(res => {
                setEmail('')
                setAlert('Silahkan cek email anda')
                setTimeout(() => {
                    setAlert('')
                }, 3000)
            })
        }
    }

    return (
        <div style={{marginTop: "100px", marginBottom: "100px"}}>
            <div className="container">
                
                <div className="row justify-content-center">
                
                <div className="col-md-12 col-lg-6 col-12">
                <div className="card p-4">
                    <div className="card-body">
                        {error && (
                            <div className="alert-danger">
                                <p>{error}</p>
                            </div>
                        )}

                        {alert && (
                            <div className="alert-primary">
                                <p>{alert}</p>
                            </div>
                        )}
                        <div className="form-group">
                            <label htmlFor="username" className="form-label">
                                E-mail *
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Masukan e-mail yang terdaftar"
                                value={email}
                                onChange={changeEmail}
                            />
                        </div>
                        <Link to="/account">Kembali</Link>
                        <div className="text-right">
                            <button className="btn btn-primary" onClick={kirim}>Kirim</button>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
