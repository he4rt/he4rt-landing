import { Header } from "../components/Header";

import { Articles } from "@/components/Articles";
import { ButtonDefault, ButtonOutline } from "@/components/Button";
import { Card } from "@/components/Card";
import { Footer } from "@/components/Footer";
import { Project } from "@/components/Project";
import { Section } from "@/components/Section";
import { Terminal } from "@/components/Terminal";
import { Testimonial } from "@/components/Testimonials";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { AvatarImage } from "@radix-ui/react-avatar";
import { ChevronRight } from "lucide-react";

export const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="absolute inset-0 min-h-full bg-[linear-gradient(-45deg,_#0f0f10_0%,_#1e002f_50%,_#5000a3_100%)] z-0" />
      <div className="absolute inset-0 min-h-full bg-black/75 z-10" />

      <div className="relative z-20">
        <Header />

        <main className="relative  sm:pt-[88px]">
          <Section
            name="he4rt"
            isFirstSection
            className="flex flex-col  sm:flex-row gap-[55px]"
          >
            <div className=" sm:w-[640px] flex flex-col  gap-4">
              <ButtonOutline className="bg-card-default w-full sm:w-auto sm:max-w-[140px]">
                Comunidade Open Source
              </ButtonOutline>
              <h1 className="text-text-high text-2xl text-center sm:text-left sm:text-[56px]">
                Desenvolva seu{" "}
                <span className="text-primary-purple">potencial</span>
                comunidade
              </h1>
              <h2 className="text-text-medium text-base text-center sm:text-left sm:text-xl">
                Uma comunidade de desenvolvedores dedicada a ajudar iniciantes a
                se tornarem profissionais através de projetos, mentorias e
                networking.
              </h2>
              <div className="flex flex-col sm:flex-row gap-8 mt-4">
                <ButtonDefault>
                  Começar agora <ChevronRight />
                </ButtonDefault>
                <ButtonOutline>
                  Explorar projetos <ChevronRight />
                </ButtonOutline>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
                <div className="flex">
                  <Avatar className="w-[42px] h-[42px] border border-neutral-outline">
                    <AvatarImage
                      src="https://avatars.githubusercontent.com/u/55213609?v=4"
                      alt=""
                      className="object-contain"
                    />
                  </Avatar>
                  <Avatar className="w-[42px] h-[42px] -ml-4 border border-neutral-outline">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1596894573290-80f98cee5267?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="object-contain"
                    />
                  </Avatar>
                  <Avatar className="w-[42px] h-[42px] -ml-4 border border-neutral-outline">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1596894573115-d90d9fe63194?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="object-contain"
                    />
                  </Avatar>
                  <Avatar className="w-[42px] h-[42px] -ml-4 border border-neutral-outline">
                    <AvatarImage
                      src="https://plus.unsplash.com/premium_photo-1742257735696-c3cebe655cb3?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="object-contain"
                    />
                  </Avatar>
                  <Avatar className="w-[42px] h-[42px] -ml-4  border border-neutral-outline">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1600699565213-5218adea65de?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                      className="object-fit "
                    />
                  </Avatar>
                </div>
                <span className="font-family-primary font-medium text-sm text-text-medium">
                  Mais de 9.000 desenvolvedores já fazem parte
                </span>
              </div>
            </div>

            <Terminal />
          </Section>

          <Section name="about">
            <div className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-[145px]">
              <div className="grid grid-flow-col grid-cols-1 grid-rows-4 sm:grid-rows-2 gap-8 place-items-center">
                <Card title="Loram" description="AHUWEBVKAWUHJKEA" />
                <Card title="Loram" description="AHUWEBVKAWUHJKEA" />
                <Card title="Loram" description="AHUWEBVKAWUHJKEA" />
                <Card title="Loram" description="AHUWEBVKAWUHJKEA" />
              </div>
              <div className="flex flex-col gap-4 sm:max-w-[526px]">
                <ButtonOutline className="sm:max-w-[140px] font-regular bg-linear-to-r from-primary-purple/13 to-primary-pink/13">
                  Nossa missão
                </ButtonOutline>
                <h1 className="font-family-secondary text-text-high font-semibold text-2xl text-center sm:text-left sm:text-4xl">
                  Transformando a{" "}
                  <span className="text-primary-purple">jornada</span> em
                  desenvolvimento
                </h1>
                <p className="font-family-primary font-bold text-text-medium text-base text-center sm:text-left sm:text-xl">
                  Nascemos da necessidade de unir pessoas que compartilham do
                  mesmo propósito{" "}
                  <b className="text-text-high"> aprender desenvolvimento</b> e
                   <b className="text-text-high">ajudar desenvolvedores</b> a{" "}
                  crescerem juntos.
                </p>
                <p className="font-family-primary font-bold text-text-medium text-base text-center sm:text-left sm:text-xl">
                  Nossa comunidade é formada por desenvolvedores de todos os
                  níveis, desde iniciantes até profissionais experientes, que
                  colaboram em projetos open source, compartilham conhecimento e
                  criam oportunidades.
                </p>
                <ButtonOutline className="sm:max-w-[257px]">
                  Conheça nossa história <ChevronRight />
                </ButtonOutline>
              </div>
            </div>
          </Section>
          <Section name="projects">
            <div className="flex flex-col items-center justify-center gap-11">
              <div className="flex flex-col items-center justify-center gap-4">
                <ButtonOutline className="w-full sm:max-w-[140px] font-regular bg-linear-to-r from-primary-purple/13 to-primary-pink/13">
                  Nossos projetos
                </ButtonOutline>
                <h1 className="font-family-primary text-text-high font-semibold text-2xl sm:text-4xl">
                  Aprenda na{" "}
                  <span className="text-primary-purple">prática</span>
                </h1>
                <h3 className="font-family-secondary font-medium text-base text-center sm:text-left sm:text-xl text-text-medium">
                  Contribua com projetos open source e desenvolva habilidades
                  reais enquanto constrói seu portfólio.
                </h3>
              </div>

              <div className="flex flex-col sm:flex-row gap-8">
                <Project
                  title="4Noobs"
                  description="Repositórios de conteúdos sobre diversas tecnologias."
                  tags={["Documentação", "Documentação"]}
                  href=""
                />
                <Project
                  title="He4rtLabs"
                  description="Projetos práticos desenvolvidos pela comunidade para aprendizado."
                  tags={["Documentação", "Documentação"]}
                  href=""
                />
                <Project
                  title="He4rtLabs"
                  description="Projetos práticos desenvolvidos pela comunidade para aprendizado."
                  tags={["Documentação", "Documentação"]}
                  href=""
                />
              </div>
            </div>
          </Section>
          <Section name="projects-article">
            <div className="flex flex-col items-center justify-center gap-11 sm:py-[136px]">
              <div className="flex flex-col items-center justify-center gap-4">
                <ButtonOutline className=" w-full sm:max-w-[140px] font-regular bg-linear-to-r from-primary-purple/13 to-primary-pink/13">
                  Nossos projetos
                </ButtonOutline>
                <h1 className="font-family-primary text-text-high font-semibold text-2xl text-center sm:text-left sm:text-4xl">
                  Artigos <span className="text-primary-purple">fodas</span> da
                  comunidade
                </h1>
                <h3 className="font-family-secondary font-medium text-base text-center sm:text-left sm:text-xl text-text-medium">
                  Contribua com projetos open source e desenvolva habilidades
                  reais enquanto constrói seu portfólio.
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <Articles
                  author={{
                    imageSrc:
                      "https://avatars.githubusercontent.com/u/6912596?v=4",
                    name: "Daniel Coração",
                    role: "DevRel",
                  }}
                  article={{
                    title: "Lorem ipsum dolor sit amet, consectetur ",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum ut urna eleifend auctor...",
                    tags: ["#webdev", "#software", "#lang"],
                    likes: 1000,
                  }}
                />
                <Articles
                  author={{
                    imageSrc:
                      "https://avatars.githubusercontent.com/u/6912596?v=4",
                    name: "Daniel Coração",
                    role: "DevRel",
                  }}
                  article={{
                    title: "Lorem ipsum dolor sit amet, consectetur ",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum ut urna eleifend auctor...",
                    tags: ["#webdev", "#software", "#lang"],
                    likes: 1000,
                  }}
                />
                <Articles
                  author={{
                    imageSrc:
                      "https://avatars.githubusercontent.com/u/6912596?v=4",
                    name: "Daniel Coração",
                    role: "DevRel",
                  }}
                  article={{
                    title: "Lorem ipsum dolor sit amet, consectetur ",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum ut urna eleifend auctor...",
                    tags: ["#webdev", "#software", "#lang"],
                    likes: 1000,
                  }}
                />
                <Articles
                  author={{
                    imageSrc:
                      "https://avatars.githubusercontent.com/u/6912596?v=4",
                    name: "Daniel Coração",
                    role: "DevRel",
                  }}
                  article={{
                    title: "Lorem ipsum dolor sit amet, consectetur ",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum ut urna eleifend auctor...",
                    tags: ["#webdev", "#software", "#lang"],
                    likes: 1000,
                  }}
                />
                <Articles
                  author={{
                    imageSrc:
                      "https://avatars.githubusercontent.com/u/6912596?v=4",
                    name: "Daniel Coração",
                    role: "DevRel",
                  }}
                  article={{
                    title: "Lorem ipsum dolor sit amet, consectetur ",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum ut urna eleifend auctor...",
                    tags: ["#webdev", "#software", "#lang"],
                    likes: 1000,
                  }}
                />
                <Articles
                  author={{
                    imageSrc:
                      "https://avatars.githubusercontent.com/u/6912596?v=4",
                    name: "Daniel Coração",
                    role: "DevRel",
                  }}
                  article={{
                    title: "Lorem ipsum dolor sit amet, consectetur ",
                    description:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In bibendum ut urna eleifend auctor...",
                    tags: ["#webdev", "#software", "#lang"],
                    likes: 1000,
                  }}
                />
              </div>
            </div>
          </Section>
          <Section name="testmonials">
            <div className="flex flex-col items-center justify-center gap-11 sm:py-[136px]">
              <div className="flex flex-col items-center justify-center gap-4">
                <ButtonOutline className="w-full sm:max-w-[140px] font-regular bg-linear-to-r from-primary-purple/13 to-primary-pink/13">
                  Depoimentos
                </ButtonOutline>
                <h1 className="font-family-primary text-text-high font-semibold text-2xl text-center sm:text-left sm:text-4xl">
                  O que dizem nossos{" "}
                  <span className="text-primary-purple">membros</span>
                </h1>
                <h3 className="font-family-secondary font-medium text-base text-center sm:text-left sm:text-xl text-text-medium">
                  Histórias reais de desenvolvedores que transformaram suas
                  carreiras através da nossa comunidade.
                </h3>
              </div>
              <div className="flex flex-col sm:flex-row gap-8">
                <Testimonial
                  author={{
                    imageSrc:
                      "https://avatars.githubusercontent.com/u/6912596?v=4",
                    name: "Daniel Coração",
                    role: "DevRel",
                  }}
                  likes={1000}
                  description='"A comunidade Coração Dev mudou completamente minha trajetória profissional. Através dos projetos e mentorias, consegui meu primeiro emprego como desenvolvedor e hoje faço parte de uma empresa incrível."'
                />
                <Testimonial
                  author={{
                    imageSrc:
                      "https://avatars.githubusercontent.com/u/6912596?v=4",
                    name: "Daniel Coração",
                    role: "DevRel",
                  }}
                  likes={1000}
                  description='"A comunidade Coração Dev mudou completamente minha trajetória profissional. Através dos projetos e mentorias, consegui meu primeiro emprego como desenvolvedor e hoje faço parte de uma empresa incrível."'
                />
                <Testimonial
                  author={{
                    imageSrc:
                      "https://avatars.githubusercontent.com/u/6912596?v=4",
                    name: "Daniel Coração",
                    role: "DevRel",
                  }}
                  likes={1000}
                  description='"A comunidade Coração Dev mudou completamente minha trajetória profissional. Através dos projetos e mentorias, consegui meu primeiro emprego como desenvolvedor e hoje faço parte de uma empresa incrível."'
                />
              </div>
            </div>
          </Section>
          <Section name="contact">
            <div className="flex flex-col sm:flex-row gap-[33px]">
              <div className="flex flex-col gap-4 flex-1 border border-neutral-outline p-8 rounded-xl">
                <h1 className="font-family-secondary font-semibold text-text-high text-2xl text-center sm:text-left sm:text-4xl whitespace-nowrap">
                  Entre em contato conosco
                </h1>
                <h3 className="font-family-primary font-medium text-text-medium text-base text-center sm:text-left sm:text-xl">
                  Histórias reais de desenvolvedores que transformaram suas
                  carreiras através da nossa comunidade.
                </h3>
                <Separator />
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <Label
                      htmlFor="first-name"
                      className="font-family-primary font-medium text-text-high text-base"
                    >
                      Nome completo
                    </Label>
                    <Input
                      id="first-name"
                      placeholder="First-name"
                      className="font-family-primary font-medium text-text-high text-base border-neutral-outline p-3 h-12"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label
                      htmlFor="email"
                      className="font-family-primary font-medium text-text-high text-base"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email"
                      className="font-family-primary font-medium text-text-high text-base border-neutral-outline p-3 h-12"
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <Label
                      htmlFor="message"
                      className="font-family-primary font-medium text-text-high text-base"
                    >
                      Mensagem
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="First-name"
                      className="font-family-primary font-medium text-text-high text-base border-neutral-outline p-3 h-12 resize-none"
                      draggable={false}
                    />
                  </div>
                  <ButtonDefault className="mt-4">
                    Enviar mensagem
                  </ButtonDefault>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-between gap-16">
                <div className="bg-[url(/images/contact-image.svg)] h-[370px] w-auto  sm:w-[752px] flex flex-col  items-center justify-center sm:justify-end p-8 gap-4 rounded-lg">
                  <h1 className="font-family-secondary font-semibold text-2xl text-center sm:text-left sm:text-4xl text-text-high">
                    Venha fazer parte do nosso discord
                  </h1>
                  <h3 className="font-family-primary font-medium text-text-medium text-base text-center sm:text-left sm:text-xl">
                    Histórias reais de desenvolvedores que transformaram suas
                    carreiras através da nossa comunidade.
                  </h3>
                  <ButtonDefault className="w-[183px]">
                    Entrar no discord
                  </ButtonDefault>
                </div>
                <div className="sm:w-[752px] bg-transparent border border-neutral-outline flex flex-col gap-4 p-8 rounded-xl">
                  <h2 className="font-family-secondary font-semibold text-2xl text-text-high">
                    Redes sociais
                  </h2>
                  <span className="font-family-primary font-medium text-base text-text-medium">
                    Lorem ipsum dolor sit amet, consectetur
                  </span>
                  <ul className="flex gap-8">
                    <li>
                      <a href="">
                        <img
                          src="/images/discord-icon.svg"
                          alt="icone do discord"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="/images/linkedin-icon.svg"
                          alt="icone do linkedin"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src="/images/twitter-icon.svg" alt="icone do X" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="">
                        <img
                          src="/images/instagram-icon.svg"
                          alt="icone do instagram"
                        />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img
                          src="/images/github-icon.svg"
                          alt="icone do github"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Section>
        </main>

        <Footer />
      </div>
    </div>
  );
};
