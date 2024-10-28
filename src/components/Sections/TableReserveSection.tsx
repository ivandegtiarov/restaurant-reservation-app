import { Link } from "react-router-dom";
import TableReservationImg from "../../assets/img/TableReservation.png";

const TableReserveSection = () => {
  return (
    <div className="feature-dish-container flex w-[100%] m-auto mt-[100px] justify-between items-center">
      <div className="dish-img-section select-none">
        <img className="w-[882px]" src={TableReservationImg} alt="" />
      </div>
      <div className="text-buttons-section mr-[240px] mt-[30px]">
        <div className="dish-description">
          <h2 className="dish-name text-[80px] font-bold w-[453px] leading-[88px] mt-[20px] font-[Tinos] ">
            Let's reserve{" "}
            <span className="text-orange-400 font-[Tinos]">a table</span>
          </h2>
          <h2 className="dish-info mt-[60px] text-[20px] w-[430px] text-[#5C4529] leading-[40px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam
          </h2>
        </div>
        <div className="dish-buttons-action flex mt-[60px]">
          <Link to="/reservation">
            <button className="btn btn-warning bg-orange-400 hover:bg-orange-500  rounded-[163px] text-white w-[233px] mr-[12px] h-[75px] text-[20px]">
              Reservation   
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TableReserveSection;
