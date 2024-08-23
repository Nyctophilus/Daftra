import { cn } from "@/lib/utils";
import { useState } from "react";

const SearchBar = () => {
  const [isExpand, setIsExpand] = useState(
    window.innerWidth < 1024 ? false : true
  );

  return (
    <form
      action=""
      className="ms-0 me-auto  relative mx-auto w-fit max-w-32 lg:max-w-max overflow-hidden rounded-full"
      onFocus={() => window.innerWidth < 1024 && setIsExpand(true)}
      onBlur={() => window.innerWidth < 1024 && setIsExpand(false)}
    >
      <input
        type="search"
        className={cn(
          "peer cursor-pointer relative z-10 size-8 rounded-full border border-green-600 bg-transparent outline-none transition-[width] duration-500",
          isExpand &&
            "w-full ms-0 cursor-text bg-white z-0 border-white pl-6 lg:pl-10 pr-4 h-10"
        )}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "absolute inset-y-0 z-0 my-auto h-fit size-8 p-1 rounded-full bg-green-600 stroke-white",
          isExpand && "left-1 bg-green-600"
        )}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </form>
  );
};
export default SearchBar;
