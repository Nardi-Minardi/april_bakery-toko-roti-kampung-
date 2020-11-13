import React, { useContext } from 'react';
import { GlobalState } from '../../GlobalState';
import { ProductCards } from '../../components';
import { Carousel, Spinner } from 'react-bootstrap';
import { bg4, bg2, bg3 } from '../../assets';
import './home.css';

const Home = () => {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    // const { products } = this.state;
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>INDONESIAN QUALITY</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg3}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>PROFESIONAL</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>MOST LOCAL</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="home-wrapper">
                <h5>Selamat Datang di Toko April'Bakery</h5>
                <br></br>
                <p> Apa yang terlintas ketika Anda ingat roti lokal indonesia?</p>
                <p>Mayoritas pasti menjawab ‘murah dan sehat untuk di konsumsi’.</p>
                <br></br>
                <p>
                    Betul, roti lokal indonesia tidak hanya murah, roti lokal juga
                    sehat bernutrisi untuk di konsumsi. Rasanya mengingatkan kita
                    untuk jajanan saat kecil di warung.
                </p>
                <p>
                    {" "}
                            Sebagai pionir toko roti di indonesia, April's Bakery selalu
                            berusaha menjaga konsistensi produk dan layanan berkualitas
                            setiap harinya.
                            </p>{" "}
                <br></br>
                <p>
                    {" "}
                            Kami percaya, ketekunan dan kedisiplinan yang menjadi latar
                            belakang kami dalam menciptakan pilihan produk spesial khas roti
                            lokal indonesia,
                            </p>{" "}
                <p>
                    adalah standar yang tidak bisa ditawar lagi. Selamat menikmati
                    roti lokal citarasa Indonesia khas April's Bakery.
                             </p>
                <br></br>
                <p> Selamat berbelanja online di</p>
                <br></br>
                <span>April's-Bakery.com…</span>
            </div>
            <div className="card-paginate-wrapper">
                <div className="card-paginate-wrapper">
                    {/* jika products nya ga ada tampilin loading */}
                    {
                        products.length < 1 && <Spinner style={{ width: '3rem', height: '3rem' }} color="danger" />
                    }

                    {/* jika products ada tampilin */}
                    {
                        products && products.map(item => {
                            return <ProductCards
                                key={item._id}
                                products={item}
                            />
                        })
                    }
                </div>
            </div>

        </>
    )
}


export default Home

