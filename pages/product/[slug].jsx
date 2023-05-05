import React from "react"
import { IoMdHeartEmpty } from "react-icons/io"
import Wrapper from "@/components/Wrapper"
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel"
import RelatedProducts from "@/components/RelatedProducts"

const ProductDetails = () => {
  return (
    <div className="md:py-20">
      <div className="w-full container px-5 md:px-10 mx-auto">
        <div className=" flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarousel />
          </div>
          {/* Right */}
          <div className="flex-[1] py-3">
            <div className="text-[34px] font-semibold mb-2">EOD</div>
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
                      fill-rule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clip-rule="evenodd"
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
              <div className=" flex justify-between mb-2">
                <div className=" text-md font-semibold">Select Size</div>
                <div className="text-md font-medium text-black/[0.5]">
                  Select Guide
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2">
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
              </div>
              <div className="text-red-600 mt-1">
                Size Selection is required
              </div>
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
                <span>Fabric + Care</span>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
      {/* <Wrapper>
      </Wrapper> */}
    </div>
  )
}

export default ProductDetails
