import Wrapper from "./Wrapper"
import Image from "next/image"

const TopFeature = () => {
  return (
    <Wrapper className="flex flex-wrap space-y-9 lg:space-y-0 items-center justify-around md:justify-between bg-gray-50 rounded-md py-8">
      {/* <Wrapper className="grid grid-cols-2 md:grid-cols-4 justify-items-center gap-10 bg-gray-50 rounded-md py-3"> */}
      <div>
        <h1 className="font-bold text-4xl">
          Experience <br /> The magic
        </h1>
      </div>
      <div className="flex items-center">
        <Image
          src="/TopFeature/BatteryCharging.png"
          alt="warranty"
          width={100}
          height={100}
        />
        <span className="font-semibold text-2xl tracking-tight">
          Nonstop <br /> Music upto <br />
          60 hours
        </span>
      </div>
      <div className="flex items-center">
        <Image
          src="/TopFeature/music.png"
          alt="warranty"
          width={100}
          height={100}
        />
        <span className="font-semibold text-2xl tracking-tight">
          Designed <br /> for Music <br />
          Lovers
        </span>
      </div>
      <div className="flex items-center">
        <Image
          src="/TopFeature/bluetooth.png"
          alt="warranty"
          width={100}
          height={100}
        />
        <span className="font-semibold text-2xl tracking-tight">
          Bluetooth <br />
          v5.0
        </span>
      </div>
      <div className="flex items-center">
        <Image
          src="/TopFeature/tws.png"
          alt="warranty"
          width={100}
          height={100}
        />
        <span className="font-semibold text-2xl tracking-tight">
          650mAh <br /> pocket friendly <br />
          charging case
        </span>
      </div>
    </Wrapper>
  )
}

export default TopFeature
