import { useState, useEffect } from "react"
import Wrapper from "./Wrapper"
import ProfilePopUp from "./ProfilePopUp"

import Link from "next/link"
import Menu from "./Menu"
import MobileMenu from "./MobileMenu"

import { FiUser } from "react-icons/fi"
import { FiHeart } from "react-icons/fi"
import { BsCart3 } from "react-icons/bs"
import { BiMenuAltRight } from "react-icons/bi"
import { VscChromeClose } from "react-icons/vsc"
import { FiSearch } from "react-icons/fi"

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showCatMenu, setShowCatMenu] = useState(false)
  const [showProfilePopUp, setShowProfilePopUp] = useState(false)
  const [show, setShow] = useState("translate-y-0")
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]")
      } else {
        setShow("shadow-sm")
      }
    } else {
      setShow("translate-y-0")
    }
    setLastScrollY(window.scrollY)
  }

  const handleClickOutside = (e) => {
    if (
      e.target.closest(".account-menu") === null &&
      e.target.closest(".profile-picture") === null
    ) {
      setShowProfilePopUp(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar)
    return () => {
      window.removeEventListener("scroll", controlNavbar)
    }
  }, [lastScrollY])

  useEffect(() => {
    document.addEventListener("click", handleClickOutside)
    return () => {
      document.removeEventListener("click", handleClickOutside)
    }
  })

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center relative">
        <Link href="/">
          <img src="/logo.png" className="w-[40px] md:w-[60px] z-10" />
        </Link>

        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />

        {mobileMenu && (
          <MobileMenu
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        {/* FiUser */}

        <div className="flex items-center gap-2 text-black">
          <div className="relative text-gray-800 hidden lg:block">
            <input
              type="search"
              name="search"
              placeholder="Search"
              className="bg-[#f8fafc] h-14 lg:min-w-[250px] xl:min-w-[350px]  px-5 pr-10 rounded-full text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-0 top-[4px] mt-3 mr-4"
            >
              <FiSearch className="text-[20px] md:text-[25px]" />
            </button>
          </div>
          <button
            onClick={() => setShowProfilePopUp(!showProfilePopUp)}
            // onMouseEnter={() => setShowProfilePopUp(true)}
            // onMouseLeave={() => setShowProfilePopUp(false)}
            className="account-menu relative"
          >
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer">
              <FiUser className="text-[20px] md:text-[24px]" />
            </div>
            {showProfilePopUp && <ProfilePopUp />}
          </button>
          {/* Icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
            <FiHeart className="text-[19px] md:text-[24px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
              51
            </div>
          </div>
          {/* Icon end */}

          {/* Icon start */}
          <Link href="/cart">
            <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative">
              <BsCart3 className="text-[20px] md:text-[24px]" />
              <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]">
                21
              </div>
            </div>
          </Link>
          {/* Icon end */}

          {/* Mobile icon start */}
          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
          {/* Mobile icon end */}
        </div>
      </Wrapper>
    </header>
  )
}

export default Header
