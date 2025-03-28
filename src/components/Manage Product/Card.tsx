import React, { useState } from "react";
import { Edit2, Trash } from "../../assets/imgs/img";
import { Product } from "../../app/features/productApi";

interface CardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
  deletefunc: () => void;
  updatefunc: (updatedData: Partial<Product>) => void; // ✅ Endi xato chiqmaydi
}

const Card: React.FC<CardProps> = ({
  id,
  name,
  price,
  image,
  desc,
  deletefunc,
  updatefunc,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newPrice, setNewPrice] = useState(price);

  const handleSave = () => {
    updatefunc({ name: newName, price: newPrice });
    setIsEditing(false);
  };

  return (
    <div className="flex  flex-col items-center justify-center gap-[32px] pt-[11px] pb-[28px] pr-[16px] pl-[27px]">
      <img
        className="w-[173px] h-[216px] rounded-lg"
        src="https://frankfurt.apollo.olxcdn.com/v1/files/79ronmamp42f-UZ/image;s=800x800"
        alt={name}
      />
      <div className="flex flex-col items-start gap-[24px]">
        {!isEditing ? (
          <>
            <p className="w-[227px] text-[20px] font-light">
              {name + " " + desc}
            </p>
            <div className="flex gap-[91px] items-end">
              <div>
                <p className="text-[12px] line-through text-gray-500">
                  {price}
                </p>
                <p className="text-[20px] font-bold text-[#454545]">{price}</p>
              </div>
              <div>
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-[55px] h-[33px] py-[5px] px-[15px] bg-[#ffffff] border-[1px] border-[#000] rounded-[100px] cursor-pointer mr-[10px]"
                >
                  <img src={Edit2} alt="Edit" />
                </button>
                <button
                  onClick={deletefunc}
                  className="w-[55px] h-[33px] py-[5px] px-[15px] bg-[#454545] cursor-pointer rounded-[100px]"
                >
                  <img src={Trash} alt="Delete" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-3 animate-fade-in">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-[227px] p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 transition-all"
            />
            <input
              type="text"
              value={newPrice}
              onChange={(e) => setNewPrice(Number(e.target.value))}
              className="w-[227px] p-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 transition-all"
            />
            <button
              onClick={handleSave}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
            >
              Save
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
