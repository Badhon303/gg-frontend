import { useState } from "react"
import Wrapper from "@/components/Wrapper"
import AccountInfo from "@/components/AccountInfo"
import WishList from "@/components/WishList"
import MyOrder from "@/components/MyOrder"
import ChangePassword from "@/components/ChangePassword"
import ChangeBilling from "@/components/ChangeBilling"

const Account = () => {
  const [currentTab, setCurrentTab] = useState("1")
  const tabs = [
    {
      id: 1,
      tabTitle: "Account Info",
      content: <AccountInfo />,
    },
    {
      id: 2,
      tabTitle: "Wish lists",
      content: <WishList />,
    },
    {
      id: 3,
      tabTitle: "My order",
      content: <MyOrder />,
    },
    {
      id: 4,
      tabTitle: "Change password",
      content: <ChangePassword />,
    },
    {
      id: 5,
      tabTitle: "Change Billings",
      content: <ChangeBilling />,
    },
  ]
  const handleTabClick = (e) => {
    setCurrentTab(e.target.id)
  }
  return (
    <Wrapper>
      <div className="mt-14 sm:mt-20">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl xl:text-4xl font-semibold">Account</h2>
            <span className="block mt-4 text-neutral-500  text-base sm:text-lg">
              <span className="text-slate-900  font-semibold">
                Enrico Cole,
              </span>{" "}
              ciseco@gmail.com · Los Angeles, CA
            </span>
          </div>
          <hr className="mt-10 border-slate-200 " />
          {/* border-neutral-950 font-medium text-slate-900 */}
          <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                id={tab.id}
                className={`block py-5 md:py-8 border-b-2 flex-shrink-0 text-sm sm:text-base ${
                  currentTab === `${tab.id}`
                    ? "border-neutral-950 font-medium text-slate-900"
                    : "border-transparent text-slate-500 hover:text-slate-800"
                } `}
                onClick={handleTabClick}
              >
                {tab.tabTitle}
              </button>
            ))}
            {/* <a
              className="block py-5 md:py-8 border-b-2 flex-shrink-0 text-sm sm:text-base border-transparent text-slate-500  hover:text-slate-800"
              href="/account"
            >
              Account info
            </a> */}
          </div>
          <hr className="border-slate-200" />
        </div>
      </div>
      {tabs.map((tab) => (
        <div key={tab.id}>
          {currentTab === `${tab.id}` && <>{tab.content}</>}
        </div>
      ))}
    </Wrapper>
  )
}

export default Account
