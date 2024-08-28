import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { GoogleIcon } from "../social-icons/GoogleIcon";
const buttonVariants = cva(
  "w-full rounded-[50px] font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex  justify-center items-center transition-all  duration-500 relative",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-800 ",
        social:
          "bg-tranparent text-black  border-[2px] border-gray-500  hover:text-white hover:bg-black hover:border-transparent dark:text-white",
        google:
          "bg-tranparent text-black  border-[2px] border-gray-500  hover:text-white hover:bg-black hover:border-transparent dark:text-white",
      },
      size: {
        default: "px-10 py-6 max-md:px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {variant === "google" && (
          <div className="absolute left-12">
            <GoogleIcon />
          </div>
        )}
        <div>{children}</div>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
