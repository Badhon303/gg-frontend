import React from "react"
import Link from "next/link"
import { BsChevronDown } from "react-icons/bs"

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

const Menu = ({ showCatMenu, setShowCatMenu }) => {
  return (
    <ul className="hidden lg:flex items-center gap-8 font-medium text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2"
                onMouseEnter={() => setShowCatMenu(true)}
                onMouseLeave={() => setShowCatMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showCatMenu && (
                  <li className="absolute container left-0 top-10">
                    <div className="bg-white text-black shadow-lg my-7 py-4 rounded-b-lg">
                      <div className="grid grid-cols-4 gap-y-5">
                        {subMenuData.map((submenu) => {
                          return (
                            <Link
                              href="/"
                              key={submenu.id}
                              onClick={() => setShowCatMenu(false)}
                            >
                              <li className="h-12 flex items-center px-3 hover:bg-black/[0.03] rounded-md">
                                <img
                                  src={`/products/${submenu.img}`}
                                  alt={submenu.img}
                                  className="px-5"
                                />
                                {submenu.name}
                              </li>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </li>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        )
      })}
    </ul>
  )
}

export default Menu
