/* eslint-disable @typescript-eslint/no-empty-object-type */
import clsx from "clsx";
import { Link, LinkProps } from "react-router";

interface ButtonLinkProps extends LinkProps {}

export const ButtonLink = ({ to, className, ...rest }: ButtonLinkProps) => {
  return (
    <Link
      {...rest}
      className={clsx([
        "w-full h-[43px] flex py-2.5 rounded-lg justify-center items-center cursor-pointer bg-linear-to-r from-primary-purple to-primary-pink hover:ring font-family-secondary font-semibold text-base text-text-high",
        className,
      ])}
      to={to}
    />
  );
};
