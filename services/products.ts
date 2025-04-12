import { Product } from "@prisma/client"
// import { axiosInstance } from "./instance"
import { ApiRouts } from "./constants";

// export const getAll = async (): Promise<Product[]> => {
//   const {data} = await axiosInstance.get<Product[]>(ApiRouts.PRODUCTS);
//   return data;
// }


export const getAll = async (): Promise<Product[]> => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${ApiRouts.PRODUCTS}`);

  if (!response.ok) {
    console.log(response);
  }

  const data: Product[] = await response.json();
  
  return data;
}