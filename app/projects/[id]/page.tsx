/* eslint-disable @next/next/no-img-element */
import { prisma } from "@/prisma/prisma-client";
import { Metadata } from "next";
import Link from "next/link";
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
    <section className="container section">
      <Link
        href="/#projects"
        className="btn-ghost mx-auto mb-10 flex w-fit"
      >
        ← Назад к работам
      </Link>

      <h1 className="mb-[50px] text-center text-4xl font-extrabold tracking-tight max-sm:text-3xl">
        <span className="grad">{product.name}</span>
      </h1>

      <div className="flex flex-col gap-8">
        <div className="glass flex justify-center overflow-hidden p-3">
          <img
            className="w-full rounded-xl object-cover"
            src={`../${product.imageUrl}`}
            alt={product.name}
            width={800}
            height={600}
          />
        </div>

        <div className="glass seo-text p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-bold">Описание сайта</h2>
          <div dangerouslySetInnerHTML={{ __html: product.desc }}>
          </div>
          <a
            href={product.linkSite}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-grad mt-6 inline-flex"
          >
            Перейти на сайт
          </a>
        </div>

        <div className="glass seo-text p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-bold">Основные функции сайта</h2>
          <div dangerouslySetInnerHTML={{ __html: product.functions }}>
          </div>
        </div>

        <div className="glass seo-text p-6 sm:p-8">
          <h2 className="mb-5 text-2xl font-bold">Технологии, используемые на сайте</h2>
          <div className="text-[20px] font-semibold" dangerouslySetInnerHTML={{ __html: product.stack }}>
          </div>
        </div>

      </div>
    </section>
  )
}