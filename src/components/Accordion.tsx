import { BtnsType } from "@/constants/btns";
import { cn } from "@/lib/utils";
import { motion, Variants } from "framer-motion";
import React, { useState } from "react";

interface AccordionItemProps {
  name: string;
  subs?: {
    name: string;
  }[];
  isExpanded: boolean;
  onToggle: () => void;
}

const AccordionItem: React.FC<AccordionItemProps> = ({
  name,
  subs,
  isExpanded,
  onToggle,
}) => {
  const cardVariants: Variants = {
    collapsed: {
      height: "60px",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
    expanded: {
      height: "auto",
      transition: { type: "spring", stiffness: 300, damping: 15 },
    },
  };

  const contentVariants: Variants = {
    collapsed: { opacity: 0 },
    expanded: {
      opacity: 1,
      transition: { delay: 0.1 },
    },
  };

  const chevronVariants: Variants = {
    collapsed: { rotate: 0 },
    expanded: { rotate: 180 },
  };

  return (
    <motion.div
      className={`w-90 bg-gray-50 dark:bg-gray-800' my-4 h-full cursor-pointer select-none overflow-hidden rounded-lg border  dark:border-gray-700`}
      variants={cardVariants}
      initial="collapsed"
      animate={isExpanded ? "expanded" : "collapsed"}
      onClick={subs && onToggle}
    >
      <div className="flex items-center justify-between p-4 text-gray-900 dark:text-gray-100">
        <h2 className="capitalize m-0 text-sm font-semibold text-gray-700">
          {name}
        </h2>
        {subs && (
          <motion.div variants={chevronVariants}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </g>
            </svg>
          </motion.div>
        )}
      </div>
      {subs?.map((sub) => (
        <motion.div
          className="text-md select-none ms-4 px-4 py-4"
          variants={contentVariants}
          initial="collapsed"
          animate={isExpanded ? "expanded" : "collapsed"}
        >
          <p className="capitalize m-0 text-sm text-gray-900 dark:text-gray-100">
            {sub.name}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export const Accordion: React.FC<{ className?: string; items: BtnsType }> = ({
  className,
  items,
}) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={item.name + index}
          name={item.name}
          subs={item.subs}
          isExpanded={expandedIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};
