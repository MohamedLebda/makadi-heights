import React from 'react'
import {Header} from "./sections/header"
import {Navbar} from "./sections/nav-bar"
import {About} from "./sections/about"
import {Contact} from "./sections/contact"
import { HeaderProvider } from './context/headerContext/HeaderContext'; 


const App = () => {
  return (
    <HeaderProvider>
    <main>
        <Navbar />
        <Header />
        <About />
        <Contact />       
    </main>
    </HeaderProvider>
  )
}

export default App