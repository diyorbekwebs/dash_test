import React, { useState } from "react";
import { List } from "../../constant/list";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Arrowleft, Logout } from "../../assets/imgs/img";

interface ListItem {
  id: number;
  title: string;
  link: string;
  icon: string;
}

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/");
  };

  return (
    <>
      <div className="fixed left-0 top-0 w-[400px] h-full bg-[#454545] flex flex-col justify-between pt-[20px] pb-[50px] pl-[30px] pr-[40px] overflow-y-auto">
        <div className="flex flex-col gap-[38px]">
          <div className="flex gap-[12px] items-center text-[#fff] text-[28px]">
            <img src={Arrowleft} alt="Back" />
            Admin Dashboard
          </div>
          <ul className="flex flex-col gap-[8px]">
            {List?.map((e: ListItem) => {
              const isActive =
                (e.link === "" && location.pathname === "/dash") ||
                location.pathname === `/dash/${e.link}`;

              return (
                <Link
                  key={e.id}
                  to={`/dash/${e.link}`}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg transition ${
                    isActive ? "bg-[#FFFFFF33]" : "hover:bg-[#FFFFFF33]"
                  }`}
                >
                  <li className="flex gap-[12px] items-center text-[#fff] text-[18px] w-[330px] pl-[12px] rounded-[8px]">
                    <img src={e.icon} alt={e.title} />
                    {e.title}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
        <div
          onClick={() => setShowPopup(true)}
          className="flex gap-[12px] cursor-pointer items-center text-[#fff] text-[18px]"
        >
          <img src={Logout} alt="Logout Icon" />
          Log out
        </div>
      </div>

      {/* Logout Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center w-[300px] animate-fade-in">
            <h2 className="text-xl font-semibold mb-4">Dashboarddan chiqasizmi?</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                Ha
              </button>
              <button
                onClick={() => setShowPopup(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition-all"
              >
                Yo‘q
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
