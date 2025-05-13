import {
  CardDescription,
  CardHeader,
  CardTitle,
  Card as ShadcnCard,
} from "@/components/ui/card";
import { Code } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  isLoading?: boolean;
}

export const Card = ({ title, description, isLoading }: CardProps) => {
  if (isLoading) {
    return (
      <ShadcnCard className="w-80 h-48 border-neutral-outline bg-primary rounded-lg shadow-none  animate-pulse"></ShadcnCard>
    );
  }

  return (
    <div className="border-neutral-outline w-80 h-48 bg-transparent rounded-lg p-[1px] group hover:bg-linear-to-r hover:from-primary-purple hover:to-primary-pink hover:pb-2">
      <ShadcnCard className="w-full h-full rounded-lg border border-neutral-outline  bg-transparent  shadow-none  group-hover:bg-card-default group-hover:rounded-b-none">
        <CardHeader>
          <div className=" w-8 h-8 rounded-sm relative flex items-center justify-center p-[1px]">
            <div className="bg-linear-to-r from-primary-purple to-primary-pink w-full h-full rounded-sm absolute opacity-20 p-[1px]" />

            <div className="rounded-sm w-full h-full bg-primary relative z-10 flex items-center justify-center">
              <div className="bg-linear-to-r from-primary-purple to-primary-pink w-full h-full rounded-sm absolute opacity-5 group-hover:opacity-20" />
              <Code className="w-4 h-4 text-primary-purple" />
            </div>
          </div>
          <CardTitle className="font-family-secondary font-semibold text-xl text-text-high">
            {title}
          </CardTitle>
          <CardDescription className="font-family-primary font-medium text-base text-text-medium">
            {description}
          </CardDescription>
        </CardHeader>
      </ShadcnCard>
    </div>
  );
};
