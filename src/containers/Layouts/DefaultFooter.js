import React from 'react';
import { IcFacebook, IcInstagram, IcYoutube } from '../../assets';
import '../footer.css';

const DefaultFooter = () => {
    return (
        <>
            <footer className="footer-wrapper">
                <div className="map-wrapper">
                    <p>Jl. Bahari 2, No.25, Gandaria Selatan,<br></br> Cilandak, Jakarta Selatan<br></br>Telepon 0877-8329-6645</p>
                </div>
                <div className="copyright">
                    <p>
                        All Right Serve <br></br>
                        © April's Bakery®<br></br>
                        Develop By Minardi <br></br>
                    </p>
                </div>
                <div className="social-icon">
                    <img src={IcFacebook} alt="facebook" />
                    <img src={IcInstagram} alt="instagram" />
                    <img src={IcYoutube} alt="youtube" />
                </div>
            </footer>
        </>
    )
}

export default DefaultFooter;
