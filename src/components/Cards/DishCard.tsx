
import Rating from "@mui/material/Rating";

const DishCard = (data) => {
  const dishData = data.data;
  console.log(dishData);
  return (
    <div className="w-[344px] h-[637px] bg-gray-100 rounded-[60px] mb-[40px]">
      <div className="flex justify-center items-center mt-[25px] mb-[25px]">
        <img src={dishData.image} alt="" />
      </div>
      <div className="dish-info text-center flex flex-col justify-center items-center">
        <h2 className="font-semibold text-[30px]">{dishData.name}</h2>
        <Rating className="mt-[15px]" name="read-only" value={dishData.rating} readOnly />
        <p className="w-[283px] font-normal text-[14px] mt-[20px]">
          {dishData.description}{" "}
        </p>
      </div>
      <div className="price-order flex justify-between items-center mt-[30px] w-[272px] m-auto">
        <h2 className="font-semibold text-[25px]">${dishData.price}</h2>
        <button className="btn btn-warning bg-orange-400 hover:bg-orange-500  rounded-[163px] text-white w-[157px] mr-[12px] h-[55px] text-[16px]">
          Order now
        </button>
      </div>
    </div>
  );
};

export default DishCard;
