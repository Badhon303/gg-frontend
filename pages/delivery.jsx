import Wrapper from "@/components/Wrapper"
import { TbTruckDelivery } from "react-icons/tb"
import { BsCheck2Circle } from "react-icons/bs"
import { RxCrossCircled } from "react-icons/rx"

const Delivery = () => {
  return (
    <Wrapper>
      <main className="w-full lg:pb-28 lg:pt-20 ">
        <div className="mb-16">
          <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold ">
            Checkout
          </h2>
          <div className="block mt-3 sm:mt-5 text-xs sm:text-sm font-medium text-slate-700">
            <a className="" href="/">
              Homepage
            </a>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <a className="" href="/collection-2">
              Clothing Categories
            </a>
            <span className="text-xs mx-1 sm:mx-1.5">/</span>
            <span className="underline">Checkout</span>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <div className="max-w-[85rem] my-4">
              <div className="mb-5 pb-5 flex flex-col md:flex-row justify-between items-center border-b border-gray-200">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800">
                    Invoice
                  </h2>
                </div>

                <div className="inline-flex gap-x-2">
                  <a
                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
                    href="#"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                    </svg>
                    Invoice PDF
                  </a>
                  <a
                    className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm"
                    href="#"
                  >
                    <svg
                      className="w-4 h-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 1a2 2 0 0 0-2 2v1h10V3a2 2 0 0 0-2-2H5zm6 8H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z" />
                      <path d="M0 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2H2a2 2 0 0 1-2-2V7zm2.5 1a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                    </svg>
                    Print
                  </a>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-3">
                <div>
                  <div className="grid space-y-3">
                    <dl className="grid sm:flex gap-x-3 text-sm">
                      <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                        Billed to:
                      </dt>
                      <dd className="text-gray-800">
                        <a
                          className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                          href="#"
                        >
                          sara@site.com
                        </a>
                      </dd>
                    </dl>

                    <dl className="grid sm:flex gap-x-3 text-sm">
                      <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                        Billing details:
                      </dt>
                      <dd className="font-medium text-gray-800">
                        <span className="block font-semibold">
                          Sara Williams
                        </span>
                        <address className="not-italic font-normal">
                          280 Suzanne Throughway,
                          <br />
                          Breannabury, OR 45801,
                          <br />
                          United States
                          <br />
                        </address>
                      </dd>
                    </dl>

                    <dl className="grid sm:flex gap-x-3 text-sm">
                      <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                        Shipping details:
                      </dt>
                      <dd className="font-medium text-gray-800">
                        <span className="block font-semibold">
                          Sara Williams
                        </span>
                        <address className="not-italic font-normal">
                          280 Suzanne Throughway,
                          <br />
                          Breannabury, OR 45801,
                          <br />
                          United States
                          <br />
                        </address>
                      </dd>
                    </dl>
                  </div>
                </div>

                <div>
                  <div className="grid space-y-3">
                    <dl className="grid sm:flex gap-x-3 text-sm">
                      <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                        Invoice number:
                      </dt>
                      <dd className="font-medium text-gray-800">
                        ADUQ2189H1-0038
                      </dd>
                    </dl>

                    <dl className="grid sm:flex gap-x-3 text-sm">
                      <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                        Currency:
                      </dt>
                      <dd className="font-medium text-gray-800">
                        USD - US Dollar
                      </dd>
                    </dl>

                    <dl className="grid sm:flex gap-x-3 text-sm">
                      <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                        Due date:
                      </dt>
                      <dd className="font-medium text-gray-800">10 Jan 2023</dd>
                    </dl>

                    <dl className="grid sm:flex gap-x-3 text-sm">
                      <dt className="min-w-[150px] max-w-[200px] text-gray-500">
                        Billing method:
                      </dt>
                      <dd className="font-medium text-gray-800">
                        Send invoice
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>

              <div className="mt-6 border border-gray-200 p-4 rounded-lg space-y-4">
                <div className="hidden sm:grid sm:grid-cols-5">
                  <div className="sm:col-span-2 text-xs font-medium text-gray-500 uppercase">
                    Item
                  </div>
                  <div className="text-left text-xs font-medium text-gray-500 uppercase">
                    Qty
                  </div>
                  <div className="text-left text-xs font-medium text-gray-500 uppercase">
                    Rate
                  </div>
                  <div className="text-right text-xs font-medium text-gray-500 uppercase">
                    Amount
                  </div>
                </div>

                <div className="hidden sm:block border-b border-gray-200"></div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Item
                    </h5>
                    <p className="font-medium text-gray-800">
                      Design UX and UI
                    </p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Qty
                    </h5>
                    <p className="text-gray-800">1</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Rate
                    </h5>
                    <p className="text-gray-800">5</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </h5>
                    <p className="sm:text-right text-gray-800">$500</p>
                  </div>
                </div>

                <div className="sm:hidden border-b border-gray-200"></div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Item
                    </h5>
                    <p className="font-medium text-gray-800">Web project</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Qty
                    </h5>
                    <p className="text-gray-800">1</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Rate
                    </h5>
                    <p className="text-gray-800">24</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </h5>
                    <p className="sm:text-right text-gray-800">$1250</p>
                  </div>
                </div>

                <div className="sm:hidden border-b border-gray-200"></div>

                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  <div className="col-span-full sm:col-span-2">
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Item
                    </h5>
                    <p className="font-medium text-gray-800">SEO</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Qty
                    </h5>
                    <p className="text-gray-800">1</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Rate
                    </h5>
                    <p className="text-gray-800">6</p>
                  </div>
                  <div>
                    <h5 className="sm:hidden text-xs font-medium text-gray-500 uppercase">
                      Amount
                    </h5>
                    <p className="sm:text-right text-gray-800">$2000</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex sm:justify-end">
                <div className="w-full max-w-2xl sm:text-right space-y-2">
                  <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:gap-2">
                    <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                      <dt className="col-span-3 text-gray-500">Subotal:</dt>
                      <dd className="col-span-2 font-medium text-gray-800">
                        $2750.00
                      </dd>
                    </dl>

                    <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                      <dt className="col-span-3 text-gray-500">Total:</dt>
                      <dd className="col-span-2 font-medium text-gray-800">
                        $2750.00
                      </dd>
                    </dl>

                    <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                      <dt className="col-span-3 text-gray-500">Tax:</dt>
                      <dd className="col-span-2 font-medium text-gray-800">
                        $39.00
                      </dd>
                    </dl>

                    <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                      <dt className="col-span-3 text-gray-500">Amount paid:</dt>
                      <dd className="col-span-2 font-medium text-gray-800">
                        $2789.00
                      </dd>
                    </dl>

                    <dl className="grid sm:grid-cols-5 gap-x-3 text-sm">
                      <dt className="col-span-3 text-gray-500">Due balance:</dt>
                      <dd className="col-span-2 font-medium text-gray-800">
                        $0.00
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 my-10 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>
          <div className="w-full lg:w-[30%] ">
            <div className="p-4">
              <h1 className="mb-6 text-4xl font-semibold">Package status</h1>
              <div className="">
                <div className="flex flex-col text-gray-50">
                  <div className="flex">
                    <div className="relative col-start-2 col-end-4 mr-10 ">
                      <div className="flex h-full w-6 items-center justify-center">
                        <div className="pointer-events-none h-full w-1 bg-[#22c55e]"></div>
                      </div>
                      <div className="absolute top-1/2 -mt-9 -ml-7 h-20 w-20 rounded-full ring-offset-2 ring-4 ring-green-500 bg-gray-300 text-center shadow">
                        <div className="absolute left-3 top-3">
                          <TbTruckDelivery className="w-14 h-14" />
                        </div>
                      </div>
                    </div>
                    <div className="col-start-5 col-end-12 my-4 mr-auto w-full rounded-xl p-4">
                      <h3 className="mb-1 text-lg font-semibold text-lime-700">
                        Package Booked
                      </h3>
                      <p className="w-full text-justify leading-tight text-lime-500">
                        21 July 2021, 04:30 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="relative col-start-2 col-end-4 mr-10">
                      <div className="flex h-full w-6 items-center justify-center">
                        <div className="pointer-events-none h-full w-1 bg-[#22c55e]"></div>
                      </div>
                      <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full ring-offset-2 ring-4 ring-green-500 bg-gray-300 text-center shadow">
                        <div className="absolute top-1 left-1">
                          <BsCheck2Circle />
                        </div>
                      </div>
                    </div>
                    <div className="col-start-4 col-end-12 my-4 mr-auto w-full rounded-xl p-4">
                      <h3 className="mb-1 text-lg font-semibold text-lime-700">
                        Package Booked
                      </h3>
                      <p className="w-full text-justify leading-tight text-lime-500">
                        21 July 2021, 04:30 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div className="relative col-start-2 col-end-4 mr-10 ">
                      <div className="flex h-full w-6 items-center justify-center">
                        <div className="pointer-events-none h-full w-1 bg-[#22c55e]"></div>
                      </div>
                      <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full ring-offset-2 ring-4 ring-green-500 bg-gray-300 text-center shadow">
                        <div className="absolute top-1 left-1">
                          <BsCheck2Circle />
                        </div>
                      </div>
                    </div>
                    <div className="col-start-4 col-end-12 my-4 mr-auto w-full rounded-xl p-4">
                      <h3 className="mb-1 text-lg font-semibold text-lime-700">
                        Out for Delivery
                      </h3>
                      <p className="text-justify leading-tight text-lime-500">
                        22 July 2021, 01:00 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div className="relative col-start-2 col-end-4 mr-10 ">
                      <div className="flex h-full w-6 items-center justify-center">
                        <div className="pointer-events-none h-full w-1 bg-[#22c55e]"></div>
                      </div>
                      <div className="absolute top-1/2 -mt-9 -ml-7 h-20 w-20 rounded-full ring-offset-2 ring-4 ring-green-500 bg-gray-300 text-center shadow">
                        <div className="absolute left-3 top-3">
                          <TbTruckDelivery className="w-14 h-14" />
                        </div>
                      </div>
                    </div>
                    <div className="col-start-5 col-end-12 my-4 mr-auto w-full rounded-xl  p-4">
                      <h3 className="mb-1 text-lg font-semibold text-lime-700">
                        Package Booked
                      </h3>
                      <p className="w-full text-justify leading-tight text-lime-500">
                        21 July 2021, 04:30 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div className="relative col-start-2 col-end-4 mr-10">
                      <div className="flex h-full w-6 items-center justify-center">
                        <div className="pointer-events-none h-full w-1 bg-red-500"></div>
                      </div>
                      <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full ring-offset-2 ring-4 ring-red-500 bg-gray-300 text-center shadow">
                        <div className="absolute top-1 left-1">
                          <RxCrossCircled />
                        </div>
                      </div>
                    </div>
                    <div className="col-start-4 col-end-12 my-4 mr-auto w-full rounded-xl p-4">
                      <h3 className="mb-1 text-lg font-semibold text-red-500">
                        Cancelled
                      </h3>
                      <p className="text-justify leading-tight text-red-300">
                        Customer cancelled the order
                      </p>
                    </div>
                  </div>

                  <div className="flex ">
                    <div className="relative col-start-2 col-end-4 mr-10">
                      <div className="flex h-full w-6 items-center justify-center">
                        <div className="pointer-events-none h-full w-1 bg-gray-300"></div>
                      </div>
                      <div className="absolute top-1/2 -mt-3 h-6 w-6 rounded-full ring-offset-2 ring-4 ring-gray-300 bg-gray-300 text-center shadow">
                        <div className="absolute top-1 left-1">
                          <BsCheck2Circle />
                        </div>
                      </div>
                    </div>
                    <div className="col-start-4 col-end-12 my-4 mr-auto w-full rounded-xl p-4">
                      <h3 className="mb-1 text-lg font-semibold text-lime-700">
                        Delivered
                      </h3>
                      <p className="text-justify leading-tight text-lime-500"></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default Delivery
