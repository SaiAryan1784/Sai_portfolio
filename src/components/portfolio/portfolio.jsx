import React from 'react'
import './portfolio.css'

const portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        <article className="portfolio__item">

          <div className="portfolio__item-image"></div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com/SaiAryan1784/Sai_portfolio" className='btn'>Github</a>
          <a href="https://github.com/SaiAryan1784/Sai_portfolio" className='btn'>Github</a>

        </article>

      </div>

    </section>
  )
}

export default portfolio