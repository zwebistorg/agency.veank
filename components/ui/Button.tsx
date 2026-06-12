import Link from "next/link";

type ButtonProps = {
  href?: string;
  variant?: "primary" | "secondary";
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit";
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center px-6 py-3 text-[0.9375rem] font-semibold uppercase tracking-wide transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

const variants = {
  primary:
    "bg-ag-yellow text-ag-black border-2 border-ag-yellow hover:bg-ag-yellow-hover hover:border-ag-yellow-hover hover:shadow-hard-white hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-ag-white border-2 border-ag-white hover:border-ag-yellow hover:text-ag-yellow",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  type = "button",
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
