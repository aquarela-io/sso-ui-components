import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "w-full rounded-[50px] font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex justify-center items-center transition-all duration-500 relative",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-800",
        "social-google":
          "bg-transparent text-black border-[2px] border-gray-500 hover:text-white hover:bg-black hover:border-transparent dark:text-white",
        "social-apple":
          "dark:bg-white dark:text-black border-[2px] dark:hover:border-gray-500  dark:border-gray-200 text-white font-sans bg-black border-transparent hover:border-gray-200",
      },
      size: {
        default: "p-[20px]",
        icon: "p-[5px] w-[60px] h-[60px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
