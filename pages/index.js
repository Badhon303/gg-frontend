import Facility from "@/components/Facility"
import HeroCarousel from "@/components/HeroCarousel"
import ProductCard from "@/components/ProductCard"
import ProductsSvg from "@/components/ProductsSvg"
import DiscoverMore from "@/components/DiscoverMore"
import DiscountCounter from "@/components/DiscountCounter"
import Wrapper from "@/components/Wrapper"
import StartExplore from "@/components/StartExplore"

export default function Home() {
  return (
    <>
      <main>
        <HeroCarousel />
        <Facility />
        <Wrapper>
          <ProductsSvg />
          <DiscountCounter />
          <DiscoverMore />
          {/* product card */}
          <h2 className="text-3xl font-semibold md:text-4xl mt-12 mb-10">
            What's trending now
            <span>. </span>
            <span className="text-neutral-500">
              Good things are waiting for you
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 my-14 px-5 md:px-0">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
          <StartExplore />
          <h2 className="text-3xl font-semibold md:text-4xl mt-12 mb-10">
            What's trending now
            <span>. </span>
            <span className="text-neutral-500">
              Good things are waiting for you
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 my-14 px-5 md:px-0">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </Wrapper>
      </main>
    </>
  )
}
