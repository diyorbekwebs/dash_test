import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const API_URL = "https://67e467d12ae442db76d4529c.mockapi.io/Products";

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  desc: string;
}

export default function Manage() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>(API_URL)
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const deletefunc = (id: string) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const updateProduct = (id: string, updatedProduct: Partial<Product>) => {
    setProducts((prev) =>
      prev.map((product) => (product.id === id ? { ...product, ...updatedProduct } : product))
    );
  };

  return (
    <div className="pt-[22px] pl-[32px] ml-[400px] p-4 flex flex-wrap gap-4">
      <h2 className="text-2xl font-semibold mb-4">Manage Product</h2>
      <div className="flex flex-wrap">
        {products.map((e) => (
          <Card
            key={e.id}
            id={e.id}
            name={e.name}
            price={e.price}
            image={e.image}
            desc={e.desc}
            deletefunc={deletefunc}
            updatefunc={updateProduct} // **Yangi prop qo‘shildi**
          />
        ))}
      </div>
    </div>
  );
}
