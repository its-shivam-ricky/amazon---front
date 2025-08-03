import React from 'react'
import './navbarBanner.css'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const NavbarBanner = () => {
  const options = [
    { "name": "Fresh" },
    { "name": "Amazon miniTV" },
    { "name": "MX Player" },
    { "name": "Sell" },
    { "name": "Best Sellers" },
    { "name": "Today's Deals" },
    { "name": "Mobiles" },
    { "name": "Electronics" },
    { "name": "Prime" },
    { "name": "New Releases" },
    { "name": "Amazon Pay " },
    { "name": "Customer Service" },
    { "name": "Fashion" },
    { "name": "Home & Kitchen" },
    { "name": "Computer" },
    { "name": "Book" },
  ]

  /* This is the item section */

  return (
    <div className="navbarBanner">
      <div className="navbarBannerOptionsLeft">

        <div className='optionsNavbarBanner'>
          < MenuIcon sx={{ fontSize: 30 }} />
          <div className='allOptionsNavbarBanner'>All</div>
        </div>

        {
          options.map((option, index) => {
            return (
              <Link to={'/Products'} key={index} className='optionsNavbarBanner'>
                <div className='allOptionsNavbarBanner'>{option.name}</div
                ></Link>
            );
          })
        }


      </div>

      <div className="navbarBannerRightSide">
        <img src="https://m.media-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/Feb2025/SuzhalTheVortexS2/400x39-SWM_NP._CB548561211_.jpg" alt='amazonPrime Logo' />
      </div>
    </div>
  )
}

export default NavbarBanner