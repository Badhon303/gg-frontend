import React from "react"

const ChangePassword = () => {
  return (
    <div className="max-w-4xl mx-auto pt-14 sm:pt-26 pb-24 lg:pb-32">
      <div className="space-y-10 sm:space-y-12">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Update your password
        </h2>
        <div className="max-w-xl space-y-6">
          <div>
            <label
              className="text-base font-medium text-neutral-900"
              data-nc-id="Label"
            >
              Current password
            </label>
            <input
              type="password"
              className="block w-full border border-neutral-200 focus:outline-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
            />
          </div>
          <div>
            <label
              className="nc-Label text-base font-medium text-neutral-900"
              data-nc-id="Label"
            >
              New password
            </label>
            <input
              type="password"
              className="block w-full border border-neutral-200 focus:outline-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white  disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
            />
          </div>
          <div>
            <label
              className="nc-Label text-base font-medium text-neutral-900"
              data-nc-id="Label"
            >
              Confirm password
            </label>
            <input
              type="password"
              className="block w-full border border-neutral-200 focus:outline-0 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200  rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1.5"
            />
          </div>
          <div className="pt-2">
            <button className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000">
              Update password
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
