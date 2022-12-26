import React from 'react'
import '../Nav/nav.css'
import Logo from '../../assets/images/GoldenLight Schools Logo 2.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'


const nav = () => {
  return (
    <div className="nav__container">
          <div className="img__logo">
              <img src={Logo} alt="" />

          </div>
          <div className="content__container">

            <div className="up__container">
            <div className="logo__container">
                <p>Golden Light <span className='blue'>Schools Ota</span> </p>
            </div>
            <a href="./login_form" target="_blank">Login</a>
        </div>

        <ul className="nav__content">
          <li><a href="#"  className='active call'>Home</a></li>
          <li><a href="#">Blog</a></li>
          <li>
          <div className="dropdown">
            <a href="#" className='call'>Inquires<ArrowDropDownIcon /></a>
              <div className="dropdown-content">
                <a rel="noopener" target="_blank" href="#">School Fees</a>
                <a rel="noopener" target="_blank" href="#">Classes</a>
                <a rel="noopener" target="_blank" href="#">Subjects</a>
                <a rel="noopener" target="_blank" href="#"></a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
            <a href="#" className='call'>Portal<ArrowDropDownIcon /></a>
              <div className="dropdown-content">
                <a rel="noopener" target="_blank" href="#">Studen Login</a>
                <a rel="noopener" target="_blank" href="#">Workers Login Login</a>
                <a rel="noopener" target="_blank" href="#">Library Login Login</a>
                <a rel="noopener" target="_blank" href="#">payment Login Login</a>
              </div>
            </div>
            
          </li>
          <li>
          <div className="dropdown">
            <a href="#" className='call'>News & Events<ArrowDropDownIcon /></a>
              <div className="dropdown-content">
                <a rel="noopener" target="_blank" href="#">Studen Login</a>
                <a rel="noopener" target="_blank" href="#">Workers Login Login</a>
                <a rel="noopener" target="_blank" href="#">Library Login Login</a>
                <a rel="noopener" target="_blank" href="#">payment Login Login</a>
              </div>
            </div>
            </li>
          <li><a href="#">Gallary</a></li>
          <li><a href="#">About</a></li>
        </ul>
          </div>

        
    </div>
  )
}

export default nav