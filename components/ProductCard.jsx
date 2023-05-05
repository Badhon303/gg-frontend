import React from "react"
import Link from "next/link"
import Image from "next/image"
import { FiHeart } from "react-icons/fi"

const ProductCard = () => {
  return (
    <Link
      href="/product/1"
      className="relative transform overflow-hidden duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        className="w-full bg-[#f8fafc] rounded-3xl"
        src="/gadget-1.webp"
        alt="product Image"
        width={300}
        height={325}
      />
      <button className="w-9 h-9 flex items-center justify-center rounded-full bg-white shadow-lg absolute top-4 right-4 z-10">
        <FiHeart />
      </button>
      <div className="absolute top-10 bg-yellow-500 p-2 rounded-r-lg font-bold leading-none">
        20%off
      </div>
      <div className="p-4 font-poppins">
        <div className="flex items-center py-1 mb-0.5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            className="w-5 h-5 pb-[1px] text-amber-400"
          >
            <path
              fillRule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="text-sm ml-1 text-slate-500">4.9 (98 reviews)</span>
        </div>
        <h2 className="text-base pb-2 font-semibold text-black/[0.9] tracking-normal">
          Product Name
        </h2>
        <div className="flex items-center text-black/[0.5]">
          {/* <p className="text-lg font-semibold mr-2">$20.00</p> */}
          <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-base font-bold">
            <span className="text-green-500 leading-none">$42</span>
          </div>
          <p className="ml-2 text-base font-medium line-through">$25.00</p>
          {/* <p className="ml-auto text-base font-bold text-green-500">$20% off</p> */}
          <button className="ml-auto border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-base font-bold text-black hover:bg-green-500 hover:text-white leading-none">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
