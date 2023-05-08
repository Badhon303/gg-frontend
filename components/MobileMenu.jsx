import React from "react"
import Link from "next/link"
import { BsChevronDown } from "react-icons/bs"
import { FiSearch } from "react-icons/fi"

const data = [
  { id: 1, name: "Categories", subMenu: true },
  { id: 2, name: "Daily Deals", url: "/about" },
  // { id: 3, name: "Gift With ReTech", url: "/" },
  // { id: 4, name: "More", url: "/contact" },
]

const subMenuData = [
  {
    id: 1,
    name: "True Wireless Earbuds",
    doc_count: 11,
    img: "True_Wireless_Earphones_small.svg",
  },
  { id: 2, name: "Neckbands", doc_count: 8, img: "boAt_Neckbands_small.svg" },
  {
    id: 3,
    name: "Smart Watches",
    doc_count: 64,
    img: "Smart_Watches_small.svg",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    doc_count: 107,
    img: "Over_Ear_Headphones_small.svg",
  },
  {
    id: 5,
    name: "True Wireless Earbuds",
    doc_count: 11,
    img: "True_Wireless_Earphones_small.svg",
  },
  { id: 6, name: "Neckbands", doc_count: 8, img: "boAt_Neckbands_small.svg" },
  {
    id: 7,
    name: "Smart Watches",
    doc_count: 64,
    img: "Smart_Watches_small.svg",
  },
  {
    id: 8,
    name: "Wireless Headphones",
    doc_count: 107,
    img: "Over_Ear_Headphones_small.svg",
  },
  {
    id: 9,
    name: "True Wireless Earbuds",
    doc_count: 11,
    img: "True_Wireless_Earphones_small.svg",
  },
  { id: 10, name: "Neckbands", doc_count: 8, img: "boAt_Neckbands_small.svg" },
  {
    id: 11,
    name: "Smart Watches",
    doc_count: 64,
    img: "Smart_Watches_small.svg",
  },
  {
    id: 12,
    name: "Wireless Headphones",
    doc_count: 107,
    img: "Over_Ear_Headphones_small.svg",
  },
]

const MobileMenu = ({ showCatMenu, setShowCatMenu, setMobileMenu }) => {
  return (
    <ul className="flex flex-col lg:hidden font-bold absolute top-[50px] md:top-[60px] left-0 w-full h-[calc(100vh-45px)] bg-white border-t text-black">
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
                  <div className="bg-black/[0.05] -mx-5 mt-4 -mb-4">
                    <div className="overflow-auto">
                      <div className="max-h-[485px]">
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
                              <div className="py-4 px-8 border-t flex">
                                <img
                                  src={`/products/${submenu.img}`}
                                  alt={submenu.img}
                                  className="px-5"
                                />
                                {submenu.name}
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
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
