import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex items-center justify-center relative  w-full  leading-[43%] rounded-[50px] font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-500",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-800",
        "social-google":
          "bg-transparent text-black border-[2px] border-gray-500 hover:text-white hover:bg-black hover:border-transparent dark:text-white",
        "social-apple":
          "text-white font-sans bg-black border-transparent hover:border-gray-200 dark:bg-white dark:text-black border-[2px] dark:hover:border-gray-500  dark:border-gray-200",
      },
      size: {
        default: "px-[0.8em] py-[1.5em]",
        icon: "p-[1em] w-[60px] h-[60px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
