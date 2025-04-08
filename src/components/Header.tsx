import { ExternalLink, User } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router";
import { ButtonOutline, ButtonDefault } from "./Button";

const navigationItems = [
  { name: "Sobre", href: "/about" },
  { name: "Comunidades", href: "/comunities" },
  { name: "Projetos", href: "/projects" },
  { name: "Depoimentos", href: "/testmonials" },
  { name: "Contato", href: "/contact" },
];

export const Header = () => {
  return (
    <header className="bg-primary px-16 py-6 flex items-center justify-between">
      <Link to="/">
        <img src="/images/Logo.svg" alt="H4rt Logo" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {navigationItems.map((item) => {
            return (
              <NavigationMenuItem key={item.name}>
                <Link to={item.href}>
                  <NavigationMenuLink
                    className="font-family-secondary font-semibold text-base text-text-high hover:bg-transparent hover:underline hover:text-text-high hover:underline-offset-4
"
                  >
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
    </header>
  );
};
