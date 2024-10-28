import DishCard from "../Cards/DishCard";
import data from "../../api/menu_items.js";
import { useContext, useEffect } from "react";
import { MenuContext } from "../../context/MenuContext.js";

const PopularMenuList = () => {
  const {
    setData,
    category,
    currentPage,
    setCurrentPage,
    postsPerPage,
  } = useContext(MenuContext);

  // Log data to ensure it's loaded correctly
  useEffect(() => {
    console.log("Data loaded:", data); // Debugging log
    setData(data);
    setCurrentPage(1); // Reset current page to 1
  }, [setData, setCurrentPage]);

  useEffect(() => {
    setCurrentPage(1); // Reset current page to 1 when category changes
  }, [category, setCurrentPage]);

  // Ensure data is defined and handle the filtering logic properly
  const newData =
    category === "All"
      ? data // Assuming data is defined and is an array
      : data?.filter((value) => value.category === category)

  // Check if newData is defined and an array before slicing
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = Array.isArray(newData) ? newData.slice(firstPostIndex, lastPostIndex) : [];

  return (
    <div className="menu-list mt-[60px] w-[1200px] m-auto flex flex-wrap justify-between">
      {currentPosts.map((value, i) => (
        <DishCard key={i} data={value} />
      ))}
    </div>
  );
};

export default PopularMenuList;
