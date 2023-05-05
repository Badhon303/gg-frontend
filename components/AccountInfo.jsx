import { HiOutlineMail } from "react-icons/hi"
import { RxCalendar } from "react-icons/rx"
import { TbLocation } from "react-icons/tb"
import { FiPhoneCall } from "react-icons/fi"

const AccountInfo = () => {
  return (
    <div className="max-w-4xl mx-auto pt-14 sm:pt-26 pb-24 lg:pb-32">
      <div className="space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Account infomation
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="flex-shrink-0 flex items-start">
            <div className="relative rounded-full overflow-hidden flex">
              <img
                alt="avatar"
                loading="lazy"
                width="128"
                height="128"
                decoding="async"
                data-nimg="1"
                className="w-32 h-32 rounded-full object-cover z-0"
                src="/gadget-1.webp"
                style={{ color: "transparent" }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <span className="mt-1 text-xs">Change Image</span>
              </div>
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer focus:outline-0"
              />
            </div>
          </div>
          <div className="flex-grow mt-10 md:mt-0 md:pl-16 max-w-3xl space-y-6">
            <div>
              <label
                className=" text-base font-medium text-neutral-900 "
                data-nc-id="Label"
              >
                Full name
              </label>
              <input
                type="text"
                className="block w-full border border-neutral-200 focus:border-primary-300 focus:outline-0 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200  rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
                value="Enrico Cole"
              />
            </div>
            <div>
              <label
                className="text-base font-medium text-neutral-900 "
                data-nc-id="Label"
              >
                Email
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 bg-neutral-50 text-neutral-500  text-sm">
                  <HiOutlineMail size={24} />
                </span>
                <input
                  type="text"
                  className="block w-full border border-neutral-200 focus:outline-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  placeholder="example@email.com"
                />
              </div>
            </div>
            <div className="max-w-lg">
              <label
                className=" text-base font-medium text-neutral-900"
                data-nc-id="Label"
              >
                Date of birth
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 bg-neutral-50 text-neutral-500 text-sm">
                  <RxCalendar size={24} />
                </span>
                <input
                  type="date"
                  className="block w-full border border-neutral-200 focus:outline-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  value="1990-07-22"
                />
              </div>
            </div>
            <div>
              <label
                className=" text-base font-medium text-neutral-900"
                data-nc-id="Label"
              >
                Addess
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 bg-neutral-50 text-neutral-500 text-sm">
                  <TbLocation size={24} />
                </span>
                <input
                  type="text"
                  className="block w-full border border-neutral-200 focus:outline-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  value="New york, USA"
                />
              </div>
            </div>
            <div>
              <label
                className=" text-base font-medium text-neutral-900"
                data-nc-id="Label"
              >
                Gender
              </label>
              <select className="px-4 h-11 mt-1.5 block w-full text-sm rounded-2xl border focus:outline-0 border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label
                className=" text-base font-medium text-neutral-900"
                data-nc-id="Label"
              >
                Phone number
              </label>
              <div className="mt-1.5 flex">
                <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200  bg-neutral-50  text-neutral-500  text-sm">
                  <FiPhoneCall size={24} />
                </span>
                <input
                  type="text"
                  className="block w-full border border-neutral-200 focus:outline-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 !rounded-l-none"
                  value="003 888 232"
                />
              </div>
            </div>
            <div>
              <label
                className=" text-base font-medium text-neutral-900 "
                data-nc-id="Label"
              >
                About you
              </label>
              <textarea
                className="p-4 block w-full text-sm rounded-2xl border border-neutral-200 focus:outline-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white"
                rows="4"
              >
                ...
              </textarea>
            </div>
            <div className="pt-2">
              <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900  hover:bg-slate-800 text-slate-50 shadow-xl  focus:outline-0 focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000">
                Update account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountInfo
