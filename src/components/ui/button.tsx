import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { GoogleIcon } from "../social-icons/GoogleIcon";
import { buttonVariants } from "./Button.constants";

interface ButtonProps
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

export type { ButtonProps };
export { Button };
