import React from 'react'
import "./Banner.css"

const Banner = () => {

    const truncate = (string, n) => {
        return string?.length > n ?
            string.substr(0, n - 1) + "..." :
            string;
    }
    return (
        <section className='banner' style={{
            backgroundSize: "cover",
            backgroundImage: `url('https://i.etsystatic.com/13246776/r/il/fd37a9/1948443874/il_570xN.1948443874_7yfo.jpghttps://i.etsystatic.com/13246776/r/il/fd37a9/1948443874/il_570xN.1948443874_7yfo.jpg')`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className='banner__title'>Movie</h1>
                <div className="banner__buttons">
                    <button className='banner__button' >Play</button>
                    <button className='banner__button' >My List</button>
                </div>
                <h1 className="banner__description">
                    {truncate('This is ', 150)}
                </h1>
            </div>
            <div className="banner__fadeBottom">

            </div>
        </section>
    )
}

export default Banner