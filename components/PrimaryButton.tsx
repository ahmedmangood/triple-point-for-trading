"use client";

interface PrimaryButtonProps {
  title: string;
  action?: () => void;
  ourStyle?: string;
}

const PrimaryButton = ({ title, ourStyle, action }: PrimaryButtonProps) => {
  return (
    <button
      className={`bg-orange-color hover:bg-orange-color-hover text-sm font-semibold transition-colors text-white py-2.5 px-12 shadow rounded-xl w-50 mx-auto mt-5 ${ourStyle}`}
      onClick={action}
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
