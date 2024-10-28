import { useContext } from "react";
import DishCard from "../Cards/DishCard";
import PopularMenuCategories from "./PopularMenuCategories";
import PopularMenuList from "./PopularMenuList";
import PopularMenuPagination from "./PopularMenuPagination";
import { MenuContext } from "../../context/MenuContext";

const PopularMenuSection = () => {
  const { category } = useContext(MenuContext);
  return (
    <div className="mt-[120px]">
      <div className="title">
        <h2 className="text-[80px] font-bold leading-[88px] mt-[20px] font-[Tinos] text-center">
          Our popular menu
        </h2>
      </div>
      <PopularMenuCategories />
      <PopularMenuList />
      {category === "All" ? <PopularMenuPagination /> : ""}
    </div>
  );
};

export default PopularMenuSection;
