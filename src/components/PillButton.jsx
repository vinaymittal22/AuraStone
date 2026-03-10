export function PillButton({
  children,
  variant = "primary",
  className = "",
  as: Component = "button",
  ...props
}) {
  const variants = {
    primary: "bg-gold text-white shadow-glow hover:bg-bronze focus-visible:outline-gold",
    secondary: "border border-white/60 text-white hover:bg-white hover:text-ink focus-visible:outline-white",
    light: "border border-black/10 bg-white text-ink hover:border-gold hover:text-gold focus-visible:outline-gold",
    ghost: "border border-black/10 text-ink hover:border-gold hover:bg-gold hover:text-white focus-visible:outline-gold",
    dark: "bg-ink text-white hover:bg-black focus-visible:outline-ink",
  };

  return (
    <Component
      {...props}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-xs font-semibold uppercase tracking-[0.24em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
}
