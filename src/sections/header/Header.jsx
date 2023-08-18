import "./header.css"
import HeaderImg from '../../assets/header-img.png'
import { useRef, useEffect } from "react"
import { useHeader } from "../../context/headerContext/HeaderContext"

const Header = () => {
  const headerRef = useRef(null)
  const { setHeaderHeight } = useHeader();
  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.clientHeight); 
    }
  }, [headerRef, setHeaderHeight]);
  
  return (
    <header id="header" ref={headerRef}>
      <div className="container header__container">
        <img src={HeaderImg} alt="header" className="header__img" />
        <div className="header__info">
          <h3>The Place </h3>
          <h3>we call home</h3>
          <p>Makadi Heights is a town built over 3.4 million square meters planned for development, with an elevation reaching 78 meters above sea level guaranteeing magnificent panoramic sea views residential units. 
          Envisioned as a comprehensive town.</p>
          <div className="header__cta">
            <button className="btn primary">DOWNLOAD BROCHURE</button>
            <button className="btn primary">SHOW MASTER PLAN</button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header