import '../styles/home.css'
import {Image} from 'semantic-ui-react'

const Home = () => {
    return (
        <div className='hero'>
            <div className="title">
                <h1>Financial Advisor</h1>
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </div>
            <Image className="hero-image" src='/images/money.jpg' size='large' />
        </div>
    )
}

export default Home