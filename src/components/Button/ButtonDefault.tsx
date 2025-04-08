import clsx from "clsx";
import { Button, ButtonProps } from "../ui/button";

export const ButtonDefault = ({
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Button
      {...props}
      className={clsx(
        "cursor-pointer bg-linear-to-r from-primary-purple to-primary-pink hover:ring",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
};
