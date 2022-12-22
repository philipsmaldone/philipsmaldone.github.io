import React from 'react'
import './Pages.css'
import ContactButton from '../components/ContactButton/contactButton'
import Portrait from '../images/windowsBackground.jpg'
import CaptionedImages from '../components/CaptionedImage/CaptionedImage'

const HomePage = () => {
  return (
        <>
        <h1>Philip Smaldone</h1>
        <p>I&apos;m a Designer</p>
        <CaptionedImages image={Portrait} alt="Exmaple Portrait" maxHeight={72}/>

        <br></br>
        <h1>Contact</h1>
        <ContactButton/>
        </>
  )
}

export default HomePage
