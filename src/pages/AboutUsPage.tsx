import aboutUsOne from "./../assets/img/about-us-1.png";
import aboutUsTwo from "./../assets/img/about-us-2.png";
import aboutUsThree from "./../assets/img/about-us-3.png";

const AboutUsPage = () => {
  return (
    <>
      <div className="feature-dish-container flex w-[80%] m-auto mt-[100px] justify-between">
        <div className="dish-img-section">
          <img className="w-[700px]" src={aboutUsOne} alt="" />
        </div>
        <div className="text-buttons-section mr-[90px] mt-[30px]">
          <div className="dish-description">
            <h2 className="dish-name text-[80px] font-bold w-[408px] leading-[88px] mt-[20px] font-[Tinos]">
              <span className="text-orange-400 font-[Tinos]">Our </span>
              restaurant
            </h2>
            <h2 className="dish-info mt-[60px] text-[20px] w-[430px] text-[#5C4529] leading-[40px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse.
            </h2>
          </div>
        </div>
      </div>
      <div className="feature-dish-container flex w-[80%] m-auto justify-between items-center">
        <div className="text-buttons-section mr-[80px] mt-[30px]">
          <div className="dish-description ml-[100px]">
            <h2 className="dish-info mt-[60px] text-[20px] w-[430px] text-[#5C4529] leading-[40px]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit.
            </h2>
          </div>
        </div>
        <div className="dish-img-section">
          <img className="w-[700px]" src={aboutUsTwo} alt="" />
        </div>
      </div>
      <div className="feature-dish-container flex w-[80%] m-auto mt-[100px] justify-between mb-[100px]">
        <div className="dish-img-section">
          <img className="w-[700px]" src={aboutUsThree} alt="" />
        </div>
        <div className="text-buttons-section mt-[30px]">
          <div className="dish-description">
            <h2 className="dish-name text-[80px] font-bold w-[522px] leading-[88px] mt-[20px] font-[Tinos]">
              <span className="text-orange-400 font-[Tinos]">Owner </span>&
              Executive Chef
            </h2>
            <h2 className="dish-info mt-[60px] text-[40px] w-[430px] font-semibold  leading-[40px] text-Poppins">
              Ismail Marzuki
            </h2>
            <h2 className="dish-info mt-[60px] text-[30px] w-[430px] text-[#5C4529] leading-[40px] italic">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua."
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
