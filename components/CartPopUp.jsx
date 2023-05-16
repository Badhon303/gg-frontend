import React from "react"

const CartPopUp = () => {
  const remove = () => {
    console.log("remove")
  }

  return (
    <div
      className="absolute cart-picture z-10 w-screen max-w-[350px] px-4 mt-3.5 -right-10 sm:px-0 opacity-100 translate-y-0"
      tabIndex="-1"
    >
      <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
        <div className="relative bg-white">
          <div className="max-h-[60vh] p-5 overflow-y-auto hiddenScrollbar">
            <h3 className="text-xl font-semibold">Shopping cart</h3>
            <div className="divide-y divide-slate-100">
              <div className="flex py-5 last:pb-0">
                <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    alt="Rey Nylon Backpack"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="h-full w-full object-contain object-center"
                    sizes="100vw"
                    src="/gadget-1.webp"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                  <a className="absolute inset-0" href="/product-detail"></a>
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between ">
                      <div>
                        <h3 className="text-base font-medium ">
                          <a href="/product-detail">Rey Nylon Backpack</a>
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          <span>Natural</span>
                          <span className="mx-2 border-l border-slate-200 h-4"></span>
                          <span>XL</span>
                        </p>
                      </div>
                      <div className="mt-0.5">
                        <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                          <span className="text-green-500 !leading-none">
                            $74
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-primary-6000 "
                        onClick={() => remove()}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex py-5 last:pb-0">
                <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    alt='Round Buckle 1" Belt'
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="h-full w-full object-contain object-center"
                    sizes="100vw"
                    src="/gadget-1.webp"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                  <a className="absolute inset-0" href="/product-detail"></a>
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between ">
                      <div>
                        <h3 className="text-base font-medium ">
                          <a href="/product-detail">Round Buckle 1" Belt</a>
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          <span>Natural</span>
                          <span className="mx-2 border-l border-slate-200 h-4"></span>
                          <span>XL</span>
                        </p>
                      </div>
                      <div className="mt-0.5">
                        <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                          <span className="text-green-500 !leading-none">
                            $68
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-primary-6000 "
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex py-5 last:pb-0">
                <div className="relative h-24 w-20 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    alt="Waffle Knit Beanie"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="h-full w-full object-contain object-center"
                    sizes="100vw"
                    src="/gadget-1.webp"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                  <a className="absolute inset-0" href="/product-detail"></a>
                </div>
                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between ">
                      <div>
                        <h3 className="text-base font-medium ">
                          <a href="/product-detail">Waffle Knit Beanie</a>
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                          <span>Natural</span>
                          <span className="mx-2 border-l border-slate-200 h-4"></span>
                          <span>XL</span>
                        </p>
                      </div>
                      <div className="mt-0.5">
                        <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                          <span className="text-green-500 !leading-none">
                            $132
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty 1</p>
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-primary-6000 "
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-neutral-50 p-5">
            <p className="flex justify-between font-semibold text-slate-900">
              <span>
                <span>Subtotal</span>
                <span className="block text-sm text-slate-500 font-normal">
                  Shipping and taxes calculated at checkout.
                </span>
              </span>
              <span className="">$299.00</span>
            </p>
            <div className="flex space-x-2 mt-5">
              <a
                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonSecondary bg-white text-slate-700 hover:bg-gray-100 flex-1 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 "
                href="/cart"
              >
                View cart
              </a>
              <a
                className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl flex-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 "
                href="/checkout"
              >
                Check out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPopUp
