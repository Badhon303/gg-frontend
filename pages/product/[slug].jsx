import React from "react"
import { IoMdHeartEmpty } from "react-icons/io"
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel"
import RelatedProducts from "@/components/RelatedProducts"
import DescriptionDetails from "@/components/DescriptionDetails"
import Review from "@/components/Review"
import ProductHero from "@/components/ProductHero"
import TopFeature from "@/components/TopFeature"

const ProductDetails = () => {
  return (
    <div className="md:py-20">
      <div className="w-full container px-5 md:px-10 mx-auto">
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px] mb-14">
          {/* left */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* Right */}
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2 leading-normal">
              EOD Airdopes 131
            </div>
            <div className="text-lg font-semibold mb-5">Ear Buds</div>
            <div className="flex items-center mt-5 space-x-4 sm:space-x-5">
              <div className="">
                <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-3 text-lg font-semibold">
                  <span className="text-green-500 !leading-none">$112</span>
                </div>
              </div>
              <div className="h-7 border-l border-slate-300"></div>
              <div className="flex items-center">
                <a href="#" className="flex items-center text-sm font-medium">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="w-5 h-5 pb-[1px] text-yellow-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="ml-1.5 flex">
                    <span>4.9</span>
                    <span className="block mx-2">·</span>
                    <span className="text-slate-600 underline">
                      142 reviews
                    </span>
                  </div>
                </a>
                <span className="hidden sm:block mx-2.5">·</span>
                <div className="hidden sm:flex items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
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
              </div>
            </div>
            {/* <div className="text-lg font-semibold">MRP : ৳ 19,500.00</div>
            <div className="text-md font-medium text-black/[0.5]">
              incl. of taxes
            </div>
            <div className="text-md font-medium text-black/[0.5] mb-20">
              {`(Also includes all applicable duties)`}
            </div> */}
            <div className="my-10">
              <div className=" flex mb-2">
                <div className=" text-md font-semibold pr-3">Select Color:</div>
                <div className="text-md font-medium text-black/[0.5]">
                  <div className="flex space-x-1">
                    <div
                      className="relative z-10 h-6 w-6 cursor-pointer overflow-hidden rounded-full border border-violet-500"
                      title="Violet"
                    >
                      <div className="absolute inset-0.5 z-0 rounded-full bg-violet-400"></div>
                    </div>
                    <div
                      className="relative z-10 h-6 w-6 cursor-pointer overflow-hidden rounded-full border border-transparent"
                      title="Yellow"
                    >
                      <div className="absolute inset-0.5 z-0 rounded-full bg-yellow-400"></div>
                    </div>
                    <div
                      className="relative z-10 h-6 w-6 cursor-pointer overflow-hidden rounded-full border border-transparent"
                      title="Orange"
                    >
                      <div className="absolute inset-0.5 z-0 rounded-full bg-orange-400"></div>
                    </div>
                    <div
                      className="relative z-10 h-6 w-6 cursor-pointer overflow-hidden rounded-full border border-transparent"
                      title="Sky Blue"
                    >
                      <div className="absolute inset-0.5 z-0 rounded-full bg-sky-400"></div>
                    </div>
                    <div
                      className="relative z-10 h-6 w-6 cursor-pointer overflow-hidden rounded-full border border-transparent"
                      title="Green"
                    >
                      <div className="absolute inset-0.5 z-0 rounded-full bg-green-400"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="grid grid-cols-3 gap-2">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 8.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 9.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 10
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 10.5
                </div>
                <div className="border rounded-md text-center py-3 font-medium cursor-not-allowed bg-black/[0.1] opacity-50">
                  UK 11
                </div>
              </div> */}
              {/* <div className="text-red-600 mt-1">
                Size Selection is required
              </div> */}
            </div>
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3">
              Add to Cart
            </button>
            <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
              WishList <IoMdHeartEmpty size={20} />
            </button>
            {/* <div>
              <div className="text-lg font-bold mb-5">Product Details</div>
              <div className="text-md mb-5">
                Feel unbeatable from the tee box to the final putt in a design
                that's pure early MJ: speed, class and laden with true early
                '90s touches tike visible Air and a translucent rubber sole that
                continue to stand the test of time. This model fuses the strut
                of 1st MJ's championship with some of our best golf technology,
                helping you make a statement of confidence when it comes time to
                tame the course.
              </div>
              <div className="text-md mb-5">
                Feel unbeatable from the tee box to the final putt in a design
                that's pure early MJ: speed, class and laden with true early
                '90s touches tike visible Air and a translucent rubber sole that
                continue to stand the test of time. This model fuses the strut
                of 1st MJ's championship with some of our best golf technology,
                helping you make a statement of confidence when it comes time to
                tame the course.
              </div>
            </div> */}
            <div className="w-full rounded-2xl space-y-2.5">
              <button
                className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 "
                id="headlessui-disclosure-button-:r0:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span>Description</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
              </button>
              <button
                className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 "
                id="headlessui-disclosure-button-:r2:"
                type="button"
                aria-expanded="true"
                data-headlessui-state="open"
                aria-controls="headlessui-disclosure-panel-:r3:"
              >
                <span>Specification</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-slate-600 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12h-15"
                  ></path>
                </svg>
              </button>
              <div
                className="p-4 pt-3 last:pb-0 text-slate-600 text-sm  leading-6"
                id="headlessui-disclosure-panel-:r3:"
                data-headlessui-state="open"
              >
                <ul className="list-disc list-inside leading-7">
                  <li>Made from a sheer Belgian power micromesh.</li>
                  <li>74% Polyamide (Nylon) 26% Elastane (Spandex)</li>
                  <li>Adjustable hook &amp; eye closure and straps</li>
                  <li>Hand wash in cold water, dry flat</li>
                </ul>
              </div>
              <button
                className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 "
                id="headlessui-disclosure-button-:r4:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span>How it Fits</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
              </button>
              <button
                className="flex items-center justify-between w-full px-4 py-2 font-medium text-left bg-slate-100/80 hover:bg-slate-200/60  rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-slate-500 focus-visible:ring-opacity-75 "
                id="headlessui-disclosure-button-:r6:"
                type="button"
                aria-expanded="false"
                data-headlessui-state=""
              >
                <span>FAQ</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="w-4 h-4 text-slate-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
              </button>
              <div className="block">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative">
                  <div className="flex flex-col p-5 rounded-2xl bg-red-50">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 14H13C14.1 14 15 13.1 15 12V2H6C4.5 2 3.19001 2.82999 2.51001 4.04999"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M2 17C2 18.66 3.34 20 5 20H6C6 18.9 6.9 18 8 18C9.1 18 10 18.9 10 20H14C14 18.9 14.9 18 16 18C17.1 18 18 18.9 18 20H19C20.66 20 22 18.66 22 17V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L18.58 6.01001C18.22 5.39001 17.56 5 16.84 5H15V12C15 13.1 14.1 14 13 14H12"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M8 22C9.10457 22 10 21.1046 10 20C10 18.8954 9.10457 18 8 18C6.89543 18 6 18.8954 6 20C6 21.1046 6.89543 22 8 22Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16 22C17.1046 22 18 21.1046 18 20C18 18.8954 17.1046 18 16 18C14.8954 18 14 18.8954 14 20C14 21.1046 14.8954 22 16 22Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M22 12V14H19C18.45 14 18 13.55 18 13V10C18 9.45 18.45 9 19 9H20.29L22 12Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M2 8H8"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M2 11H6"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M2 14H4"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="mt-2.5">
                      <p className="font-semibold text-slate-900">
                        Free shipping
                      </p>
                      <p className="text-slate-500 mt-0.5 text-sm">
                        On orders over $50.00
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col p-5 rounded-2xl bg-sky-50">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M13.7 4.44995L17.6799 6.74994L21.6199 4.45996"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M17.6799 10.82V6.73999"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.74 2.21L14.34 3.53996C13.8 3.83996 13.35 4.59995 13.35 5.21995V7.75999C13.35 8.37999 13.79 9.13998 14.34 9.43998L16.74 10.77C17.25 11.06 18.09 11.06 18.61 10.77L21.01 9.43998C21.55 9.13998 22 8.37999 22 7.75999V5.21995C22 4.59995 21.56 3.83996 21.01 3.53996L18.61 2.21C18.1 1.93 17.26 1.93 16.74 2.21Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M2.34998 15.45L6.31998 17.7499L10.27 15.46"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M6.31995 21.82V17.74"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="mt-2.5">
                      <p className="font-semibold text-slate-900">
                        Very easy to return
                      </p>
                      <p className="text-slate-500 mt-0.5 text-sm">
                        Just phone number.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col p-5 rounded-2xl bg-green-50">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M15 3C16.95 8.84 16.95 15.16 15 21"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="mt-2.5">
                      <p className="font-semibold text-slate-900">
                        Nationwide Delivery
                      </p>
                      <p className="text-slate-500 mt-0.5 text-sm">
                        Fast delivery nationwide.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col p-5 rounded-2xl bg-amber-50">
                    <div>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.5 13.75C9.5 14.72 10.25 15.5 11.17 15.5H13.05C13.85 15.5 14.5 14.82 14.5 13.97C14.5 13.06 14.1 12.73 13.51 12.52L10.5 11.47C9.91 11.26 9.51001 10.94 9.51001 10.02C9.51001 9.17999 10.16 8.48999 10.96 8.48999H12.84C13.76 8.48999 14.51 9.26999 14.51 10.24"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 7.5V16.5"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M17 3V7H21"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M22 2L17 7"
                          stroke="#292D32"
                          stroke-width="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </div>
                    <div className="mt-2.5">
                      <p className="font-semibold text-slate-900">
                        Refunds policy
                      </p>
                      <p className="text-slate-500 mt-0.5 text-sm">
                        60 days return for any reason
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopFeature />
      <DescriptionDetails />
      <hr className="border-slate-200 my-20"></hr>
      <ProductHero />
      <hr className="border-slate-200 my-20"></hr>
      <Review />
      <RelatedProducts />
      {/* <Wrapper>
      </Wrapper> */}
    </div>
  )
}

export default ProductDetails
