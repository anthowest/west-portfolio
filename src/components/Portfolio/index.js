import React, { useEffect, useState } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import portfolioData from '../../data/portfolio.json'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    setTimeout(() => {setLetterClass('text-animate-hover')}, 4000)

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img 
                                src={port.cover}
                                className="porfolio-image"
                                alt="portfolio"
                                />
                                <div className="content">
                                    <p className="title">{port.title}</p>
                                    <h4 className="description">{port.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url)}
                                    >View Code</button> {" "}
                                    <button
                                        className="btn"
                                        onClick={() => window.open(port.url2)}
                                    >Live Site</button>
                                </div>

                            </div>
                        )
                    })
                }
            </div>
        )
    }

    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolioData.portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Portfolio