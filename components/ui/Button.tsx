import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonBaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
};

type LinkButtonProps = ButtonBaseProps & {
  href: string;
  type?: never;
};

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "border-transparent bg-[var(--brand-navy)] text-[var(--bg)] shadow-[0_18px_48px_rgba(11,42,74,0.2)] hover:bg-[var(--brand-blue)]",
  secondary:
    "border-[var(--line-strong)] bg-white text-[var(--brand-navy)] shadow-[0_12px_32px_rgba(15,42,74,0.08)] hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]",
  ghost:
    "border-transparent bg-transparent text-[var(--muted-strong)] hover:text-[var(--brand-blue)]",
};

const baseClasses =
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-md border px-5 py-3 text-center text-sm font-bold whitespace-normal transition duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--cyan)] disabled:cursor-not-allowed disabled:opacity-55 disabled:hover:translate-y-0";

export function Button(props: LinkButtonProps | NativeButtonProps) {
  const { children, className = "", variant = "primary" } = props;
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;
  const primaryStyle = variant === "primary" ? { color: "#ffffff" } : undefined;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} style={primaryStyle}>
        <span>{children}</span>
        <span aria-hidden="true">→</span>
      </Link>
    );
  }

  const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = { ...(props as NativeButtonProps) };
  delete buttonProps.className;
  delete buttonProps.children;
  delete (buttonProps as ButtonHTMLAttributes<HTMLButtonElement> & { variant?: ButtonVariant }).variant;
  const style = buttonProps.style;

  return (
    <button
      {...buttonProps}
      className={classes}
      style={primaryStyle ? { ...style, ...primaryStyle } : style}
    >
      {children}
    </button>
  );
}
