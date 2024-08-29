import React, { ReactElement } from "react";

export const IconContainer: React.FC<{
  size?: string | null;
  children: ReactElement<HTMLDivElement>;
}> = ({ children, size }) => (
  <div className={`${size !== "icon" && " absolute"} left-12 max-h-[50px] `}>
    {children}
  </div>
);
