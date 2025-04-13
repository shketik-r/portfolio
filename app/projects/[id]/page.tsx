/* eslint-disable @next/next/no-img-element */
import { prisma } from "@/prisma/prisma-client";
import { Metadata } from "next";
import { notFound } from "next/navigation";


export async function generateMetadata(PageProps: { params: Params }): Promise<Metadata> {
  const { id } = await PageProps.params;
  const product = await getProduct(id);

  return {
    title: `${product.name}`,
  }
}


type Params = Promise<{ id: string }>

async function getProduct(id: string) {

  const product = await prisma.product.findFirst({
    where: {
      id: Number(id)
    }
  });

  if (!product) {
    return notFound();
  }

  return product;

}

export default async function CategoryPage(PageProps: { params: Params }) {
  const { id } = await PageProps.params;
  const product = await getProduct(id);
  return (
    <section className=" container">
      <h1 className="text-3xl font-bold my-3 mb-[40px] text-center">{product.name}</h1>

      <div className="flex flex-col gap-3">
        <div className="flex justify-center">
          <img src={`../${product.imageUrl}`} alt={product.name} width={800} height={600} />
        </div>

        <div className="seo-text mb-5">
          <h2 className="text-2xl mb-5">Описание сайта</h2>
          <div dangerouslySetInnerHTML={{ __html: product.desc }}>
          </div>
        </div>

        <div className="seo-text mb-5">
          <h2 className="text-2xl mb-5">Основные функции сайта</h2>
          <div dangerouslySetInnerHTML={{ __html: product.functions }}>
          </div>
        </div>

        <div className="seo-text mb-5">
          <h2 className="text-2xl mb-5">Технологии, используемые на сайте</h2>
          <div className="font-semibold text-[20px]" dangerouslySetInnerHTML={{ __html: product.stack }}>
          </div>
        </div>

      </div>
    </section>
  )
}