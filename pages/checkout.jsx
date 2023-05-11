import { useState } from "react"
import Wrapper from "@/components/Wrapper"

const CheckOut = () => {
  const [showContactInfo, setShowContactInfo] = useState(false)
  const [showShippingAddress, setShowShippingAddress] = useState(false)
  const [showPaymentMethod, setShowPaymentMethod] = useState(true)
  const [radioSelect, setRadioSelect] = useState("Card")
  console.log("radioValue: ", radioSelect)

  return (
    <Wrapper>
      <main className="container py-16 lg:pb-28 lg:pt-20 ">
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
            <div className="space-y-8">
              <div id="ContactInfo" className="scroll-mt-24">
                <div className="border border-slate-200  rounded-xl overflow-hidden z-0">
                  <div className="flex flex-col sm:flex-row items-start p-6 ">
                    <span className="hidden sm:block">
                      <svg
                        className="w-6 h-6 text-slate-700  mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="sm:ml-8">
                      <h3 className=" text-slate-700  flex ">
                        <span className="uppercase tracking-tight">
                          CONTACT INFO
                        </span>
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          className="w-5 h-5 ml-3 text-slate-900 "
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </h3>
                      <div className="font-semibold mt-1 text-sm">
                        <span className="">Enrico Smith</span>
                        <span className="ml-3 tracking-tighter">
                          +855 - 666 - 7744
                        </span>
                      </div>
                    </div>
                    <button
                      className="py-2 px-4 bg-slate-50 hover:bg-slate-100  mt-5 sm:mt-0 sm:ml-auto text-sm font-medium rounded-lg"
                      onClick={() => {
                        setShowContactInfo(!showContactInfo)
                        setShowShippingAddress(showContactInfo ? true : false)
                        setShowPaymentMethod(false)
                      }}
                    >
                      Change
                    </button>
                  </div>
                  <div
                    className={`${
                      !showContactInfo && "hidden"
                    } border-t border-slate-200  px-6 py-7 space-y-4 sm:space-y-6 block`}
                  >
                    <div className="flex justify-between flex-wrap items-baseline">
                      <h3 className="text-lg font-semibold">
                        Contact infomation
                      </h3>
                      <span className="block text-sm my-1 md:my-0">
                        Do not have an account?{" "}
                        <a href="##" className="text-primary-500 font-medium">
                          Log in
                        </a>
                      </span>
                    </div>
                    <div className="max-w-lg">
                      <label
                        className="text-base font-medium text-neutral-900  md:text-sm"
                        data-nc-id="Label"
                      >
                        Your phone number
                      </label>
                      <input
                        type="tel"
                        className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200  rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                        defaultValue="+808 xxx"
                      />
                    </div>
                    <div className="max-w-lg">
                      <label
                        className="text-base font-medium text-neutral-900  md:text-sm"
                        data-nc-id="Label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200  rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                      />
                    </div>
                    <div>
                      <div className="flex text-sm sm:text-base">
                        <input
                          id="uudai"
                          name="uudai"
                          type="checkbox"
                          className="focus:ring-action-primary text-primary-500 rounded border-slate-400 hover:border-slate-700 bg-transparent  focus:ring-primary-500 w-6 h-6"
                          defaultChecked=""
                        />
                        <label
                          htmlFor="uudai"
                          className="pl-2.5 sm:pl-3.5 flex flex-col flex-1 justify-center select-none"
                        >
                          <span className="text-slate-900   ">
                            Email me news and offers
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row pt-6">
                      <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-slate-50 shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 ">
                        Save and next to Shipping
                      </button>
                      <button
                        className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-white text-slate-700  hover:bg-gray-100  mt-3 sm:mt-0 sm:ml-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
                        onClick={() => {
                          setShowContactInfo(false)
                          setShowShippingAddress(true)
                          setShowPaymentMethod(false)
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="ShippingAddress" className="scroll-mt-24">
                <div className="border border-slate-200 rounded-xl ">
                  <div className="p-6 flex flex-col sm:flex-row items-start">
                    <span className="hidden sm:block">
                      <svg
                        className="w-6 h-6 text-slate-700 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.1401 15.0701V13.11C12.1401 10.59 14.1801 8.54004 16.7101 8.54004H18.6701"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M5.62012 8.55005H7.58014C10.1001 8.55005 12.1501 10.59 12.1501 13.12V13.7701V17.25"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M7.14008 6.75L5.34009 8.55L7.14008 10.35"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M16.8601 6.75L18.6601 8.55L16.8601 10.35"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="sm:ml-8">
                      <h3 className=" text-slate-700 flex ">
                        <span className="uppercase">SHIPPING ADDRESS</span>
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          className="w-5 h-5 ml-3 text-slate-900"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </h3>
                      <div className="font-semibold mt-1 text-sm">
                        <span className="">
                          St. Paul's Road, Norris, SD 57560, Dakota, USA
                        </span>
                      </div>
                    </div>
                    <button
                      className="py-2 px-4 bg-slate-50 hover:bg-slate-100 mt-5 sm:mt-0 sm:ml-auto text-sm font-medium rounded-lg"
                      onClick={() => {
                        setShowContactInfo(false)
                        setShowShippingAddress(!showShippingAddress)
                        setShowPaymentMethod(showShippingAddress ? true : false)
                      }}
                    >
                      Change
                    </button>
                  </div>
                  <div
                    className={`${
                      !showShippingAddress && "hidden"
                    } border-t border-slate-200 px-6 py-7 space-y-4 sm:space-y-6 block`}
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                      <div>
                        <label
                          className="text-base font-medium text-neutral-900 md:text-sm"
                          data-nc-id="Label"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                          defaultValue="Cole"
                        />
                      </div>
                      <div>
                        <label
                          className="text-base font-medium text-neutral-900 md:text-sm"
                          data-nc-id="Label"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                          defaultValue="Enrico "
                        />
                      </div>
                    </div>
                    <div className="sm:flex space-y-4 sm:space-y-0 sm:space-x-3">
                      <div className="flex-1">
                        <label
                          className="text-base font-medium text-neutral-900 md:text-sm"
                          data-nc-id="Label"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                          placeholder=""
                          defaultValue="123, Dream Avenue, USA"
                        />
                      </div>
                      <div className="sm:w-1/3">
                        <label
                          className="text-base font-medium text-neutral-900 md:text-sm"
                          data-nc-id="Label"
                        >
                          Apt, Suite *
                        </label>
                        <input
                          type="text"
                          className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                          defaultValue="55U - DD5 "
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                      <div>
                        <label
                          className="text-base font-medium text-neutral-900 md:text-sm"
                          data-nc-id="Label"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                          defaultValue="Norris"
                        />
                      </div>
                      <div>
                        <label
                          className="text-base font-medium text-neutral-900 md:text-sm"
                          data-nc-id="Label"
                        >
                          Country
                        </label>
                        <select className="h-11 mt-1.5 block w-full text-sm rounded-2xl border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white">
                          <option value="United States">United States</option>
                          <option value="United States">Canada</option>
                          <option value="United States">Mexico</option>
                          <option value="United States">Israel</option>
                          <option value="United States">France</option>
                          <option value="United States">England</option>
                          <option value="United States">Laos</option>
                          <option value="United States">China</option>
                        </select>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                      <div>
                        <label
                          className="text-base font-medium text-neutral-900 md:text-sm"
                          data-nc-id="Label"
                        >
                          State/Province
                        </label>
                        <input
                          type="text"
                          className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                          defaultValue="Texas"
                        />
                      </div>
                      <div>
                        <label
                          className="text-base font-medium text-neutral-900 md:text-sm"
                          data-nc-id="Label"
                        >
                          Postal code
                        </label>
                        <input
                          type="text"
                          className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                          defaultValue="2500 "
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        className="text-base font-medium text-neutral-900 md:text-sm"
                        data-nc-id="Label"
                      >
                        Address type
                      </label>
                      <div className="mt-1.5 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        <div className="flex items-center text-sm sm:text-base ">
                          <input
                            id="Address-type-home"
                            name="Address-type"
                            type="radio"
                            className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-6 h-6"
                            defaultValue="Address-type-home"
                            defaultChecked=""
                          />
                          <label
                            htmlFor="Address-type-home"
                            className="pl-2.5 sm:pl-3 block text-slate-900 select-none"
                          >
                            <span className="text-sm font-medium">
                              Home{" "}
                              <span className="font-light">
                                (All Day Delivery)
                              </span>
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center text-sm sm:text-base ">
                          <input
                            id="Address-type-office"
                            name="Address-type"
                            type="radio"
                            className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-6 h-6"
                            defaultValue="Address-type-office"
                          />
                          <label
                            htmlFor="Address-type-office"
                            className="pl-2.5 sm:pl-3 block text-slate-900 select-none"
                          >
                            <span className="text-sm font-medium">
                              Office{" "}
                              <span className="font-light">
                                (Delivery{" "}
                                <span className="font-medium">9 AM - 5 PM</span>
                                )
                              </span>{" "}
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row pt-6">
                      <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-slate-50  shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000">
                        Save and next to Payment
                      </button>
                      <button
                        className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6 bg-white text-slate-700  hover:bg-gray-100  mt-3 sm:mt-0 sm:ml-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
                        onClick={() => {
                          setShowContactInfo(false)
                          setShowShippingAddress(false)
                          setShowPaymentMethod(true)
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div id="PaymentMethod" className="scroll-mt-24">
                <div className="border border-slate-200 rounded-xl ">
                  <div className="p-6 flex flex-col sm:flex-row items-start">
                    <span className="hidden sm:block">
                      <svg
                        className="w-6 h-6 text-slate-700 mt-0.5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.92969 15.8792L15.8797 3.9292"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M11.1013 18.2791L12.3013 17.0791"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M13.793 15.5887L16.183 13.1987"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M3.60127 10.239L10.2413 3.599C12.3613 1.479 13.4213 1.469 15.5213 3.569L20.4313 8.479C22.5313 10.579 22.5213 11.639 20.4013 13.759L13.7613 20.399C11.6413 22.519 10.5813 22.529 8.48127 20.429L3.57127 15.519C1.47127 13.419 1.47127 12.369 3.60127 10.239Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M2 21.9985H22"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </span>
                    <div className="sm:ml-8">
                      <h3 className=" text-slate-700 flex ">
                        <span className="uppercase tracking-tight">
                          PAYMENT METHOD
                        </span>
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="2.5"
                          stroke="currentColor"
                          className="w-5 h-5 ml-3 text-slate-900"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                          ></path>
                        </svg>
                      </h3>
                      <div className="font-semibold mt-1 text-sm">
                        <span className="">Google / Apple Wallet</span>
                        <span className="ml-3">xxx-xxx-xx55</span>
                      </div>
                    </div>
                    <button
                      className="py-2 px-4 bg-slate-50 hover:bg-slate-100 mt-5 sm:mt-0 sm:ml-auto text-sm font-medium rounded-lg"
                      onClick={() => {
                        setShowPaymentMethod(!showPaymentMethod)
                        setShowShippingAddress(false)
                        setShowContactInfo(showPaymentMethod ? true : false)
                      }}
                    >
                      Change
                    </button>
                  </div>
                  <div
                    className={`${
                      !showPaymentMethod && "hidden"
                    } border-t border-slate-200 px-6 py-7 space-y-6 block`}
                  >
                    <div>
                      <div className="flex items-start space-x-4 sm:space-x-6">
                        <div className="flex items-center text-sm sm:text-base pt-3.5">
                          <input
                            id="Credit-Card"
                            name="payment-method"
                            type="radio"
                            className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-6 h-6"
                            value="Card"
                            checked={radioSelect === "Card"}
                            onChange={(e) => setRadioSelect(e.target.value)}
                            // defaultValue="Credit-Card"
                            // defaultChecked="Card"
                          />
                        </div>
                        <div className="flex-1">
                          <label
                            htmlFor="Credit-Card"
                            className="flex items-center space-x-4 sm:space-x-6"
                          >
                            <div className="p-2.5 rounded-xl border-2 border-slate-600">
                              <svg
                                className="w-6 h-6 sm:w-7 sm:h-7"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M2 12.6101H19"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M19 10.28V17.43C18.97 20.28 18.19 21 15.22 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M5.25 17.8101H6.96997"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M9.10986 17.8101H12.5499"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeMiterlimit="10"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <p className="font-medium">Debit / Credit Card</p>
                          </label>
                          <div
                            // className={`${
                            //   radioSelect !== "Card" ? "hidden" : ""
                            // } mt-6 mb-4 space-y-3 sm:space-y-5 block`}
                            className={`${
                              radioSelect !== "Card" && "hidden"
                            } mt-6 mb-4 space-y-3 sm:space-y-5 block`}
                          >
                            <div className="max-w-lg">
                              <label
                                className="md:text-base font-medium text-neutral-900 text-sm"
                                data-nc-id="Label"
                              >
                                Card number
                              </label>
                              <input
                                type="text"
                                className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                                autoComplete="off"
                              />
                            </div>
                            <div className="max-w-lg">
                              <label
                                className="md:text-base font-medium text-neutral-900 text-sm"
                                data-nc-id="Label"
                              >
                                Name on Card
                              </label>
                              <input
                                type="text"
                                className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                                autoComplete="off"
                              />
                            </div>
                            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                              <div className="sm:w-2/3">
                                <label
                                  className="md:text-base font-medium text-neutral-900 text-sm"
                                  data-nc-id="Label"
                                >
                                  Expiration date (MM/YY)
                                </label>
                                <input
                                  type="text"
                                  className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                                  autoComplete="off"
                                  placeholder="MM/YY"
                                />
                              </div>
                              <div className="flex-1">
                                <label
                                  className="md:text-base font-medium text-neutral-900 text-sm"
                                  data-nc-id="Label"
                                >
                                  CVC
                                </label>
                                <input
                                  type="text"
                                  className="block w-full border border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                                  autoComplete="off"
                                  placeholder="CVC"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start space-x-4 sm:space-x-6">
                        <div className="flex items-center text-sm sm:text-base pt-3.5">
                          <input
                            id="Internet-banking"
                            name="payment-method"
                            type="radio"
                            className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-6 h-6"
                            value="Bkash"
                            checked={radioSelect === "Bkash"}
                            onChange={(e) => setRadioSelect(e.target.value)}
                          />
                        </div>
                        <div className="flex-1">
                          <label
                            htmlFor="Internet-banking"
                            className="flex items-center space-x-4 sm:space-x-6"
                          >
                            <div className="p-2.5 rounded-xl border-2 border-gray-200">
                              {/* <svg
                                className="w-6 h-6 sm:w-7 sm:h-7"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M15 3C16.95 8.84 16.95 15.16 15 21"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg> */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6 sm:w-7 sm:h-7"
                                viewBox="-20 -20 150 150"
                                fill="none"
                              >
                                <g fill="none">
                                  <path
                                    fill="#D12053"
                                    d="M96.58 62.45l-53.03-8.31 7.03 31.6z"
                                  />
                                  <path
                                    fill="#E2136E"
                                    d="M96.58 62.45L56.62 6.93 43.56 54.15z"
                                  />
                                  <path
                                    fill="#D12053"
                                    d="M42.32 53.51L.45 0l54.83 6.55z"
                                  />
                                  <path
                                    fill="#9E1638"
                                    d="M23.25 31.15L0 9.24h6.12z"
                                  />
                                  <path
                                    fill="#D12053"
                                    d="M107.89 35.46l-9.84 26.69L82.1 40.09z"
                                  />
                                  <path
                                    fill="#E2136E"
                                    d="M56.77 84.14l38.61-15.51L97 63.7z"
                                  />
                                  <path
                                    fill="#9E1638"
                                    d="M25.89 113.41l16.54-58.02 8.39 37.75z"
                                  />
                                  <path
                                    fill="#E2136E"
                                    d="M109.43 35.67l-4.06 11.02 14.64-.24z"
                                  />
                                </g>
                              </svg>
                            </div>
                            <p className="font-medium">Bkash</p>
                          </label>
                          <div
                            className={`${
                              radioSelect !== "Bkash" && "hidden"
                            } mt-6 mb-4`}
                          >
                            <p className="text-sm">
                              Your order will be delivered to you after you
                              transfer to:
                            </p>
                            <ul className="mt-3.5 text-sm text-slate-500 space-y-2">
                              <li>
                                <h3 className="text-base text-slate-800 font-semibold mb-1">
                                  ChisNghiax
                                </h3>
                              </li>
                              <li>
                                {" "}
                                Bank name:{" "}
                                <span className="text-slate-900 font-medium">
                                  Example Bank Name
                                </span>
                              </li>
                              <li>
                                {" "}
                                Account number:{" "}
                                <span className="text-slate-900 font-medium">
                                  555 888 777
                                </span>
                              </li>
                              <li>
                                {" "}
                                Sort code:{" "}
                                <span className="text-slate-900 font-medium">
                                  999
                                </span>
                              </li>
                              <li>
                                {" "}
                                IBAN:{" "}
                                <span className="text-slate-900 font-medium">
                                  IBAN
                                </span>
                              </li>
                              <li>
                                {" "}
                                BIC:{" "}
                                <span className="text-slate-900 font-medium">
                                  BIC/Swift
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start space-x-4 sm:space-x-6">
                        <div className="flex items-center text-sm sm:text-base pt-3.5">
                          <input
                            id="Internet-banking"
                            name="payment-method"
                            type="radio"
                            className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-6 h-6"
                            value="Nagad"
                            checked={radioSelect === "Nagad"}
                            onChange={(e) => setRadioSelect(e.target.value)}
                          />
                        </div>
                        <div className="flex-1">
                          <label
                            htmlFor="Internet-banking"
                            className="flex items-center space-x-4 sm:space-x-6"
                          >
                            <div className="p-2.5 rounded-xl border-2 border-gray-200">
                              <img
                                src="/social/Nagad.svg"
                                className="w-6 h-6 sm:w-7 sm:h-7"
                              />
                            </div>
                            <p className="font-medium">Nagad</p>
                          </label>
                          <div
                            className={`${
                              radioSelect !== "Nagad" && "hidden"
                            } mt-6 mb-4`}
                          >
                            <p className="text-sm">
                              Your order will be delivered to you after you
                              transfer to:
                            </p>
                            <ul className="mt-3.5 text-sm text-slate-500 space-y-2">
                              <li>
                                <h3 className="text-base text-slate-800 font-semibold mb-1">
                                  ChisNghiax
                                </h3>
                              </li>
                              <li>
                                {" "}
                                Bank name:{" "}
                                <span className="text-slate-900 font-medium">
                                  Example Bank Name
                                </span>
                              </li>
                              <li>
                                {" "}
                                Account number:{" "}
                                <span className="text-slate-900 font-medium">
                                  555 888 777
                                </span>
                              </li>
                              <li>
                                {" "}
                                Sort code:{" "}
                                <span className="text-slate-900 font-medium">
                                  999
                                </span>
                              </li>
                              <li>
                                {" "}
                                IBAN:{" "}
                                <span className="text-slate-900 font-medium">
                                  IBAN
                                </span>
                              </li>
                              <li>
                                {" "}
                                BIC:{" "}
                                <span className="text-slate-900 font-medium">
                                  BIC/Swift
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start space-x-4 sm:space-x-6">
                        <div className="flex items-center text-sm sm:text-base pt-3.5">
                          <input
                            id="Wallet"
                            name="payment-method"
                            type="radio"
                            className="focus:ring-action-primary text-primary-500 rounded-full border-slate-400 hover:border-slate-700 bg-transparent focus:ring-primary-500 w-6 h-6"
                            value="COD"
                            checked={radioSelect === "COD"}
                            onChange={(e) => setRadioSelect(e.target.value)}
                          />
                        </div>
                        <div className="flex-1">
                          <label
                            htmlFor="Wallet"
                            className="flex items-center space-x-4 sm:space-x-6 "
                          >
                            <div className="p-2.5 rounded-xl border-2 border-gray-200">
                              <svg
                                className="w-6 h-6 sm:w-7 sm:h-7"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M18.04 13.55C17.62 13.96 17.38 14.55 17.44 15.18C17.53 16.26 18.52 17.05 19.6 17.05H21.5V18.24C21.5 20.31 19.81 22 17.74 22H6.26C4.19 22 2.5 20.31 2.5 18.24V11.51C2.5 9.44001 4.19 7.75 6.26 7.75H17.74C19.81 7.75 21.5 9.44001 21.5 11.51V12.95H19.48C18.92 12.95 18.41 13.17 18.04 13.55Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M2.5 12.4101V7.8401C2.5 6.6501 3.23 5.59006 4.34 5.17006L12.28 2.17006C13.52 1.70006 14.85 2.62009 14.85 3.95009V7.75008"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M22.5588 13.9702V16.0302C22.5588 16.5802 22.1188 17.0302 21.5588 17.0502H19.5988C18.5188 17.0502 17.5288 16.2602 17.4388 15.1802C17.3788 14.5502 17.6188 13.9602 18.0388 13.5502C18.4088 13.1702 18.9188 12.9502 19.4788 12.9502H21.5588C22.1188 12.9702 22.5588 13.4202 22.5588 13.9702Z"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                                <path
                                  d="M7 12H14"
                                  stroke="currentColor"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </svg>
                            </div>
                            <p className="font-medium">Cash on Delivery</p>
                          </label>
                          <div
                            className={`${
                              radioSelect !== "COD" && "hidden"
                            } mt-6 mb-4 space-y-6`}
                          >
                            <div className="text-sm prose">
                              <p>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Itaque dolore quod quas fugit
                                perspiciatis architecto, temporibus quos ducimus
                                libero explicabo?
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex pt-6">
                      <button className="Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl w-full max-w-[240px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000">
                        Confirm order
                      </button>
                      <button
                        className="Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  bg-white text-slate-700 hover:bg-gray-100 ml-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
                        onClick={() => {
                          setShowContactInfo(true)
                          setShowShippingAddress(false)
                          setShowPaymentMethod(false)
                        }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 my-10 lg:my-0 lg:mx-10 xl:lg:mx-14 2xl:mx-16 "></div>
          <div className="w-full lg:w-[36%] ">
            <h3 className="text-lg font-semibold">Order summary</h3>
            <div className="mt-8 divide-y divide-slate-200/70 ">
              <div className="relative flex py-7 first:pt-0 last:pb-0">
                <div className="relative h-36 w-24 sm:w-28 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    alt="Rey Nylon Backpack"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="h-full w-full object-contain object-center"
                    sizes="150px"
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
                <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between ">
                      <div className="flex-[1.5] ">
                        <h3 className="text-base font-semibold">
                          <a href="/product-detail">Rey Nylon Backpack</a>
                        </h3>
                        <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600">
                          <div className="flex items-center space-x-1.5">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M8.35 1.94995L9.69 3.28992"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M2.07 11.92L17.19 11.26"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M3 22H16"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span>Black</span>
                          </div>
                          <span className="mx-4 border-l border-slate-200 "></span>
                          <div className="flex items-center space-x-1.5">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 9V3H15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M3 15V21H9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M21 3L13.5 10.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M10.5 13.5L3 21"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span>2XL</span>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-between w-full sm:hidden relative">
                          <select
                            name="qty"
                            id="qty"
                            className="form-select text-sm rounded-md py-1 border-slate-200 relative z-10 "
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                          </select>
                          <div className="">
                            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full">
                              <span className="text-green-500 !leading-none">
                                $74
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden flex-1 sm:flex justify-end">
                        <div className="mt-0.5">
                          <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                            <span className="text-green-500 !leading-none">
                              $74
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-auto pt-4 items-end justify-between text-sm">
                    <div className="hidden sm:block text-center relative">
                      <div className="flex items-center justify-between space-x-5 relative z-10">
                        <div className=" flex items-center justify-between w-[104px] sm:w-28">
                          <button
                            className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700  disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                            type="button"
                            disabled=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <span className="select-none block flex-1 text-center leading-none">
                            1
                          </span>
                          <button
                            className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700  disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <a
                      href="##"
                      className="relative z-10 flex items-center mt-3 font-medium text-primary-6000 hover:text-primary-500 text-sm "
                    >
                      <span>Remove</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative flex py-7 first:pt-0 last:pb-0">
                <div className="relative h-36 w-24 sm:w-28 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    alt="Waffle Knit Beanie"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="h-full w-full object-contain object-center"
                    sizes="150px"
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
                <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between ">
                      <div className="flex-[1.5] ">
                        <h3 className="text-base font-semibold">
                          <a href="/product-detail">Waffle Knit Beanie</a>
                        </h3>
                        <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600">
                          <div className="flex items-center space-x-1.5">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M8.35 1.94995L9.69 3.28992"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M2.07 11.92L17.19 11.26"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M3 22H16"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span>Black</span>
                          </div>
                          <span className="mx-4 border-l border-slate-200 "></span>
                          <div className="flex items-center space-x-1.5">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 9V3H15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M3 15V21H9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M21 3L13.5 10.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M10.5 13.5L3 21"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span>2XL</span>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-between w-full sm:hidden relative">
                          <select
                            name="qty"
                            id="qty"
                            className="form-select text-sm rounded-md py-1 border-slate-200 relative z-10 "
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                          </select>
                          <div className="">
                            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full">
                              <span className="text-green-500 !leading-none">
                                $132
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden flex-1 sm:flex justify-end">
                        <div className="mt-0.5">
                          <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                            <span className="text-green-500 !leading-none">
                              $132
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-auto pt-4 items-end justify-between text-sm">
                    <div className="hidden sm:block text-center relative">
                      <div className="flex items-center justify-between space-x-5 relative z-10">
                        <div className=" flex items-center justify-between w-[104px] sm:w-28">
                          <button
                            className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700  disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                            type="button"
                            disabled=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <span className="select-none block flex-1 text-center leading-none">
                            1
                          </span>
                          <button
                            className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700  disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <a
                      href="##"
                      className="relative z-10 flex items-center mt-3 font-medium text-primary-6000 hover:text-primary-500 text-sm "
                    >
                      <span>Remove</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative flex py-7 first:pt-0 last:pb-0">
                <div className="relative h-36 w-24 sm:w-28 flex-shrink-0 overflow-hidden rounded-xl bg-slate-100">
                  <img
                    alt="Travel Pet Carrier"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="h-full w-full object-contain object-center"
                    sizes="150px"
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
                <div className="ml-3 sm:ml-6 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between ">
                      <div className="flex-[1.5] ">
                        <h3 className="text-base font-semibold">
                          <a href="/product-detail">Travel Pet Carrier</a>
                        </h3>
                        <div className="mt-1.5 sm:mt-2.5 flex text-sm text-slate-600">
                          <div className="flex items-center space-x-1.5">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M7.01 18.0001L3 13.9901C1.66 12.6501 1.66 11.32 3 9.98004L9.68 3.30005L17.03 10.6501C17.4 11.0201 17.4 11.6201 17.03 11.9901L11.01 18.0101C9.69 19.3301 8.35 19.3301 7.01 18.0001Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M8.35 1.94995L9.69 3.28992"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M2.07 11.92L17.19 11.26"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M3 22H16"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span>Black</span>
                          </div>
                          <span className="mx-4 border-l border-slate-200 "></span>
                          <div className="flex items-center space-x-1.5">
                            <svg
                              className="w-4 h-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M21 9V3H15"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M3 15V21H9"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M21 3L13.5 10.5"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M10.5 13.5L3 21"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            <span>2XL</span>
                          </div>
                        </div>
                        <div className="mt-3 flex justify-between w-full sm:hidden relative">
                          <select
                            name="qty"
                            id="qty"
                            className="form-select text-sm rounded-md py-1 border-slate-200 relative z-10 "
                          >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                          </select>
                          <div className="">
                            <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium h-full">
                              <span className="text-green-500 !leading-none">
                                $28
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="hidden flex-1 sm:flex justify-end">
                        <div className="mt-0.5">
                          <div className="flex items-center border-2 border-green-500 rounded-lg py-1 px-2 md:py-1.5 md:px-2.5 text-sm font-medium">
                            <span className="text-green-500 !leading-none">
                              $28
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex mt-auto pt-4 items-end justify-between text-sm">
                    <div className="hidden sm:block text-center relative">
                      <div className="flex items-center justify-between space-x-5 relative z-10">
                        <div className=" flex items-center justify-between w-[104px] sm:w-28">
                          <button
                            className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700  disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                            type="button"
                            disabled=""
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                          <span className="select-none block flex-1 text-center leading-none">
                            1
                          </span>
                          <button
                            className="w-8 h-8 rounded-full flex items-center justify-center border border-neutral-400 bg-white focus:outline-none hover:border-neutral-700  disabled:hover:border-neutral-400 disabled:opacity-50 disabled:cursor-default"
                            type="button"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              aria-hidden="true"
                              className="w-4 h-4"
                            >
                              <path
                                fillRule="evenodd"
                                d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <a
                      href="##"
                      className="relative z-10 flex items-center mt-3 font-medium text-primary-6000 hover:text-primary-500 text-sm "
                    >
                      <span>Remove</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 text-sm text-slate-500 border-t border-slate-200/70 ">
              <div>
                <label
                  className="md:text-base font-medium text-neutral-900"
                  data-nc-id="Label"
                >
                  Discount code
                </label>
                <div className="flex mt-1.5">
                  <input
                    type="text"
                    className="block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-10 px-4 py-3 flex-1"
                  />
                  <button className="text-neutral-700 border border-neutral-200 hover:bg-neutral-100 rounded-2xl px-4 ml-3 font-medium text-sm bg-neutral-200/70 w-24 flex justify-center items-center transition-colors">
                    Apply
                  </button>
                </div>
              </div>
              <div className="mt-4 flex justify-between py-2.5">
                <span>Subtotal</span>
                <span className="font-semibold text-slate-900">$249.00</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span>Shipping estimate</span>
                <span className="font-semibold text-slate-900">$5.00</span>
              </div>
              <div className="flex justify-between py-2.5">
                <span>Tax estimate</span>
                <span className="font-semibold text-slate-900">$24.90</span>
              </div>
              <div className="flex justify-between font-semibold text-slate-900 text-base pt-4">
                <span>Order total</span>
                <span>$276.00</span>
              </div>
            </div>
            <button className="relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl mt-8 w-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000">
              Confirm order
            </button>
            <div className="mt-5 text-sm text-slate-500 flex items-center justify-center">
              <p className="block relative pl-5">
                <svg
                  className="w-4 h-4 absolute -left-1 top-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M12 8V13"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M11.9945 16H12.0035"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                Learn more{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="##"
                  className="text-slate-900 underline font-medium"
                >
                  Taxes
                </a>
                <span> and </span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="##"
                  className="text-slate-900 underline font-medium"
                >
                  Shipping
                </a>{" "}
                infomation
              </p>
            </div>
          </div>
        </div>
      </main>
    </Wrapper>
  )
}

export default CheckOut
