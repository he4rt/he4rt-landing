/* eslint-disable @typescript-eslint/no-empty-object-type */
import clsx from "clsx";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {}

export const ButtonLink = ({ href, className, ...rest }: ButtonLinkProps) => {
  return (
    <Link
      {...rest}
      className={clsx([
        "w-full h-[43px] flex py-2.5 rounded-lg justify-center items-center cursor-pointer bg-linear-to-r from-primary-purple to-primary-pink hover:ring font-family-secondary font-semibold text-base text-text-high",
        className,
      ])}
      href={href!}
    />
  );
};
