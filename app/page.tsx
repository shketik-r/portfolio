/* eslint-disable @next/next/no-img-element */
import { prisma } from "@/prisma/prisma-client";

export default async function Home() {

  const products = await prisma.product.findMany();

  // console.log(products);


  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <h1>{product.name}</h1>
          <img src={product.imageUrl} alt={product.name} width={100} height={100} />
        </div>
      ))}

    </>
  );
}
