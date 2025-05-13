import { Separator } from "./ui/separator";

export const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col p-12 gap-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between ">
        <div className="flex flex-col gap-4 ">
          <img src="/images/Logo.svg" alt="He4rt Logo" className="w-36 h-6" />
          <p className=" max-w-lg font-family-primary text-base font-medium text-text-medium">
            Conheça MeuGuia.app! Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Vivamus sed egestas nisl. Vivamus blandit vehicula
            eleifend. Phasellus vulputate elit leo, porta vehicula nunc placerat
            placerat.
          </p>
        </div>

        <div className="flex flex-col gap-8 sm:flex-row  sm:gap-32">
          <div className="flex flex-col gap-4">
            <h3 className="text-text-high uppercase">Sobre nós</h3>
            <ul className="text-text-medium flex flex-col gap-5 text-base font-family-primary font-medium">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Home</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-text-high uppercase">Suporte</h3>
            <ul className="text-text-medium flex flex-col gap-5 text-base font-family-primary font-medium">
              <li>Termos e Privacidade</li>
              <li>Junte-se a nós</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-text-high uppercase">Social Media</h3>
            <ul className="text-text-medium grid grid-cols-2 gap-y-5 gap-x-8 text-base font-family-primary font-medium">
              <li>Discord</li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Github</li>
              <li>X</li>
            </ul>
          </div>
        </div>
      </div>
      <Separator />
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row  ">
        <span className="font-family-secondary font-semibold text-base text-text-high">
          © 2025 He4rtDevs
        </span>
        <span className="font-family-secondary font-semibold text-base  text-text-high">
          Todos os direitos reservados
        </span>
      </div>
    </footer>
  );
};
