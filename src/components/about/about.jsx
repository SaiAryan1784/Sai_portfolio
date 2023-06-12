import React from 'react'
import './about.css'
import ME from '../../assets/dp22.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Experience</h5>
              <small>6 Months Working </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>2 - Ongoing :-| </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>4+ Completed :'\ </small>
            </article>
          </div>

          <p>
          My name is Sai Aryan Goswami. I am curently an First Year Undergrad at ABES Engg. College . Now, I am looking for my first Internship. I have been learning Web Development from over 6 months now, i have created websites using HTML, CSS, JS and ReactJS. I have been working as a freelance Frontend Developer for the last 2-3 months and cooperated with several individuals. I know that I can provide a fresh take and an extraordinary approach to every project. I am always open to challenges and constructive feedback. I am open-minded and learn new things quickly. I want to become a team player and dedicate all my skills and talents to develop high-quality and unique products.
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about