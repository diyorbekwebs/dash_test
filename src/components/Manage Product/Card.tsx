import React, { useState } from "react";
import { Edit2, Trash } from "../../assets/imgs/img";
import axios from "axios";

interface CardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  desc: string;
  deletefunc: (id: string) => void;
  updatefunc: (
    id: string,
    updatedProduct: { name?: string; price?: string }
  ) => void;
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

  const handleDelete = async () => {
    if (window.confirm(`Delete product with id: ${id}?`)) {
      try {
        await axios.delete(
          `https://67e467d12ae442db76d4529c.mockapi.io/Products/${id}`
        );
        deletefunc(id);
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `https://67e467d12ae442db76d4529c.mockapi.io/Products/${id}`,
        {
          name: newName,
          price: newPrice,
        }
      );
      updatefunc(id, { name: newName, price: newPrice });
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-[32px] pt-[11px] pb-[28px] pr-[16px] pl-[27px]">
      <img className="w-[173px] h-[216px] rounded-lg" src={image} alt={name} />
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
                  onClick={handleDelete}
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
              onChange={(e) => setNewPrice(e.target.value)}
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
