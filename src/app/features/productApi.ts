import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  desc: string;
}


export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://67e467d12ae442db76d4529c.mockapi.io" }),
  tagTypes: ["Product"],

  endpoints: (builder) => ({
    getProducts: builder.query<Product[], void>({  // <--- TYPE qo'shildi
      query: () => "/Products",
      providesTags: ["Product"],
    }),

    addProduct: builder.mutation<Product, Partial<Product>>({
      query: (newProduct) => ({
        url: "/Products",
        method: "POST",
        body: newProduct,
      }),
      invalidatesTags: ["Product"],
    }),

    updateProduct: builder.mutation<Product, { id: string; data: Partial<Product> }>({
      query: ({ id, data }) => ({
        url: `/Products/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),

    deleteProduct: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `/Products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = productApi;
