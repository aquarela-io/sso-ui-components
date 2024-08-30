import type { ReactElement } from "react";

export const IconContainer: React.FC<{
  size?: string | null;
  children: ReactElement<HTMLDivElement>;
}> = ({ children, size }) => (
  <div
    className={`${size !== "icon" && " absolute -translate-y-1/2  "} left-5 top-1/2 max-h-[50px]`}
  >
    {children}
  </div>
);
