'use client'

import { useState } from "react"

import MobileNavbar from "./MobileNavbar"
import Navbar from "./Navbar"

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-slate-900">
      <Navbar
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <MobileNavbar
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </header>
  )
}

export default Header;