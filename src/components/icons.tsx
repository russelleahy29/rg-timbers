import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Icon({ size = 24, children, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function LogoMark(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3l6 8h-4l4 6H6l4-6H6z" />
      <path d="M12 17v4" />
    </Icon>
  );
}

export function WhatsAppIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M21 12a9 9 0 0 1-13.5 7.8L3 21l1.2-4.5A9 9 0 1 1 21 12z" />
    </Icon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M5 12l5 5L20 7" />
    </Icon>
  );
}

export function RoofIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
    </Icon>
  );
}

export function FenceIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 4v16" />
      <path d="M12 4v16" />
      <path d="M20 4v16" />
      <path d="M4 9h16" />
      <path d="M4 15h16" />
    </Icon>
  );
}

export function PowerLineIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M7 21L12 3l5 18" />
      <path d="M8.5 15h7" />
      <path d="M10 9h4" />
    </Icon>
  );
}

export function LeaningTreeIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <circle cx="12" cy="12" r="5" />
    </Icon>
  );
}

export function MaintenanceIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V4h8v3" />
    </Icon>
  );
}

export function StumpIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M3 21h18" />
      <path d="M6 21v-4h12v4" />
      <path d="M9 17v-3h6v3" />
    </Icon>
  );
}

export function MenuIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </Icon>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </Icon>
  );
}
