import React from 'react'
import WorkPortfolio from './WorkPortfolio'
import PortfolioCards from './PortfolioCards'
import WorkContactUs from './WorkContactUs'

function WorkMain() {
  return (
    <>
    <div className="contain" data-aos="fade-left  ">
    <WorkPortfolio />
    <PortfolioCards />
    <WorkContactUs />
    </div>
    </>
)
}

export default WorkMain