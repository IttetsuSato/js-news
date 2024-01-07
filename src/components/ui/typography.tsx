import { FunctionComponent, PropsWithChildren } from "react";

export type TypographyProps = {
  variant: "h1" | "h2" | "h3" | "h4" | "p";
};

export const Typography: FunctionComponent<
  PropsWithChildren<TypographyProps>
> = ({ variant, children }) => {
  const components = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    p: "p",
  } as const;

  const classes = {
    h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
    h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
    h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
    h4: "scroll-m-20 text-xl font-semibold tracking-tight",
    p: "leading-7 [&:not(:first-child)]:mt-6",
  };

  const Component = components[variant];
  const className = classes[variant];

  return <Component className={className}>{children}</Component>;
};
