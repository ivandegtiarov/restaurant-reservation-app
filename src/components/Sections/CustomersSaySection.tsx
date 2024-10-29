import firstImg from "../../assets/img/Ellipse 16.png";

const CustomersSaySection = () => {
  return (
    <div className="h-[1384px] flex items-center flex-col justify-center">
      <div className="title">
        <h2 className="font-[Tinos] text-[80px] text-center">Our customers say</h2>
      </div>
      <div className="customer-review flex items-center flex-col justify-center mt-[50px]">
        <div className="img">
          <img src={firstImg} alt="" />
        </div>
        <div className="user-data mt-[40px]">
          <h2 className="text-[30px] font-semibold">Starla Virgoun</h2>
          <h3 className="text-center text-[20px]">Financial advisor</h3>
        </div>
        <div className="review mt-[90px] w-[524px]">
          <p className="text-center text-[20px]">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
            ultricies at eleifend proin. Congue nibh nulla malesuada ultricies
            nec quam"{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomersSaySection;
