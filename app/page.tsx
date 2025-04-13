/* eslint-disable @next/next/no-img-element */
import { prisma } from "@/prisma/prisma-client";
import { Item, Title } from "@/components";

export default async function Home() {

  const products = await prisma.product.findMany();

  console.log(products);

  return (
    <>


      <section className="flex py-4 items-center justify-center max-lg:flex-col gap-10 mb-[100px] container ">
        <div>
          <h1 className="text-2xl font-medium mb-3">
            Привет! <br />
            Меня зовут Руслан, <br /> я <span className="grad">Frontend</span> разработчик.
          </h1>
          <p className="max-w-[500px] font-medium">
            C опытом в разработке веб-приложений, включая интернет-магазины и лендинги. Активно использую современные технологии, такие как JavaScript, AlpineJs и React, и постоянно развиваюсь, изучая NEXT.js для повышения производительности своих проектов.
          </p>
        </div>

        <img src="/avatar.jpg" alt="avatar" width={280} height={380} />
      </section>

      <section className="mb-[100px] container " id="work">
        <Title className="mb-20 text-center max-sm:mb-4">Технологи</Title>

        <div className=" mx-auto max-w-[800px] grid grid-cols-6 gap-6 max-sm:grid-cols-3">
          <img src="./tech/vscode-icons_file-type-html.svg" alt="html" width={80} height={100} title="html" />

          <img src="./tech/vscode-icons_file-type-css.svg" alt="css" width={80} height={80} title="css" />

          <img src="./tech/logos_sass.svg" alt="scss" width={80} height={80} title="scss" />

          <img src="./tech/vscode-icons_file-type-js-official.svg" alt="js" width={80} height={80} title="js" />

          <img src="./tech/alpine.jpg" alt="alpine" width={80} height={80} title="alpine" />

          <img src="./tech/React.png" alt="react" width={80} height={80} title="react" />

          <img src="./tech/Vector.png" alt="redux" width={80} height={80} title="redux" />

          <img src="./tech/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="zustand" width={80} height={80} title="zustand" />

          <img src="./tech/logos_git-icon.svg" alt="git" width={80} height={80} title="git" />

          <img src="./tech/Postman.png" alt="Postman" width={80} height={80} title="Postman" />

          <img src="./tech/vscode-icons_file-type-vscode.svg" alt="vscode" width={80} height={80} title="vscode" />

          <img src="./tech/akar-icons_github-fill.png" alt="github" width={80} height={80} title="github" />
        </div>

      </section >


      <section className="mb-[100px] container " id="projects">
        <Title className="mb-20 text-center max-sm:mb-4">Работы</Title>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-5 ">

          {
            products.map((product) => (
              <Item key={product.id} item={product} />
            ))
          }
        </div>


      </section>

      <section className="mb-[100px] container " id="contact">
        <Title className="mb-20 text-center max-sm:mb-4">Контакты</Title>

        <div className=" flex flex-wrap gap-5">

          <a href="https://t.me/@Ruslan_3101" target="_blank" className="flex items-center gap-3" >
            <img src="/telegram.png" alt="telegram" width={40} height={40} />
            @Ruslan_3101
          </a>

          <a href="tel:+375298975649" target="_blank" className="flex items-center gap-3">
            <img src="/phone.png" alt="телефон" width={40} height={40} />
            +375 (29) 897-56-49
          </a>

          <a href="viber://add?number=%2B375298975649" target="_blank" className="flex items-center gap-3">
            <img src="/viber.png" alt="viber" width={40} height={40} />
            +375 (29) 897-56-49
          </a>


        </div>


      </section>

    </>
  );
}
