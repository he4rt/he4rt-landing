import { ExternalLink, Menu, User, X } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";

import { useIsMobile } from "@/hooks/isMobile";
import { ButtonDefault, ButtonOutline } from "./Button";

const navigationItems = [
  { name: "Sobre", href: "#about" },
  { name: "Comunidades", href: "#comunity" },
  { name: "Projetos", href: "#projects" },
  { name: "Depoimentos", href: "#testmonials" },
  { name: "Contato", href: "#contact" },
];

const HeaderMobile = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <ButtonOutline>
          <Menu />
        </ButtonOutline>
      </SheetTrigger>
      <SheetContent className="bg-primary border-none w-full">
        <SheetHeader>
          <SheetClose className="text-text-high self-end px-4">
            <X />
          </SheetClose>
          <a href="/">
            <img src="/images/Logo.svg" alt="H4rt Logo" className="px-4" />
          </a>
        </SheetHeader>
        <nav>
          <ul className=" flex flex-col px-8">
            {navigationItems.map((item) => {
              return (
                <li
                  key={item.name}
                  className="px-3 py-4 rounded-lg focus-within:ring focus-within:ring-neutral-outline"
                >
                  <a
                    href={item.href}
                    className="font-family-secondary font-semibold text-base text-text-high hover:bg-transparent hover:underline hover:text-text-high hover:underline-offset-4 focus:outline-none"
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <SheetFooter>
          <div className="flex flex-col gap-4">
            <ButtonOutline>
              Github <ExternalLink />
            </ButtonOutline>
            <ButtonDefault>
              <User />
              Entrar Agora
            </ButtonDefault>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

const HeaderDesktop = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          {navigationItems.map((item) => {
            return (
              <NavigationMenuItem key={item.name}>
                <a href={item.href}>
                  <NavigationMenuLink className="font-family-secondary font-semibold text-base text-text-high hover:bg-transparent hover:underline hover:text-text-high hover:underline-offset-4">
                    {item.name}
                  </NavigationMenuLink>
                </a>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex items-center gap-8">
        <ButtonOutline>
          Github <ExternalLink />
        </ButtonOutline>
        <ButtonDefault>
          <User />
          Entrar Agora
        </ButtonDefault>
      </div>
    </>
  );
};

export const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-primary flex items-center justify-between px-4 sm:px-16 py-6  sm:fixed sm:top-0 sm:z-50 sm:w-full">
      <a href="#he4rt">
        <img src="/images/Logo.svg" alt="H4rt Logo" />
      </a>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
};
