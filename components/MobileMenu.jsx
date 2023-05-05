import React from "react"
import Link from "next/link"
import { BsChevronDown } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "About", url: "/about" },
  { id: 3, name: "Categories", subMenu: true },
  { id: 4, name: "Contact", url: "/contact" },
]

const subMenuData = [
  { id: 1, name: "Jordan", doc_count: 11 },
  { id: 2, name: "Sneakers", doc_count: 8 },
  { id: 3, name: "Running shoes", doc_count: 64 },
  { id: 4, name: "Football shoes", doc_count: 107 },
]

const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col md:hidden font-bold absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
                onClick={() => setShowCatMenu(!showCatMenu)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showCatMenu && (
                  <ul className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    {subMenuData.map((submenu) => {
                      return (
                        <Link
                          href="/"
                          key={submenu.id}
                          onClick={() => {
                            setShowCatMenu(false)
                            setMobileMenu(false)
                          }}
                        >
                          <li className="py-4 px-8 border-t flex justify-between">
                            {submenu.name}
                            <span className="text-sm opacity-50">78</span>
                          </li>
                        </Link>
                      )
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <>
                <li className="py-4 px-5 border-b">
                  <Link href={item?.url} onClick={() => setMobileMenu(false)}>
                    {item.name}
                  </Link>
                </li>
              </>
            )}
          </React.Fragment>
        )
      })}
      <div className="relative text-gray-800 pt-4">
        <input
          type="search"
          name="search"
          placeholder="Search"
          className="bg-[#f8fafc] h-14 w-full px-5 pr-10 rounded-full text-sm focus:outline-none"
        />
        <button type="submit" className="absolute right-0 top-5 mt-3 mr-4">
          <FiSearch className="text-[20px] md:text-[25px]" />
        </button>
      </div>
    </ul>
  )
}

export default MobileMenu
