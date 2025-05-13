import clsx from "clsx";
import { PropsWithChildren } from "react";

interface SectionProps {
  isFirstSection?: boolean;
  name: string;
  className?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  >["className"];
}

export const Section = ({
  children,
  isFirstSection,
  name,
  className,
}: PropsWithChildren<SectionProps>) => {
  return (
    <section
      id={name}
      className={clsx([
        "relative  flex items-center justify-center overflow-hidden  min-h-screen pt-[44px] sm:pt-0",
      ])}
    >
      <div
        className={clsx([
          "absolute inset-0 z-0",
          isFirstSection
            ? "bg-[linear-gradient(-45deg,_#0f0f10_0%,_#1e002f_50%,_#5000a3_100%)]"
            : "bg-[linear-gradient(-45deg,_#0f0f10_0%,_#1e002f_10%,_#5000a3_100%)]",
        ])}
      />

      <div className="absolute inset-0 z-0 bg-black/75" />
      {isFirstSection && (
        <img
          src="/images/landingLogo.svg"
          alt="Logo"
          className="absolute top-0 sm:top-[88px] inset-0 z-0 "
        />
      )}
      <div
        className={clsx([
          "relative z-20 flex items-center justify-center sm:gap-[145px] p-4",
          className,
        ])}
      >
        {children}
      </div>
    </section>
  );
};
