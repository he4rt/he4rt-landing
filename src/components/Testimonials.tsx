import { AvatarFallback } from "@radix-ui/react-avatar";
import clsx from "clsx";
import { Heart } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent, CardFooter } from "./ui/card";

type Author = {
  imageSrc?: string;
  name: string;
  role: string;
};

interface ArticlesProps {
  isLoading?: boolean;
  author?: Author;
  description?: string;
  likes?: number;
}

export const Testimonial = ({
  isLoading,
  author,
  description,
  likes,
}: ArticlesProps) => {
  const calcAvatarFallback = (name: string) => {
    const splittedName = name.split(" ");

    if (splittedName.length > 1)
      return splittedName[0][0] + splittedName?.[splittedName.length - 1]?.[0];

    return splittedName[0][0];
  };

  return (
    <div
      className={clsx([
        "bg-transparent  w-[287px] sm:w-[416px] p-[1px] rounded-xl min-h-[266px]",
        !isLoading &&
          "hover:bg-linear-to-r hover:from-primary-purple hover:to-primary-pink",
      ])}
    >
      <Card
        className={clsx([
          "w-full h-full min-h-[266px] bg-transparent border border-neutral-outline  py-9   hover:bg-card-default",
          isLoading && "bg-card-default animate-pulse",
        ])}
      >
        {!isLoading && (
          <>
            <CardContent className="flex flex-col gap-4 ">
              <h3 className="font-family-primary font-medium text-base text-text-medium">
                {description}
              </h3>
            </CardContent>
            <CardFooter>
              <div className="flex flex-1  justify-between  items-center">
                <div className="flex items-center gap-4">
                  <Avatar className="bg-linear-to-r from-primary-purple to-primary-pink flex items-center justify-center w-[42px] h-[42px]">
                    <AvatarImage
                      src={author?.imageSrc}
                      alt={`Imagem de perfil do autor do artigo: ${author?.name}`}
                      className="object-contain"
                    />
                    <AvatarFallback>
                      {calcAvatarFallback(author?.name || "")}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <h3 className="font-family-secondary font-semibold text-xl text-text-high">
                      {author?.name}
                    </h3>
                    <span className="font-family-primary text-base font-medium text-text-medium">
                      {author?.role}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Heart className="text-helper-error w-4 h-4" fill="red" />
                  <span className="font-family-primary text-sm text-text-high font-bold">
                    {likes || 0}
                  </span>
                </div>
              </div>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  );
};
