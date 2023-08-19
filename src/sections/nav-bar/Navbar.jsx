import React, { useState, useEffect } from 'react';
import { useHeader } from '../../context/headerContext/HeaderContext';
import axios from 'axios';
import './navbar.css'; 
import logo from '../../assets/LOGOWhite_EN.png';
import phone from '../../assets/phone.png';
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
  const [weather, setWeather] = useState(null);
  const [changeNavbarColor, setChangeNavbarColor] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [toggleNavbar, setToggleNavbar] = useState(false);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(
          'https://api.openweathermap.org/data/2.5/weather?lat=26.96546281915211&lon=33.883077697384714&appid=f1130b3524feefd0549671bf69edc578'
        );
        const data = response.data;
        setWeather(data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    
    fetchWeatherData();
  }, []);
  
  const { headerHeight } = useHeader();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      currentScrollY > headerHeight? setChangeNavbarColor(true) : setChangeNavbarColor(false);
      currentScrollY > prevScrollY? setToggleNavbar(true) : setToggleNavbar(false);
      setPrevScrollY(currentScrollY)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  },[headerHeight, prevScrollY])


  return (
    <nav className={`navbar ${changeNavbarColor ? 'bg-color' : ''} ${toggleNavbar? 'navbar-hide': ''}`}>
      <div className="left">
        <img src={logo} alt="logo"  className='logo'/>
      </div>
      <div className="right">
        <div className="weather">
          {weather && (
            <>
              <img src = {`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt="weather-icon" className="weather-icon" />
              <p>{Math.round(weather.main.temp - 273.15)}°C</p>
            </>
          )}
        </div>
      
        <img src={phone} alt="phone" className="phone" />
        <button>Book Now</button>
        <div className="menu">
          <p>Menu</p>
          <RxHamburgerMenu className="burger-icon" />
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar;
