import React from "react";

const ChefCard = ({ chefName, image, desc }) => {
  return (
    <div className="w-[344px] mt-[30px]">
      <div className="rounded-[70px] overflow-hidden"> {/* Make sure the image doesn't overflow */}
        <img
          className="transform transition duration-300 ease-in-out hover:scale-110"
          src={image}
          alt=""
        />
      </div>
      <div className="chef-description text-center ">
        <h2 className="font-poppins font-semibold text-[25px] mt-[40px]">
          {chefName}
        </h2>
        <h3 className="font-poppins font-normal text-[25px] mt-[30px] text-[#A08D76]">
          {desc}
        </h3>
      </div>
    </div>
  );
};

export default ChefCard;