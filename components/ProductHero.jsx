import React from "react"

const ProductHero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-around bg-[#e6ecf5] min-h-[500px]">
        <div className="flex flex-[.7] items-center justify-start pt-4 md:pt-0">
          <div className="space-y-5 sm:space-y-6 mx-20">
            <span className="text-base md:text-xl text-slate-700 font-medium">
              In this season, find the best 🔥
            </span>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl !leading-[114%] text-slate-900">
              Exclusive collection for everyone
            </h2>
          </div>
        </div>
        <div className="flex items-center">
          <img
            className="w-[500px] h-[550px]"
            src="/gadget-1.webp"
            alt="product Image"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around bg-[#f4e9e9] min-h-[500px]">
        <div className="flex items-center">
          <img
            className="w-[500px] h-[550px]"
            src="/gadget-1.webp"
            alt="product Image"
          />
        </div>
        <div className="flex flex-[.7] items-center justify-start pt-4 md:pt-0">
          <div className="space-y-5 sm:space-y-6 mx-20">
            <span className="text-base md:text-xl text-slate-700 font-medium">
              In this season, find the best 🔥
            </span>
            <h2 className="font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl !leading-[114%] text-slate-900">
              Exclusive collection for everyone
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductHero
