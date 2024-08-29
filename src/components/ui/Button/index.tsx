"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import { GoogleIcon } from "@/components/icons/GoogleIcon";
import { buttonVariants } from "./constants";
import { IconContainer } from "@/components/icons/IconContainer";
import { AppleIcon } from "@/components/icons/AppleIcon";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const handleIcons = ({ variant }: VariantProps<typeof buttonVariants>) => {
  switch (variant) {
    case "social-google":
      return <GoogleIcon />;
    case "social-apple":
      return <AppleIcon />;
    default:
      return <></>;
  }
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    console.log("Button Rendered");
    const Comp = asChild ? Slot : "button";

    const injectIconOnChild = React.isValidElement(children) ? (
      React.cloneElement(children as React.ReactElement, {
        className: cn(children.props.className, className),
        children: (
          <>
            <IconContainer size={size}>
              {handleIcons({ variant })}
            </IconContainer>
            {children.props.children}
          </>
        ),
      })
    ) : (
      <>
        {" "}
        <IconContainer size={size}>{handleIcons({ variant })}</IconContainer>
        {children}
      </>
    );

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {injectIconOnChild}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export type { ButtonProps };
export { Button };
