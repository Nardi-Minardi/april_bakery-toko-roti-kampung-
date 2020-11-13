import React from 'react';
import { Login, Register } from '../../components';
import './account.css';

const Account = () => {
    return (
        <>
        <p style={{marginTop:"80px", textAlign: "center", fontSize: "150%", opacity: "0.6"}}>Data lengkap anda akan membantu kami mempermudah proses order<br></br>
         dan, bisa digunakan untuk login kembali ke website kami.
        </p>
            <div className="account-wrapper">

                <Login />
                <Register />
            </div>
        </>
    )
}

export default Account;