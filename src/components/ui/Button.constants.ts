import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "w-full rounded-[50px] font-bold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex justify-center items-center transition-all duration-500 relative",
  {
    variants: {
      variant: {
        default:
          "bg-blue-600 text-white hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-800",
        social:
          "bg-transparent text-black border-[2px] border-gray-500 hover:text-white hover:bg-black hover:border-transparent dark:text-white",
        google:
          "bg-transparent text-black border-[2px] border-gray-500 hover:text-white hover:bg-black hover:border-transparent dark:text-white",
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
