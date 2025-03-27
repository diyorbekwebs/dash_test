import React, { useState } from "react";

export default function Create() {
  const [formData, setFormData] = useState({
    title: "",
    price: "",
    imageUrl: "",
    category: "",
    desc: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <div className="w-full pt-[22px] pl-[32px]">
        <h2 className="text-2xl font-semibold mb-4">Create Product</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-[16px]">
          <div className="flex flex-col gap-[8px]">
            <label className="block text-[16px] text-[#4C4C4C]">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
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
              name="imageUrl"
              value={formData.imageUrl}
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
              required
            >
              <option value="">Tanlang</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>
          <div className="flex flex-col gap-[8px] mb-[7px]">
            <label className="block text-[16px] text-[#4C4C4C]">Description</label>
            <textarea
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              className="w-[620px] h-[164px] px-3 py-2 border-[1px] rounded-lg bg-[#F8F8F8] border-[#F8F8F8]"
              rows="4"
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
