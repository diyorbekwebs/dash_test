import React from "react";
import { List } from "../../constant/list";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Arrowleft, Logout } from "../../assets/imgs/img";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    navigate("/"); 
  };

  return (
    <div className="pt-[20px] pb-[50px] pl-[30px] pr-[40px] bg-[#454545] w-[400px] h-[100vh] flex flex-col justify-between">
      <div className="flex flex-col gap-[38px]">
        <div className="flex gap-[12px] items-center text-[#fff] text-[28px]">
          <img src={Arrowleft} alt="Back" />
          Admin Dashboard
        </div>
        <ul className="flex flex-col gap-[8px]">
          {List?.map((e) => {
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
        onClick={handleLogout}
        className="flex gap-[12px] cursor-pointer items-center text-[#fff] text-[18px]"
      >
        <img src={Logout} alt="Logout Icon" />
        Log out
      </div>
    </div>
  );
}
