import { Footer } from "@/components/Footer";
import { Header } from "../components/Header";
import { Articles } from "@/components/Articles";
import { Testimonial } from "@/components/Testimonials";
import { Terminal } from "@/components/Terminal";

export const Home = () => {
  return (
    <div className="flex flex-col w-screen h-screen">
      <Header />

      <main className="flex-1 bg-primary ">
        <div className="flex flex-col gap-4 w-full items-center">
          <Terminal />
        </div>
      </main>

      <Footer />
    </div>
  );
};
