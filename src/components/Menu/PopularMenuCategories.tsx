import { useContext, useState } from "react";
import { MenuContext } from "../../context/MenuContext";

const PopularMenuCategories = () => {
  const arr = ["All", "Dinner", "Lunch", "Desert", "Drink"];
  const { category, setCategory } = useContext(MenuContext);

  return (
    <div className="flex w-[1200px] m-auto justify-between mt-[60px]">
      {arr.map((value, i) => {
        return (
          <div
            onClick={() => setCategory(value)}
            className={`category-element ${
              category == value ? "bg-slate-800 text-white" : "bg-slate-100"
            } w-[200px] h-[75px] flex items-center justify-center rounded-[40px] bg-slate-100 cursor-pointer font-bold`}
          >
            <h2>{value}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default PopularMenuCategories;
