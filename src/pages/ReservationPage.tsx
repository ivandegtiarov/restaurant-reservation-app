import reservationImg from ".././assets/img/Reservation-img.png";

const ReservationPage = () => {
  return (
    <div className="feature-dish-container flex w-[100%] m-auto justify-between">
      <div className="dish-img-section">
        <img className="" src={reservationImg} alt="" />
      </div>
      <div className="text-buttons-section mt-[30px] flex flex-col items-center justify-center mr-[220px]">
        <div className="title">
          <h2 className="text-[80px] font-[Tinos] font-bold">Book a table</h2>
        </div>
        <div className="inputs flex flex-col justify-center items-center">
          <select className="select bg-gray-100 w-[475px] h-[100px] rounded-xl m-[20px]">
            <option disabled selected>
              Date
            </option>
            <option>24.11.2024</option>
            <option>25.11.2024</option>
          </select>
          <select className="select bg-gray-100 w-[475px] h-[100px] rounded-xl m-[20px]">
            <option disabled selected>
              Time
            </option>
            <option>14:00</option>
            <option>15:00</option>
            <option>16:00</option>
            <option>20:00</option>
            <option>20:15</option>
          </select>
          <select className="select bg-gray-100 w-[475px] h-[100px] rounded-xl m-[20px]">
            <option disabled selected>
              Party size
            </option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>More than 5</option>
          </select>

          <button className="btn btn-warning bg-orange-400 hover:bg-orange-500  rounded-[10px] text-white w-[475px] mr-[12px] h-[75px] text-[20px]">
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
