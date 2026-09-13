/* eslint-disable @next/next/no-img-element */
import { prisma } from "@/prisma/prisma-client";
import { Item, Title } from "@/components";

export default async function Home() {

  const products = await prisma.product.findMany();

  return (
    <>


      <section className="container section flex items-center justify-center gap-16 py-4 max-lg:flex-col">
        <div className="animate-fade-up">
          <span className="mb-5 inline-block rounded-full border border-white/15 bg-white/[0.04] px-4 py-1 text-sm font-medium text-white/70">
            Frontend Developer · 3 года коммерческого опыта
          </span>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight max-sm:text-3xl">
            Привет! <br />
            Меня зовут Руслан, <br /> я <span className="grad">Frontend</span> разработчик.
          </h1>
          <p className="max-w-[520px] font-medium leading-relaxed text-white/70">
            За <span className="font-semibold text-white">3 года коммерческой разработки</span> я
            прошёл путь от лендингов до сложных веб-приложений. Уверенно работаю с
            <span className="font-semibold text-white"> Vue</span> и
            <span className="font-semibold text-white"> React</span>, пишу backend на
            <span className="font-semibold text-white"> PHP</span> и
            <span className="font-semibold text-white"> Laravel</span>, а также имею опыт
            с <span className="font-semibold text-white">WordPress</span>,
            <span className="font-semibold text-white">MODX</span> и  с
            <span className="font-semibold text-white"> Битрикс</span>.
          </p>
          <p className="mt-3 max-w-[520px] font-medium leading-relaxed text-white/60">
            Отлично разбираюсь в чужом коде и занимаюсь поддержкой
            <span className="font-semibold text-white"> 30+ проектов</span> — банков и интернет-магазинов.
            Принимал участие в разработке сайта для
            <span className="font-semibold text-white"> Беларусбанка</span>.
          </p>
          <p className="mt-3 max-w-[520px] font-medium leading-relaxed text-white/60">
            Создаю быстрые, адаптивные и удобные интерфейсы, внимательно отношусь к деталям.
            Активно интегрирую в работу AI-инструменты для автоматизации рутины и ускорения
            разработки, а также постоянно развиваюсь — сейчас углубляюсь в
            <span className="font-semibold text-white"> Next.js</span> и современные подходы
            к производительности.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn-grad">Смотреть работы</a>
            <a href="#contact" className="btn-ghost">Связаться</a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
            {[
              { value: "3+", label: "года опыта" },
              { value: "Vue / React", label: "фронтенд" },
              { value: "PHP / Laravel", label: "бэкенд" },
              { value: "CMS", label: "WordPress · MODX" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-xl font-extrabold">
                  <span className="grad">{stat.value}</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-white/50">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative animate-float">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-[#2855da] to-[#7e52ec] opacity-20 blur-2xl" />
          <img
            className="relative rounded-3xl border border-white/10 object-cover shadow-2xl shadow-black/40"
            src="/avatar.jpg"
            alt="avatar"
            width={280}
            height={380}
          />
        </div>
      </section>

      <section className="container section" id="work">
        <Title className="mb-20 text-center max-sm:mb-10">Технологи</Title>

        <div className="mx-auto grid max-w-[800px] grid-cols-6 gap-6 max-sm:grid-cols-3">
          <img src="./tech/vscode-icons_file-type-html.svg" alt="html" width={80} height={100} title="html" />

          <img src="./tech/vscode-icons_file-type-css.svg" alt="css" width={80} height={80} title="css" />

          <img src="./tech/logos_sass.svg" alt="scss" width={80} height={80} title="scss" />

          <img src="./tech/vscode-icons_file-type-js-official.svg" alt="js" width={80} height={80} title="js" />

          <img src="./tech/alpine.jpg" alt="alpine" width={80} height={80} title="alpine" />

          <img src="./tech/React.png" alt="react" width={80} height={80} title="react" />

          <img src="./tech/next-js-logo.png" alt="next.js" width={80} height={80} title="next.js" />

          <img src="./tech/Vector.png" alt="redux" width={80} height={80} title="redux" />

          <img src="./tech/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="zustand" width={80} height={80} title="zustand" />

          <img src="./tech/icons8-vue-js-96.png" alt="vue.js" width={80} height={80} title="vue.js" />

          <img src="./tech/logos_git-icon.svg" alt="git" width={80} height={80} title="git" />

          <img src="./tech/postman-icon.png" alt="Postman" width={80} height={80} title="Postman" />

          <img src="./tech/icons8-laravel-96.png" alt="laravel" width={80} height={80} title="laravel" />
          <img src="./tech/akar-icons_github-fill.png" alt="github" width={80} height={80} title="github" />
        </div>

      </section >


      <section className="container section" id="projects">
        <Title className="mb-20 text-center max-sm:mb-10">Работы</Title>

        <div className="grid grid-cols-3 gap-6 max-lg:grid-cols-2 max-sm:grid-cols-1">

          {
            products.map((product) => (
              <Item key={product.id} item={product} />
            ))
          }
        </div>


      </section>

      <section className="container section" id="contact">
        <Title className="mb-20 text-center max-sm:mb-10">Контакты</Title>

        <div className="mx-auto flex max-w-[800px] flex-wrap justify-center gap-4">

          <a
            href="https://t.me/@Ruslan_3101"
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex items-center gap-3 px-5 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
          >
            <img src="/telegram.png" alt="telegram" width={32} height={32} />
            @Ruslan_3101
          </a>

          <a
            href="tel:+375298975649"
            className="glass flex items-center gap-3 px-5 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
          >
            <img src="/phone.png" alt="телефон" width={32} height={32} />
            +375 (29) 897-56-49
          </a>

          <a
            href="viber://add?number=%2B375298975649"
            className="glass flex items-center gap-3 px-5 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:border-white/25"
          >
            <img src="/viber.png" alt="viber" width={32} height={32} />
            +375 (29) 897-56-49
          </a>


        </div>


      </section>

    </>
  );
}
