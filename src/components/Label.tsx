import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/style";

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);

const Label = ({ htmlFor, className, ...props }) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn(labelVariants(), className)}
      {...props}
    >
      {htmlFor}
    </label>
  );
};

export { Label };
