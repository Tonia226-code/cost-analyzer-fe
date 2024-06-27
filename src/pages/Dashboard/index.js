import React from "react";
// import { useNavigate } from "react-router-dom";
import logo from "../../assets/Logo.svg";
import search from "../../assets/Search.svg";
import caret from "../../assets/Chevron_Down.svg";
import calendar from "../../assets/calendar.svg";
import star from "../../assets/Star.svg";
import star_checked from "../../assets/Star_checked.svg";
import star_unchecked from "../../assets/Star_unchecked.svg";
import bell from "../../assets/Notification_Bell.svg";
import snowflake from "../../assets/Snowflake_Logo.svg";

const Dashboard = () => {
  // const navigate = useNavigate();

  return (
    <div className="text-white-200">
      <div className="bg-blue-500 flex justify-between px-8 py-2 items-center">
        <div className="flex gap-2.5 items-center">
          <img className="w-[46px]" src={logo} alt="Logo" />
          <div className="font-semibold text-[28px]">CloudCostIQ</div>
        </div>
        <img
          src={bell}
          alt="notification bell"
          className="cursor-not-allowed"
        />
      </div>

      {/* Main contents */}
      <div className="flex bg-blue-500 p-4 m-4 gap-8 rounded-2xl">
        {/* LHS */}
        <div className="w-3/5">
          {/* Metrics */}
          <div
            className="flex gap-6 p-6 border border-grey-300 rounded-2xl bg-cover bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${require("../../assets/HeaderImage.png")})`,
            }}
          >
            <div className="bg-blue-500 bg-opacity-85 rounded-xl py-6 pl-6 pr-24">
              <div className="flex gap-4 items-center">
                <img src={snowflake} alt="" />
                <div className="text-[20px] font-semibold">Snowflake ML/AI</div>
              </div>

              <div className="text-[16px] mt-6">
                TOTAL COST <span className="text-[10px]">(Per Month)</span>
              </div>
              <div className="text-4xl font-semibold mt-2.5">$32,532.74</div>
            </div>

            <div className="bg-blue-500 px-6 pt-8 bg-opacity-85 rounded-xl text-grey-200 flex flex-col items-center cursor-not-allowed">
              <div className="text-[60px] font-semibold">+</div>
              <div className="text-xs -mt-2">Connect More Services</div>
            </div>
          </div>

          {/* Main Table */}
          <div className="mt-4 flex items-center justify-between text-grey-150 text-[12px]">
            {/* Search */}
            <div className="border border-grey-300 rounded-lg bg-blue-250 flex gap-2 items-center py-1.5 w-[340px]">
              <img src={search} alt="" className="ml-2" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-blue-250 w-[300px] focus:outline-none"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-6">
              <div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                    id="hide_costs"
                  />
                  <label htmlFor="hide_costs" className="cursor-pointer">
                    Hide small costs
                  </label>
                </div>
              </div>

              <div className="flex items-center gap-2 border border-grey-300 px-2 py-1.5 rounded-lg">
                <img src={star} alt="" className="cursor-pointer" />
                <div className="cursor-pointer">Watchlist</div>
              </div>

              <div className="flex items-center gap-2 border border-grey-300 px-2 py-1.5 rounded-lg">
                <img src={calendar} alt="" className="cursor-pointer" />
                <div className="cursor-pointer">Monthly</div>
                <img src={caret} alt="" className="cursor-pointer" />
              </div>
            </div>
          </div>

          {/* Main table */}
          <div>
            <div className="w-full mt-5">
              <div className="flex items-center text-grey-150 bg-blue-250 font-semibold w-full text-[14px]">
                <div className="w-[45%] py-2 pl-4">Process</div>
                <div className="w-[20%] py-2">Usage</div>
                <div className="w-[15%] py-2">Cost</div>
                <div className="w-[15%] py-2">Status</div>
                <div className="w-[5%] py-2">
                  <img src={star} alt="" />
                </div>
              </div>

              <div className="w-full mt-2">
                <div className="bg-blue-270 text-[14px] flex w-full items-center rounded-lg">
                  <div className="w-[45%] py-2.5 pl-4 mt-2">
                    OXYGEN mc-sendsms
                  </div>
                  <div className="w-[20%]">807.44 GB</div>
                  <div className="w-[15%]">$1,614.88</div>
                  <div className="w-[15%]">
                    <div className="flex gap-2 items-center border border-grey-300 rounded-lg px-3 py-1 w-[80%] text-[12px]">
                      <div className="w-2 h-2 bg-yellow-100 rounded-full"></div>
                      <div>High</div>
                    </div>
                  </div>
                  <div className="w-[5%]">
                    <img src={star_unchecked} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RHS */}
        <div className="w-2/5 rounded-2xl border border-grey-300 p-5">
          <div className="text-[20px] font-semibold">Top 10 Costs</div>
          {/* Cumulative */}
          <div className="mt-4 bg-blue-250 rounded-lg px-4 py-2.5 text-grey-200">
            <div className="flex items-center justify-between">
              <div className="text-[14px]">Cumulative Usage:</div>
              <div className="font-semibold">13,931.75GB</div>
            </div>

            <div className="flex items-center justify-between mt-1">
              <div className="text-[14px]">Cumulative Amount:</div>
              <div className="font-semibold">$27,966.27</div>
            </div>
          </div>

          {/* Multiline Chart */}
          <div className="font-semibold text-[12px] text-grey-200 mt-6 px-5 w-full">
            <div className="flex items-center justify-between">
              <div className="w-[15%]">Critical</div>
              <div className="flex items-center w-[70%]">
                <div className="bg-red-100 w-[30%] h-1.5 rounded-l-full"></div>
                <div className="bg-blue-250 w-[70%] h-1.5 rounded-r-full"></div>
              </div>
              <div className="w-[15%] text-right">3 of 10</div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="w-[15%]">High</div>
              <div className="flex items-center w-[70%]">
                <div className="bg-yellow-100 w-[50%] h-1.5 rounded-l-full"></div>
                <div className="bg-blue-250 w-[50%] h-1.5 rounded-r-full"></div>
              </div>
              <div className="w-[15%] text-right">5 of 10</div>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="w-[15%]">Normal</div>
              <div className="flex items-center w-[70%]">
                <div className="bg-green-100 w-[20%] h-1.5 rounded-l-full"></div>
                <div className="bg-blue-250 w-[80%] h-1.5 rounded-r-full"></div>
              </div>
              <div className="w-[15%] text-right">2 of 10</div>
            </div>
          </div>

          {/* Top 10 Table */}
          <div className="w-full mt-8">
            <div className="flex items-center text-grey-150 bg-blue-250 font-semibold w-full text-[14px]">
              <div className="w-[55%] py-2 pl-4">
                Process <span className="text-[12px]">(Usage)</span>
              </div>
              <div className="w-[25%] py-2">Cost</div>
              <div className="w-[20%] py-2">Status</div>
            </div>

            <div className="w-full">
              <div className="bg-grey-250 bg-opacity-20 text-[12px] flex w-full items-center border-b border-grey-300">
                <div className="w-[55%] py-2 pl-4">
                  <div className="">OXYGEN mc-sendsms</div>
                  <div className="text-[10px] mt-0.5 text-grey-250">
                    807.44 GB
                  </div>
                </div>
                <div className="w-[25%]">$1,614.88</div>
                <div className="w-[20%]">
                  <div className="text-red-100">Critical</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
