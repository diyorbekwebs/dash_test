import React from "react";
import {
  useGetProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
  Product,
} from "../../app/features/productApi";
import Card from "./Card";

export default function Manage() {
  const { data: products, isLoading, error } = useGetProductsQuery();
  const [deleteProduct] = useDeleteProductMutation();
  const [updateProduct] = useUpdateProductMutation();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching data!</p>;

  return (
    <div className="pt-[22px] ml-[400px] w-full min-h-screen p-4 flex flex-wrap gap-4">
      <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>
      <div className="flex flex-1 min-w-full flex-wrap">
        {products?.map((product: Product) => (
    <Card
    key={product.id}
    id={product.id}
    name={product.name}
    price={product.price} 
    image={product.image}
    desc={product.desc}
    deletefunc={() => deleteProduct(product.id)}
    updatefunc={(updatedData: Partial<Product>) => {
      const formattedData: Partial<Product> = {
        ...updatedData,
        price: updatedData.price !== undefined ? Number(updatedData.price) : undefined,
      };
      updateProduct({ id: product.id, data: formattedData });
    }}
  />
  
    
       
        ))}
      </div>
    </div>
  );
}
