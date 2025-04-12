import { Product } from "@prisma/client"
import { axiosInstance } from "./instance"
import { ApiRouts } from "./constants";

export const getAll = async (): Promise<Product[]> => {
  const {data} = await axiosInstance.get<Product[]>(ApiRouts.PRODUCTS);
  return data;
}