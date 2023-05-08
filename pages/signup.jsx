import Wrapper from "@/components/Wrapper"
import Link from "next/link"

const SignUp = () => {
  return (
    <Wrapper>
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 justify-center">
          Sign Up
        </h2>
        <div className="max-w-md mx-auto space-y-6">
          <div className="grid gap-3">
            <a
              href="#"
              className="flex w-full rounded-lg bg-slate-50 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                alt="Continue with Facebook"
                loading="lazy"
                width="18"
                height="17"
                decoding="async"
                data-nimg="1"
                className="flex-shrink-0"
                src="/social/Facebook.3410d0e9.svg"
                style={{ color: "transparent" }}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 sm:text-sm">
                Continue with Facebook
              </h3>
            </a>
            <a
              href="#"
              className="flex w-full rounded-lg bg-slate-50 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                alt="Continue with Twitter"
                loading="lazy"
                width="21"
                height="18"
                decoding="async"
                data-nimg="1"
                className="flex-shrink-0"
                src="/social/Twitter.d7b3f400.svg"
                style={{ color: "transparent" }}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 sm:text-sm">
                Continue with Twitter
              </h3>
            </a>
            <a
              href="#"
              className="flex w-full rounded-lg bg-slate-50 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
            >
              <img
                alt="Continue with Google"
                loading="lazy"
                width="17"
                height="18"
                decoding="async"
                data-nimg="1"
                className="flex-shrink-0"
                src="/social/Google.6e524499.svg"
                style={{ color: "transparent" }}
              />
              <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 sm:text-sm">
                Continue with Google
              </h3>
            </a>
          </div>
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white">
              OR
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 border border-neutral-100"></div>
          </div>
          <form className="grid grid-cols-1 gap-6" action="#" method="post">
            <label className="block">
              <span className="text-neutral-800">Email address</span>
              <input
                type="email"
                className="block w-full border focus:outline-0 border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                placeholder="example@example.com"
              />
            </label>
            <label className="block">
              <span className="flex justify-between items-center text-neutral-800">
                Password
              </span>
              <input
                type="password"
                className="block w-full border focus:outline-0 border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white disabled:bg-neutral-200 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
              />
            </label>
            <button
              className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium py-3 px-4 sm:py-3.5 sm:px-6  ttnc-ButtonPrimary disabled:bg-opacity-90 bg-slate-900 hover:bg-slate-800 text-slate-50 shadow-xl  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
              type="submit"
            >
              Continue
            </button>
          </form>
          <span className="block text-center text-neutral-700">
            Already have an account?{" "}
            <Link className="text-green-600" href="/login">
              Sign In
            </Link>
          </span>
        </div>
      </div>
    </Wrapper>
  )
}

export default SignUp
