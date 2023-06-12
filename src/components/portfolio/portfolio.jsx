import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolioproj.png'
import IMG2 from '../../assets/firstproj.png'
import IMG3 from '../../assets/htmlcssproj.png'
import IMG4 from '../../assets/jsproj.png'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Portfolio using React',
    github: "https://github.com/SaiAryan1784/Sai_portfolio",
    demo: "https://saiaryan1784.github.io/Sai_portfolio/"
  },
  {
    id: 2,
    image: IMG2,
    title: 'First Project ',
    github: "https://github.com/SaiAryan1784/cartoon-hero",
    demo: "https://saiaryan1784.github.io/cartoon-hero/"
  },
  {
    id: 3,
    image: IMG3,
    title: 'HTML CSS Project',
    github: "https://github.com/SaiAryan1784/GYM-JIM",
    demo: "https://saiaryan1784.github.io/GYM-JIM/"
  },
  {
    id: 4,
    image: IMG4,
    title: 'First Project using JS',
    github: "https://github.com/SaiAryan1784/js-first-project",
    demo: "https://saiaryan1784.github.io/js-first-project/"
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

        {
          data.map(({id, image, title, github, demo}) => {
            return(
              <article key={id} className="portfolio__item">

          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          
          <h3>{title}</h3>

          <div className="portfolio item-cta">
          <a href={github} className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>

        </article>
            )
          })
        }
        
      </div>

    </section>
  )
}

export default portfolio