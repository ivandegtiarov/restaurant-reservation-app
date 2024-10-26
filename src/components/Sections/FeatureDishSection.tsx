import { Link } from "react-router-dom";
import dishImg from "../../assets/img/FeatureDish.png";

const FeatureDishSection = () => {
  return (
    <div className="feature-dish-container flex w-[80%] m-auto mt-[100px] justify-between">
      <div className="text-buttons-section ml-[120px]">
        <div className="dish-description">
          <h2 className="dish-type text-orange-400 bg-orange-100 w-[153px] text-center h-[40px] flex items-center justify-center rounded-3xl">
            Restaurant
          </h2>
          <h2 className="dish-name text-[80px] font-bold w-[288px] leading-[88px] mt-[20px]">
            Italian Cuisine
          </h2>
          <h2 className="dish-info mt-[30px] text-[20px] w-[523px] text-[#5C4529]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sodales
            senectus dictum arcu sit tristique donec eget.
          </h2>
        </div>
        <div className="dish-buttons-action flex mt-[74px]">
          <Link to="/order-online">
            <button className="btn btn-warning bg-orange-400 hover:bg-orange-500  rounded-[163px] text-white w-[233px] mr-[12px] h-[75px] text-[20px]">
              Order now
            </button>
          </Link>
          <Link to="/reservation">
            <button className="btn btn-success bg-green-500 rounded-[163px]  text-white w-[233px] ml-[12px] h-[75px] text-[20px]">
              Reservation
            </button>
          </Link>
        </div>
      </div>
      <div className="dish-img-section">
        <img className="w-[700px]" src={dishImg} alt="" />
      </div>
    </div>
  );
};

export default FeatureDishSection;
