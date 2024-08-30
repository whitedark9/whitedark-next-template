import clsx from "clsx";
import APP from "~/constants/configs/app";

type IconProps = {
  size?: number;
  name?: string;
  color?: string;
  className?: string;
};

export default function Icon(props: IconProps) {
  const { size, name, color, className } = props;

  return (
    <i
      className={clsx(`bi bi-${name}`, className)}
      style={{
        fontSize: size ? `${size}px` : `${APP.iconSize}px`,
        color: color || "inherit",
      }}
    />
  );
}
