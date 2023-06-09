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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus magnam eum omnis neque facilis labore modi quo quis, dicta, excepturi assumenda voluptatum deleniti porro quibusdam magni? Exercitationem dolorem adipisci pariatur fugiat temporibus, explicabo soluta?
          </p>

          <a href="#contact" className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about