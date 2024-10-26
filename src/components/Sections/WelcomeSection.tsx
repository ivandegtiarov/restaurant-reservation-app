import { Link } from "react-router-dom";
import WelcomeDishImg from "../../assets/img/WelcomeDish.png";

const WelcomeSection = () => {
  return (
    <div className="feature-dish-container flex w-[80%] m-auto mt-[100px] justify-between">
      <div className="dish-img-section">
        <img className="w-[700px]" src={WelcomeDishImg} alt="" />
      </div>
      <div className="text-buttons-section mr-[90px] mt-[30px]">
        <div className="dish-description">
          <h2 className="dish-name text-[80px] font-bold w-[408px] leading-[88px] mt-[20px] font-[Tinos]">
            Welcome to{" "}
            <span className="text-orange-400 font-[Tinos]">delizioso</span>
          </h2>
          <h2 className="dish-info mt-[60px] text-[20px] w-[430px] text-[#5C4529] leading-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </h2>
        </div>
        <div className="dish-buttons-action flex mt-[60px]">
          <Link to="/menu">
            <button className="btn btn-warning bg-orange-400 hover:bg-orange-500  rounded-[163px] text-white w-[233px] mr-[12px] h-[75px] text-[20px]">
              See our menu
            </button>
          </Link>
        </div>
      </div>
    </div>
  );  
};

export default WelcomeSection;
