// import React from "react"
// import { useRouter } from "next/router"
// import Wrapper from "@/components/Wrapper"
// import ProductCard from "@/components/ProductCard"

// const Category = () => {
//   const router = useRouter()
//   const { slug } = router.query
//   console.log(slug)
//   return (
//     <div className="w-full md:py-20">
//       <Wrapper>
//         <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
//           <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
//             Category Page
//           </div>
//         </div>
//         {/* product card */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//           <ProductCard />
//         </div>
//       </Wrapper>
//     </div>
//   )
// }

// export default Category

import { useState } from "react"
import { useRouter } from "next/router"
import Wrapper from "@/components/Wrapper"
import ProductCard from "@/components/ProductCard"
import MultiRangeSlider from "@/components/MultiRangeSlider"

const Category = () => {
  const router = useRouter()
  const { slug } = router.query
  // console.log(slug)
  const [filter, setFilter] = useState(true)

  // let filter = false
  const handleFilter = () => {
    // console.log("filter: ", filter)
    // filter = !filter
    setFilter(!filter)
  }

  return (
    <Wrapper className="py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
      <div className="max-w-screen-sm">
        <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
          Category
        </h2>
        <span className="block mt-4 text-neutral-500 text-sm sm:text-base">
          We not only help you design exceptional products, but also make it
          easy for you to share your designs with more like-minded people.
        </span>
      </div>
      <hr className="border-slate-200"></hr>
      <div className="flex lg:hidden">
        <div className="flex-shrink-0">
          <div className="border-primary-500 bg-primary-50 text-primary-900 flex flex-shrink-0 select-none items-center justify-center rounded-full border px-4 py-2 text-sm focus:outline-none">
            <svg
              className="h-4 w-4 flex-shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22 6.5H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M6 6.5H2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M10 10C11.933 10 13.5 8.433 13.5 6.5C13.5 4.567 11.933 3 10 3C8.067 3 6.5 4.567 6.5 6.5C6.5 8.433 8.067 10 10 10Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M22 17.5H18"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 17.5H2"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M14 21C15.933 21 17.5 19.433 17.5 17.5C17.5 15.567 15.933 14 14 14C12.067 14 10.5 15.567 10.5 17.5C10.5 19.433 12.067 21 14 21Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
            <div className="ml-2 flex-shrink-0 pr-4">Products filters</div>
            <div
              className="flex w-full items-center justify-center"
              onChange={() => handleFilter()}
            >
              <label className="flex cursor-pointer items-center">
                <div className="relative">
                  <input type="checkbox" className="sr-only" />
                  <div className="block h-6 w-10 rounded-full bg-gray-300"></div>
                  <div className="dot absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition"></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div
          className={`lg:w-1/3 xl:w-1/4 pr-4  ${filter && "hidden"} lg:block`}
        >
          {console.log("jsxFilter: ", filter)}
          <div className="divide-y divide-slate-200">
            <div className="relative flex flex-col pb-8 space-y-4">
              <h3 className="font-semibold mb-2.5">Categories</h3>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Backpacks"
                    name="Backpacks"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent  focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Backpacks"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Backpacks
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Travel Bags"
                    name="Travel Bags"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Travel Bags"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Travel Bags
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Laptop Sleeves"
                    name="Laptop Sleeves"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Laptop Sleeves"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Laptop Sleeves
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Organization"
                    name="Organization"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Organization"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Organization
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Accessories"
                    name="Accessories"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Accessories"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Accessories
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col py-8 space-y-4">
              <h3 className="font-semibold mb-2.5">Colors</h3>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="White"
                    name="White"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="White"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      White
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Beige"
                    name="Beige"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Beige"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Beige
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Blue"
                    name="Blue"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Blue"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Blue
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Black"
                    name="Black"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Black"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Black
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Brown"
                    name="Brown"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Brown"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Brown
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Green"
                    name="Green"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Green"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Green
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="Navy"
                    name="Navy"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="Navy"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      Navy
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col py-8 space-y-4">
              <h3 className="font-semibold mb-2.5">Sizes</h3>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="XS"
                    name="XS"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="XS"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      XS
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="S"
                    name="S"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="S"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      S
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="M"
                    name="M"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="M"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      M
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="L"
                    name="L"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="L"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      L
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="XL"
                    name="XL"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="XL"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      XL
                    </span>
                  </label>
                </div>
              </div>
              <div className="">
                <div className="flex text-sm sm:text-base ">
                  <input
                    id="2XL"
                    name="2XL"
                    type="checkbox"
                    className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  />
                  <label
                    htmlFor="2XL"
                    className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                  >
                    <span className="text-slate-900  text-sm font-normal ">
                      2XL
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col py-8 space-y-5 pr-3">
              <div className="space-y-5">
                <span className="font-semibold">Price range</span>
                <MultiRangeSlider min={0} max={1000} />
                {/* <div className="rc-slider rc-slider-horizontal">
                    <div className="rc-slider-rail"></div>
                    <div
                      className="rc-slider-track rc-slider-track-1"
                      style={{ left: "0%", width: "100%" }}
                    ></div>
                    <div className="rc-slider-step"></div>
                    <div
                      className="rc-slider-handle rc-slider-handle-1"
                      tabindex="0"
                      role="slider"
                      aria-valuemin="1"
                      aria-valuemax="500"
                      aria-valuenow="1"
                      aria-disabled="false"
                      style={{ left: "0%", transform: "translateX(-50%)" }}
                    ></div>
                    <div
                      className="rc-slider-handle rc-slider-handle-2"
                      tabindex="0"
                      role="slider"
                      aria-valuemin="1"
                      aria-valuemax="500"
                      aria-valuenow="500"
                      aria-disabled="false"
                      style={{ left: "100%", transform: "translateX(-50%)" }}
                    ></div>
                  </div> */}
              </div>
              <div className="flex justify-between space-x-5">
                <div>
                  <label
                    htmlFor="minPrice"
                    className="block text-sm font-medium text-neutral-700 "
                  >
                    Min price
                  </label>
                  <div className="mt-1 relative rounded-md">
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 sm:text-sm">
                      $
                    </span>
                    <input
                      type="text"
                      name="minPrice"
                      disabled=""
                      id="minPrice"
                      className="block w-32 pr-10 pl-4 py-2 sm:text-sm border border-neutral-200 rounded-full bg-transparent"
                      defaultValue="1"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="maxPrice"
                    className="block text-sm font-medium text-neutral-700 "
                  >
                    Max price
                  </label>
                  <div className="mt-1 relative rounded-md">
                    <span className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-neutral-500 sm:text-sm">
                      $
                    </span>
                    <input
                      type="text"
                      disabled=""
                      name="maxPrice"
                      id="maxPrice"
                      className="block w-32 pr-10 pl-4 py-2 sm:text-sm border border-neutral-200 rounded-full bg-transparent"
                      defaultValue="500"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="py-8 pr-2">
              <div className="MySwitch flex fle justify-between items-center space-x-2 ">
                <div>
                  <label
                    className="nc-Label text-base font-medium text-neutral-900 "
                    data-nc-id="Label"
                  >
                    On sale!
                  </label>
                  <p className="text-neutral-500  text-xs">
                    Products currently on sale
                  </p>
                </div>
                <button
                  className="bg-teal-700 relative inline-flex flex-shrink-0 h-8 w-[68px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
                  id="headlessui-switch-:r0:"
                  role="switch"
                  type="button"
                  tabIndex="0"
                  aria-checked="true"
                  data-headlessui-state="checked"
                >
                  <span className="sr-only">On sale!</span>
                  <span
                    aria-hidden="true"
                    className="translate-x-9 pointer-events-none inline-block h-7 w-7 rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200"
                  ></span>
                </button>
              </div>
            </div>
            <div className="relative flex flex-col py-8 space-y-4">
              <h3 className="font-semibold mb-2.5">Sort order</h3>
              <div className="flex items-center text-sm sm:text-base">
                <input
                  id="Most-Popular"
                  name="radioNameSort"
                  type="radio"
                  className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  value="Most-Popular"
                />
                <label
                  htmlFor="Most-Popular"
                  className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
                >
                  Most Popular
                </label>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <input
                  id="Best-Rating"
                  name="radioNameSort"
                  type="radio"
                  className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  value="Best-Rating"
                />
                <label
                  htmlFor="Best-Rating"
                  className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
                >
                  Best Rating
                </label>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <input
                  id="Newest"
                  name="radioNameSort"
                  type="radio"
                  className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  value="Newest"
                />
                <label
                  htmlFor="Newest"
                  className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
                >
                  Newest
                </label>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <input
                  id="Price-low-hight"
                  name="radioNameSort"
                  type="radio"
                  className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  value="Price-low-hight"
                />
                <label
                  htmlFor="Price-low-hight"
                  className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
                >
                  Price Low - Hight
                </label>
              </div>
              <div className="flex items-center text-sm sm:text-base">
                <input
                  id="Price-hight-low"
                  name="radioNameSort"
                  type="radio"
                  className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-5 h-5"
                  value="Price-hight-low"
                />
                <label
                  htmlFor="Price-hight-low"
                  className="pl-2.5 sm:pl-3 block text-slate-900  select-none"
                >
                  Price Hight - Low
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-shrink-0 mb-10 lg:mb-0 lg:mx-4 border-t lg:border-t-0"></div>
        <div className="flex-1 ">
          <div className="flex-1 grid sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-10 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            {/* <div className="nc-ProductCard relative flex flex-col bg-transparent ">
                <a className="absolute inset-0" href="/product-detail"></a>
                <div className="relative flex-shrink-0 bg-slate-50  rounded-3xl overflow-hidden z-1 group">
                  <a className="block" href="/product-detail">
                    <div className="flex aspect-w-11 aspect-h-12 w-full h-0">
                      <img
                        alt="product"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover w-full h-full drop-shadow-xl"
                        sizes="(max-width: 640px) 100vw, (max-width: 1200px) 50vw, 40vw"
                        src="/gadget-1.webp"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                  </a>
                  <div className="nc-shadow-lg rounded-full flex items-center justify-center absolute top-3 left-3 px-2.5 py-1.5 text-xs bg-white  text-slate-700 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-3.5 h-3.5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                      ></path>
                    </svg>
                    <span className="ml-1 leading-none">New in</span>
                  </div>
                  <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white  text-neutral-700  nc-shadow-lg absolute top-3 right-3 z-10">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z"
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                  <div className="absolute bottom-0 inset-x-1 space-x-1.5 flex justify-center opacity-0 invisible group-hover:bottom-4 group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="nc-shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
                      XS
                    </div>
                    <div className="nc-shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
                      S
                    </div>
                    <div className="nc-shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
                      M
                    </div>
                    <div className="nc-shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
                      L
                    </div>
                    <div className="nc-shadow-lg w-10 h-10 rounded-xl bg-white hover:bg-slate-900 hover:text-white transition-colors cursor-pointer flex items-center justify-center uppercase font-semibold tracking-tight text-sm text-slate-900">
                      XL
                    </div>
                  </div>
                </div>
                <div className="space-y-4 px-2.5 pt-5 pb-2.5">
                  <div className="flex ">
                    <div
                      className="relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-black "
                      title="Black"
                    >
                      <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
                        <img
                          alt="variant"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="absolute w-full h-full object-cover"
                          sizes="40px"
                          src="/gadget-1.webp"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
                      title="White"
                    >
                      <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
                        <img
                          alt="variant"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="absolute w-full h-full object-cover"
                          sizes="40px"
                          src="/gadget-1.webp"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
                      title="Orange"
                    >
                      <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
                        <img
                          alt="variant"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="absolute w-full h-full object-cover"
                          sizes="40px"
                          src="/gadget-1.webp"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
                      title="Sky Blue"
                    >
                      <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
                        <img
                          alt="variant"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="absolute w-full h-full object-cover"
                          sizes="40px"
                          src="/gadget-1.webp"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                    <div
                      className="relative w-11 h-6 rounded-full overflow-hidden z-10 border cursor-pointer border-transparent"
                      title="Natural"
                    >
                      <div className="absolute inset-0.5 rounded-full overflow-hidden z-0">
                        <img
                          alt="variant"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          className="absolute w-full h-full object-cover"
                          sizes="40px"
                          src="/gadget-1.webp"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            inset: "0px",
                            color: "transparent",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h2 className="nc-ProductCard__title text-base font-semibold transition-colors">
                      Rey Nylon Backpack
                    </h2>
                    <p className="text-sm text-slate-500  mt-1 ">
                      Brown cockroach wings
                    </p>
                  </div>
                  <div className="flex justify-between items-end ">
                    <div className="">
                      <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                        <span className="text-green-500 !leading-none">
                          $74
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center mb-0.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="w-5 h-5 pb-[1px] text-amber-400"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <span className="text-sm ml-1 text-slate-500 ">
                        4.4 (98 reviews)
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default Category
