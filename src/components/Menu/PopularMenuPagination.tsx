import { useContext, useEffect } from "react";
import { MenuContext } from "../../context/MenuContext";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const PopularMenuPagination = () => {
  const { data, currentPage, setCurrentPage, postsPerPage } =
    useContext(MenuContext);
  let pages = [];

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
    if(currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }else {
      setCurrentPage(1)
    }
  }
  console.log(currentPage);

  return (
    <div className="text-center flex justify-center items-center">
      <FaArrowLeft
        className="cursor-pointer"
        onClick={handlePreviousPage}
      />
      {pages.map((page, i) => {
        return (
          <button
            onClick={() => setCurrentPage(page)}
            key={i}
            className={`m-[10px] p-[10px] rounded-[20px] select-none ${
              page == currentPage ? "bg-slate-300" : "bg-slate-100"
            }`}
          >
            {page}
          </button>
        );
      })}
      <FaArrowRight
        className="cursor-pointer"
        onClick={handleNextPage}
      />
    </div>
  );
};

export default PopularMenuPagination;
