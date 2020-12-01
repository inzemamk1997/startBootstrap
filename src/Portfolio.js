import React from "react"
import PortfolioItem from "./PortfolioItem" 
import cabin from "./assets/img/portfolio/cabin.png"
import cake from "./assets/img/portfolio/cake.png"
import circus from "./assets/img/portfolio/circus.png"
import game from "./assets/img/portfolio/game.png"
import safe from "./assets/img/portfolio/safe.png"
import submarine from "./assets/img/portfolio/submarine.png"

//const cabindt = "#portfolioModal1";
const Portfolio=()=>(
    <section className="page-section portfolio" id="portfolio">
        <div className="container">
            {/*<!-- Portfolio Section Heading-->*/}
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
            {/*<!-- Icon Divider-->*/}
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            {/*<!-- Portfolio Grid Items-->*/}
            <div className="row justify-content-center">
                <PortfolioItem dataTarget = "#portfolioModal1" imageName={cabin}/>
                <PortfolioItem dataTarget = "#portfolioModal2" imageName={cake}/>
                <PortfolioItem dataTarget = "#portfolioModal3" imageName={circus}/>
                <PortfolioItem dataTarget = "#portfolioModal4" imageName={game}/>
                <PortfolioItem dataTarget = "#portfolioModal5" imageName={safe}/>
                <PortfolioItem dataTarget = "#portfolioModal6" imageName={submarine}/>
            </div>
        </div>
   </section>
);

export default Portfolio;