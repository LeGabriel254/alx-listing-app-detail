import React from 'react';

interface PillProps {
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const Pill: React.FC<PillProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border ${isActive ? 'bg-blue-600 text-white border-blue-600' : 'bg-gray-100 text-gray-700 border-gray-300'
        } hover:bg-blue-500 hover:text-white transition-colors`}
    >
      {label}
    </button>
  );
};

export default Pill;
