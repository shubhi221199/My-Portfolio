import React from 'react'
import '../../pages/style.css';
import { Container } from 'react-bootstrap'

function Contactpage() {
  return (
    <div className='contactbackground'>
      <Container>
        <h2 className='contacthead'>Get In Touch</h2>
        <p className='contactpara'> I’m currently searching for opportunities for a MERN Stack developer role. <br /> If there is any vacancy my inbox is always open. Whether <br /> you have any further questions or just want to say hi, <br /> I’ll try my best to get back to you!</p>
        <button
          className='contactbtn'
          onClick={() => {
            window.open("http://shubhisharma4u@gmail.com");
          }}
        >Say Hello</button>
        <span></span>
        <hr className='line' />
        <p className='copyright'>© Copyright 2023.
        <br /> 
        Designed & Built by <span>shubhisharma</span></p>
      </Container>
    </div>
  )
}

export default Contactpage