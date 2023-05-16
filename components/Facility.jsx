import React from "react"
import Wrapper from "./Wrapper"

const Facility = () => {
  return (
    <Wrapper className="flex flex-wrap space-y-4 space-x-4 md:space-y-0 md:space-x-0 items-center justify-around md:justify-between bg-gray-50 rounded-md py-3">
      {/* <Wrapper className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-10 bg-gray-50 rounded-md py-3"> */}
      <div className="flex items-center">
        <img
          src="/warranty.png"
          alt="warranty"
          className="w-[35px] h-[35px] md:w-[44px] md:h-[44px]"
        />
        <span className="font-bold pl-3 leading-tight text-sm md:text-base">
          1 YEAR <br />
          WARRANTY
        </span>
      </div>
      <div className="flex items-center">
        <img
          src="/replacement.png"
          alt="warranty"
          className="w-[35px] h-[35px] md:w-[44px] md:h-[44px]"
        />
        <span className="font-bold pl-3 leading-tight text-sm md:text-base">
          FREE 7 DAYS <br />
          REPLACEMENT
        </span>
      </div>
      <div className="flex items-center">
        <img
          src="/payment.png"
          alt="warranty"
          className="w-[35px] h-[35px] md:w-[44px] md:h-[44px]"
        />
        <span className="font-bold pl-3 leading-tight text-sm md:text-base">
          SECURE <br />
          PAYMENT
        </span>
      </div>
      <div className="flex items-center">
        <img
          src="/delivery.png"
          alt="warranty"
          className="w-[35px] h-[35px] md:w-[44px] md:h-[44px]"
        />
        <span className="font-bold pl-3 leading-tight text-sm md:text-base">
          FAST <br />
          DELIVERY
        </span>
      </div>
    </Wrapper>
  )
}

export default Facility
