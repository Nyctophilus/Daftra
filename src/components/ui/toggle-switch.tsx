"use client";
import { useState } from "react";

interface IToggleSwitchProps {
  onChange?: (value: boolean) => void;
  defaultChecked?: boolean;
}

const ToggleSwitch = ({ onChange, defaultChecked }: IToggleSwitchProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultChecked ?? false);
  const handleCheckboxChange = () => {
    const newCheckedState = !isChecked;
    setIsChecked(newCheckedState);
    onChange?.(newCheckedState);
  };

  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
            className="sr-only"
          />
          <div className={`box block h-6 w-12 rounded-full bg-gray-300/70`} />
          <div
            className={`absolute left-1 top-1 flex size-4 items-center justify-center rounded-full transition ${
              isChecked ? "translate-x-[24px] bg-green-800" : "bg-white"
            }`}
          />
        </div>
      </label>
    </>
  );
};

export default ToggleSwitch;
