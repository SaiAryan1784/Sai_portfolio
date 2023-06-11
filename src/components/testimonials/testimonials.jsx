import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar01.jpg'
import AVTR2 from '../../assets/avatar02.jpg'
import AVTR3 from '../../assets/avatar03.jpg'
import AVTR4 from '../../assets/avatar04.jpg'

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients - Be the first one</h5>
      <h2>Testimonials</h2>

      <div className="container testimonials__container">
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar 01" />
            <h5 className='client__name'>THE ROCK</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam vel aspernatur, explicabo consequuntur eos numquam fugit ullam. Eius esse incidunt officiis cum.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar 01" />
            <h5 className='client__name'>THE ROCK</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam vel aspernatur, explicabo consequuntur eos numquam fugit ullam. Eius esse incidunt officiis cum.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar 01" />
            <h5 className='client__name'>THE ROCK</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam vel aspernatur, explicabo consequuntur eos numquam fugit ullam. Eius esse incidunt officiis cum.
            </small>
          </div>
        </article>
        <article className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="avatar 01" />
            <h5 className='client__name'>THE ROCK</h5>
            <small className="client__review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque aperiam vel aspernatur, explicabo consequuntur eos numquam fugit ullam. Eius esse incidunt officiis cum.
            </small>
          </div>
        </article>
      </div>
    </section>
  )
}

export default testimonials