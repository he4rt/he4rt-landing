import clsx from "clsx";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarImage } from "./ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";
import { Heart } from "lucide-react";
import { Separator } from "./ui/separator";

type Author = {
  imageSrc?: string;
  name: string;
  role: string;
};

type Article = {
  title: string;
  description: string;
  tags: string[];
  likes: number;
};

interface ArticlesProps {
  isLoading?: boolean;
  author?: Author;
  article?: Article;
}

export const Articles = ({ isLoading, author, article }: ArticlesProps) => {
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
          "w-full h-full border border-neutral-outline min-h-[266px] bg-transparent  py-9   hover:bg-card-default",
          isLoading && "bg-card-default animate-pulse",
        ])}
      >
        {!isLoading && (
          <>
            <CardHeader>
              <div className="flex  justify-between items-end sm:items-center">
                <div className="flex flex-col  sm:flex-row sm:items-center gap-4">
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
                    {article?.likes || 0}
                  </span>
                </div>
              </div>
              <Separator className="mt-4" />
            </CardHeader>
            <CardContent className="flex flex-col gap-4 ">
              <h1 className="text-xl font-family-secondary font-semibold text-text-high break-all">
                {article?.title}
              </h1>
              <h2 className="font-family-primary font-medium text-base text-text-medium break-all line-clamp-2">
                {article?.description}
              </h2>

              <div className="flex gap-4 ">
                {article?.tags.map((tag) => (
                  <div
                    key={tag}
                    className="w-[106px] h-[36px] border border-neutral-outline-16 flex items-center justify-center"
                  >
                    <span className="font-family-primary font-bold text-[12px] text-text-high">
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </>
        )}
      </Card>
    </div>
  );
};
