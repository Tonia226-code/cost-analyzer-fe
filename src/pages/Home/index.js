import React from "react";
import { useNavigate } from "react-router-dom";
import illustration from "../../assets/Illustration.svg";
import logo from "../../assets/Logo.svg";
import caret from "../../assets/chevron_right.svg";

const Home = () => {
  const navigate = useNavigate();

  function handleclick() {
    navigate("/dashboard");
  }

  return (
    <div className="bg-gradient-to-t from-blue-300 to-blue-200 h-screen px-24">
      <header className="text-white-100 font-semibold mb-3 text-left flex items-center gap-2 pt-6">
        <img className="" src={logo} alt="Logo" />
        <div className="text-[40px]">CloudCostIQ</div>
      </header>
      <hr className="border border-grey-100 "></hr>
      <div className="flex justify-between items-center pt-28">
        <div className="w-[45%]">
          <div className="text-white-100 font-semibold text-7xl">
            Cloud Infrastructure Cost Analyzer
          </div>
          <p className="text-white-100 text-lg py-8">
            Optimize Your Spending with Real-Time Insights and Smart
            Recommendations
          </p>
          <button
            onClick={handleclick}
            className="text-white-100  px-6 py-2.5  rounded-md  bg-blue-100  hover:bg-green-100 flex gap-3 items-center"
          >
            <div className="text-lg">Get Started</div>
            <img src={caret} alt="" />
          </button>
        </div>
        <img className="w-2/5" src={illustration} alt="Cloud illustration"/>
      </div>
    </div>
  );
};

export default Home;
