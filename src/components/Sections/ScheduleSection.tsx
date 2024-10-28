import scheduleImg from "../../assets/img/schedule.png";

const ScheduleSection = () => {
  return (
    <div className="flex justify-center items-center h-[800px]">
      <div className="img-block absolute z-1">
        <img src={scheduleImg} alt="" />
      </div>
      <div className="text-section z-49 relative text-white text-center">
        <div className="days text-center">
          <h2 className="text-[80px] font-bold leading-[88px] mt-[20px] font-[Tinos] ">
            We are open from
          </h2>
          <h3 className="font-[Poppins] font-semibold text-[40px] mt-[40px]">
            Monday-Sunday
          </h3>
          <p className="w-[300px] m-auto  mt-[40px]">
            Launch : Mon-Sun : 11:00am-02:00pm Dinner : sunday : 04:00pm-08:00pm
            04:00pm-09:00pm
          </p>
        </div>
        <div className="buttons-text  mt-[40px]">
          <button className="btn btn-warning bg-orange-400 hover:bg-orange-500  rounded-[163px] text-white w-[233px] mr-[12px] h-[75px] text-[20px]">
            Order now
          </button>
          <button className="btn btn-neutral bg-white hover:bg-slate-200  rounded-[163px] text-black w-[233px] mr-[12px] h-[75px] text-[20px]">
            Reservation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
