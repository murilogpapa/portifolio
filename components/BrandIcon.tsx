import type { SimpleIcon } from "simple-icons";

type BrandIconProps = {
  icon: SimpleIcon;
  className?: string;
  fill?: string;
  size?: number;
};

export function BrandIcon({
  icon,
  className,
  fill = "currentColor",
  size,
}: BrandIconProps) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill={fill}
      aria-hidden="true"
    >
      <path d={icon.path} />
    </svg>
  );
}
