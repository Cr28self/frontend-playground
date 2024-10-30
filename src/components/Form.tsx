import { cn } from "@/lib/style";

interface IForm {
  className?: string;
  children: React.ReactNode;
}

const Form = ({ className, children, ...props }) => {
  return (
    <form
      className={cn(
        "w-2/3 min-w-[300px]  rounded bg-white px-8 pb-8 pt-6 shadow-md",
        className
      )}
      {...props}
      noValidate
    >
      {children}
    </form>
  );
};

Form.displayName = "Form";

export { Form };
