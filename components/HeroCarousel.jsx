// import Image from "next/image"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

const HeroCarousel = () => {
  return (
    <div className=" text-white font-medium">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        // showIndicators={false}
        showStatus={false}
      >
        <div className="flex flex-col md:flex-row items-center justify-around bg-[#e3ffe6] min-h-[550px] md:min-h-[700px]">
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
              className="w-[300px] h-[350px] md:w-[500px] md:h-[550px]"
              src="/gadget-1.webp"
              alt="product Image"
            />
          </div>
        </div>

        {/* <div className="flex flex-col md:flex-row items-center justify-around bg-[#3484f3] min-h-[384px]">
          <div className="flex items-center pt-4  md:pt-0">
            <h1 className="text-xl md:text-4xl font-semibold">
              Item 1 ddkkdopakpospksp okdkp
              <br />
              Item 1 ddkkdopakpospksp
              <br />
              Item 1 ddkkdopakpospksp okdkp
              <br />
              Item 1 ddkkdopakpospksp
            </h1>
          </div>
          <div className="flex items-start">
            <img
              className="w-[300px] h-[315px]"
              src="/gadget-1.webp"
              alt="product Image"
            />
          </div>
        </div> */}

        {/* <div className="flex flex-col md:flex-row items-center justify-around bg-[#3484f3] min-h-[384px]">
          <div className="flex items-center pt-4  md:pt-0">
            <h1 className="text-xl md:text-4xl font-semibold">
              Item 1 ddkkdopakpospksp okdkp
              <br />
              Item 1 ddkkdopakpospksp
              <br />
              Item 1 ddkkdopakpospksp okdkp
              <br />
              Item 1 ddkkdopakpospksp
            </h1>
          </div>
          <div className="flex items-start">
            <img
              className="w-[300px] h-[315px]"
              src="/gadget-1.webp"
              alt="product Image"
            />
          </div>
        </div> */}
        {/* </div> */}
      </Carousel>
    </div>
  )
}

export default HeroCarousel
