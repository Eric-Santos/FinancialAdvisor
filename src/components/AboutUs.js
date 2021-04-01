import {Image} from 'semantic-ui-react'
import '../styles/aboutus.css'

const AboutUs = ()=>{
    return (
        <div className='about-hero'>
            <div className="about-title">
             <h1>About Us</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </div>
        <Image className="about-image" size='huge' alt='thunder storm' src='/images/city.webp'  />
    </div>
    )
}

export default AboutUs