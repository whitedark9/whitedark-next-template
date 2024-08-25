import { ReactNode, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type SimpleProps = {
  className?: string;
  children?: ReactNode;
};
