'use client'

import { useState } from "react"

import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const socMedLinks = {
    twitter: "add link here",
    instagram: "https://www.instagram.com/doodlesbypost/",
    facebook: "https://www.facebook.com/punyashree.shetty",
    linkedin: "https://www.linkedin.com/in/punyashree-shetty-862029102/",
  }

  return (
    <header className="bg-slate-900">
      <Navbar
        setMobileMenuOpen={setMobileMenuOpen}
        socMedLinks={socMedLinks}
      />
      <MobileNavbar
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
        socMedLinks={socMedLinks}
      />
    </header>
  )
}

export default Header;