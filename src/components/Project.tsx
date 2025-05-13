import clsx from "clsx";
import { ButtonLink } from "./Button/ButtonLink";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
  isLoading?: boolean;
}

export const Project = ({
  title,
  description,
  tags,
  href,
  isLoading,
}: ProjectProps) => {
  return (
    <div
      className={clsx([
        "bg-transparent w-[287px] sm:w-[416px] p-[1px] rounded-xl min-h-[266px]",
        !isLoading &&
          "hover:bg-linear-to-r hover:from-primary-purple hover:to-primary-pink",
      ])}
    >
      <Card
        className={clsx([
          "w-full h-full min-h-[266px] bg-transparent border border-neutral-outline   py-9   hover:bg-card-default",
          isLoading && "bg-card-default animate-pulse",
        ])}
      >
        {!isLoading && (
          <>
            <CardHeader>
              <CardTitle className="font-family-secondary font-semibold text-base text-text-high">
                {title}
              </CardTitle>
              <CardDescription className="font-family-primary font-medium text-base text-text-medium">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4">
              {tags.map((tag, index) => (
                <Button
                  key={index}
                  className="bg-button-filled border border-neutral-outline-16 flex-1 text-xs sm:text-sm font-family-primary font-bold"
                >
                  {tag}
                </Button>
              ))}
            </CardContent>
            <CardFooter>
              <ButtonLink href={href}>Ver Projeto</ButtonLink>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};
