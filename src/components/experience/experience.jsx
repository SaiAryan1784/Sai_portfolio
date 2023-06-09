import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">

        <div className="experience__frontend">

          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className='experience__details'>

              <BsPatchCheckFill/>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill/>
              <h4>CSS</h4>
              <small className='text-light'>Intermediate</small>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill/>
              <h4>JavaScript</h4>
              <small className='text-light'>Beginner</small>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill/>
              <h4>React</h4>
              <small className='text-light'>Beginner</small>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill/>
              <h4>Tailwind</h4>
              <small className='text-light'>Beginner</small>

            </article>
          </div>
        </div>
{/* ==================frontend end====================== */}
        <div className="experience__cp">
          
          <h3>Competitive Programming</h3>

          <div className="experience__content">
            <article className='experience__details'>

              <BsPatchCheckFill/>
              <h4>C</h4>
              <small className='text-light'>Experienced</small>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill/>
              <h4>C++</h4>
              <small className='text-light'>Intermediate</small>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill/>
              <h4>Python</h4>
              <small className='text-light'>Intermediate</small>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill/>
              <h4>Python-Numpy</h4>
              <small className='text-light'>Intermediate</small>

            </article>
            <article className='experience__details'>

              <BsPatchCheckFill/>
              <h4>Python-Pandas</h4>
              <small className='text-light'>Beginner</small>

            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default experience