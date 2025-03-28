import React, { useState } from "react";
import { useAddProductMutation } from "../../app/features/productApi";

export default function Create() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    image: "",
    category: "",
    desc: "",
  });

  const [addProduct] = useAddProductMutation();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addProduct({ ...formData, price: Number(formData.price) }).unwrap();
      alert("Muvaffaqiyatli qo'shildi!");
      setFormData({ name: "", price: "", image: "", category: "", desc: "" });
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };
  

  return (
    <div className="w-full pt-[22px] pl-[32px] ml-[400px] p-4 flex flex-col gap-4">
      <h2 className="text-2xl font-semibold mb-4">Create Product</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <label className="block text-[16px] text-[#4C4C4C]">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-[620px] h-[64px] px-3 py-2 border-[1px] rounded-lg bg-[#F8F8F8] border-[#F8F8F8]"
            required
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label className="block text-[16px] text-[#4C4C4C]">Price</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="w-[620px] h-[64px] px-3 py-2 border-[1px] rounded-lg bg-[#F8F8F8] border-[#F8F8F8]"
            required
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label className="block text-[16px] text-[#4C4C4C]">Image URL</label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-[620px] h-[64px] px-3 py-2 border-[1px] rounded-lg bg-[#F8F8F8] border-[#F8F8F8]"
            required
          />
        </div>
        <div className="flex flex-col gap-[8px]">
          <label className="block text-[16px] text-[#4C4C4C]">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-[620px] h-[64px] px-3 py-2 border-[1px] rounded-lg bg-[#F8F8F8] border-[#F8F8F8]"
          >
            <option value="">Tanlang</option>
            <option value="op1">op1</option>
            <option value="op2">op2</option>
            <option value="op3">op3</option>
          </select>
        </div>
        <div className="flex flex-col gap-[8px] mb-[7px]">
          <label className="block text-[16px] text-[#4C4C4C]">Description</label>
          <textarea
            name="desc"
            value={formData.desc}
            onChange={handleChange}
            className="w-[620px] h-[164px] px-3 py-2 border-[1px] rounded-lg bg-[#F8F8F8] border-[#F8F8F8]"
            rows={4}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-[180px] bg-[#454545] text-white py-[13px] rounded-[8px] text-[16px] hover:bg-gray-500 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
}
