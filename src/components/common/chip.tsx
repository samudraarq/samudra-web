interface ChipProps {
  children: React.ReactNode;
  variant?: "default" | "outlined";
  size?: "sm" | "md";
}

const Chip = ({ children, variant = "default", size = "sm" }: ChipProps) => {
  const baseClasses = "inline-block rounded font-medium transition-colors";

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
  };

  const variantClasses = {
    default:
      "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
    outlined:
      "border border-slate-300 text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800",
  };

  return (
    <span
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]}`}
    >
      {children}
    </span>
  );
};

export default Chip;
