import ChefCard from "../Cards/ChefCard";
import image1 from "../../assets/img/chefs/image1.png";
import image2 from "../../assets/img/chefs/image2.png";
import image3 from "../../assets/img/chefs/image3.png";
import { useState } from "react";

type Chef = {
  name: string;
  image: string;
  description: string;
};

const GreatestChefSection = () => {
  const [num, setNum] = useState<number>(3);

  const cards: Chef[] = [
    {
      name: "Betran Komar",
      image: image1,
      description: "Head chef",
    },
    {
      name: "Ferry Sauwi",
      image: image2,
      description: "Chef",
    },
    {
      name: "Iswan Dracho",
      image: image3,
      description: "Chef",
    },
    {
      name: "Alex Harper",
      image: image1,
      description: "Head chef",
    },
    {
      name: "Ivan Flock",
      image: image2,
      description: "Chef",
    },
    {
      name: "Jonas Wilder",
      image: image3,
      description: "Chef",
    },
  ];

  return (
    <div className="">
      <div className="chef-wrapper w-[1112px] m-auto">
        <div className="chef-title">
          <h2 className="text-[80px] font-bold leading-[88px] font-[Tinos] text-center mt-[170px]">
            Our greatest chef
          </h2>
        </div>
        <div className="chef-list flex flex-wrap justify-between mt-[100px]">
          {cards.map((value, i) => {
            if (i < num) {
              return (
                <ChefCard
                  key={i}
                  chefName={value.name}
                  image={value.image}
                  desc={value.description}
                />
              );
            }
          })}
        </div>
        <div className="view-all-chef-button flex items-center justify-center mt-[120px] mb-[150px]">
          {num == 3 ? (
            <button
              onClick={() => setNum(cards.length)}
              className="btn btn-warning bg-orange-400 hover:bg-orange-500 rounded-[163px] text-white w-[233px] mr-[12px] h-[75px] text-[20px]"
            >
              View all
            </button>
          ) : (
            <button
              onClick={() => setNum(3)}
              className="btn btn-warning bg-orange-400 hover:bg-orange-500 rounded-[163px] text-white w-[233px] mr-[12px] h-[75px] text-[20px]"
            >
              Hide
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GreatestChefSection;
