import clsx from "clsx";
import { Button, ButtonProps } from "../ui/button";

export const ButtonOutline = ({
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <Button
      {...props}
      variant="outline"
      className={clsx("cursor-pointer", className)}
      {...props}
    >
      {children}
    </Button>
  );
};
