import { ExternalLink, User, Menu, X } from "lucide-react";
import { Link } from "react-router";

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

import { ButtonOutline, ButtonDefault } from "./Button";
import { useIsMobile } from "@/hooks/isMobile";

const navigationItems = [
  { name: "Sobre", href: "/about" },
  { name: "Comunidades", href: "/comunities" },
  { name: "Projetos", href: "/projects" },
  { name: "Depoimentos", href: "/testmonials" },
  { name: "Contato", href: "/contact" },
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
          <Link to="/">
            <img src="/images/Logo.svg" alt="H4rt Logo" className="px-4" />
          </Link>
        </SheetHeader>
        <nav>
          <ul className=" flex flex-col px-8">
            {navigationItems.map((item) => {
              return (
                <li
                  key={item.name}
                  className="px-3 py-4 rounded-lg focus-within:ring focus-within:ring-neutral-outline"
                >
                  <Link
                    to={item.href}
                    className="font-family-secondary font-semibold text-base text-text-high hover:bg-transparent hover:underline hover:text-text-high hover:underline-offset-4 focus:outline-none"
                  >
                    {item.name}
                  </Link>
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
                <Link to={item.href}>
                  <NavigationMenuLink className="font-family-secondary font-semibold text-base text-text-high hover:bg-transparent hover:underline hover:text-text-high hover:underline-offset-4">
                    {item.name}
                  </NavigationMenuLink>
                </Link>
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
    <header className="bg-primary px-4 sm:px-16 py-6 flex items-center justify-between">
      <Link to="/">
        <img src="/images/Logo.svg" alt="H4rt Logo" />
      </Link>
      {isMobile ? <HeaderMobile /> : <HeaderDesktop />}
    </header>
  );
};
