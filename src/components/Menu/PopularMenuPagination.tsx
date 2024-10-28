import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import arrowLeft from "../../assets/img/Left arrow.png";
import arrowRight from "../../assets/img/Right arrow.png";

const PopularMenuPagination = () => {
  const { data, currentPage, setCurrentPage, postsPerPage } =
    useContext(MenuContext);
  const pages = [];

  for (let i = 1; i <= Math.ceil(data.length / postsPerPage); i++) {
    pages.push(i);
  }

  const totalPages = Math.ceil(data.length / postsPerPage);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(totalPages);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    } else {
      setCurrentPage(1);
    }
  };
  console.log(currentPage);

  if (currentPage <= 3) {
    pages[pages.length - 2] = "...";
  } else if (currentPage >= -3) {
    pages[pages.length - pages.length + 1] = "...";
  }

  return (
    <div className="text-center flex justify-center items-center">
      <img
        src={arrowLeft}
        className="cursor-pointer mr-[15px]"
        onClick={handlePreviousPage}
        alt=""
      />
      {pages.map((page, i) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            key={i}
            className={`m-[10px] w-[55px] h-[55px] p-[10px] rounded-[20px] select-none text-[#FF8A00] font-bold text-[16px]
${page == currentPage ? "bg-orange-200" : "bg-orange-100"}`}
            disabled={page === "..."}
          >
            {page}
          </button>
        );
      })}
      <img
        src={arrowRight}
        alt=""
        className="cursor-pointer ml-[15px]"
        onClick={handleNextPage}
      />
    </div>
  );
};

export default PopularMenuPagination;
