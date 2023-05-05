import React from "react"
import Wrapper from "./Wrapper"
import Image from "next/image"
Image

const Facility = () => {
  return (
    <Wrapper className="hidden md:flex items-center justify-between bg-gray-50 rounded-md py-3">
      <div className="flex items-center">
        <Image src="/warranty.png" alt="warranty" width={44} height={44} />
        <span className="font-semibold pl-3 leading-tight">
          1 YEAR <br />
          WARRANTY
        </span>
      </div>
      <div className="flex items-center">
        <Image src="/replacement.png" alt="warranty" width={44} height={44} />
        <span className="font-semibold pl-3 leading-tight">
          FREE 7 DAYS <br />
          REPLACEMENT
        </span>
      </div>
      <div className="flex items-center">
        <Image src="/payment.png" alt="warranty" width={44} height={44} />
        <span className="font-semibold pl-3 leading-tight">
          SECURE <br />
          PAYMENT
        </span>
      </div>
      <div className="flex items-center">
        <Image src="/delivery.png" alt="warranty" width={44} height={44} />
        <span className="font-semibold pl-3 leading-tight">
          FAST <br />
          DELIVERY
        </span>
      </div>
    </Wrapper>
  )
}

export default Facility
