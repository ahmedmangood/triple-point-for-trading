"use client";

interface PrimaryButtonProps {
  title: string;
  action?: () => void;
  ourStyle?: string;
}

const PrimaryButton = ({ title, ourStyle, action }: PrimaryButtonProps) => {
  return (
    <button
      className={`border-2 border-orange-color hover:bg-orange-color text-sm font-semibold transition-colors text-white py-3 px-14 shadow rounded-xl mx-auto mt-5 mb-3 ${ourStyle}`}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
