import React from 'react'
import { Menu } from 'semantic-ui-react'

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <Menu inverted fluid>
        <Menu.Item>
          <Link to ='/'>Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/AboutUs'>About Us</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/Login'>Login</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to='/SignUp'>Sign Up!</Link>
        </Menu.Item>
      </Menu>
    )
  }

  export default Navbar