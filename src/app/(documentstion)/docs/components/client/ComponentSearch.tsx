import React, { useState } from 'react';

interface ComponentSearchProps {
  onSearch: (query: string) => void;
}

const ComponentSearch: React.FC<ComponentSearchProps> = ({ onSearch }) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-6 flex items-center gap-2">
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Search components..."
        className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-white dark:bg-[#23272f] text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm shadow-sm"
      />
    </div>
  );
};

export default ComponentSearch;
