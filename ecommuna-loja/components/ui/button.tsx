import { forwardRef } from "react";

import { cn } from "@/lib/utils";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button
        type={type}
        className={cn(
          `w-auto rounded-full  bg-black border border-transparent 
          px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 
          text-whitefont-semibold hover:opacity-75transition`,
          disabled && "opacity-75 cursor-not-allowed",
          className
        )}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;