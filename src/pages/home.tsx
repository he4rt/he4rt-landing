import { Footer } from "@/components/Footer";
import { Header } from "../components/Header";
import { Articles } from "@/components/Articles";
import { Testimonial } from "@/components/Testimonials";

export const Home = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />

      <main className="flex-1 bg-primary ">
        <div className="flex flex-col gap-4 w-full items-center">
          <Testimonial
            author={{
              name: "Lucas Rosa",
              role: "Frontend Developer",
              imageSrc: "https://avatars.githubusercontent.com/u/55213609?v=4",
            }}
            description={
              '"A comunidade Coração Dev mudou completamente minha trajetória profissional. Através dos projetos e mentorias, consegui meu primeiro emprego como desenvolvedor e hoje faço parte de uma empresa incrível."'
            }
          />
          <Testimonial
            isLoading={true}
            author={{
              name: "Lucas Rosa",
              role: "Frontend Developer",
              imageSrc: "https://avatars.githubusercontent.com/u/55213609?v=4",
            }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};
