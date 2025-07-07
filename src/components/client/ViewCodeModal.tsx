'use client';

import * as React from 'react';
import CodeBlock from './CodeBlock';

interface ViewCodeModalProps {
  open: boolean;
  onClose: () => void;
  code: string;
  filename: string;
}

const ViewCodeModal: React.FC<ViewCodeModalProps> = ({ open, onClose, code, filename }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-[#161b22] rounded-xl shadow-xl max-w-2xl w-full mx-4 p-0 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-900 dark:hover:text-white text-xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <div className="p-4 pb-0 border-b border-gray-200 dark:border-gray-700">
          <span className="font-mono text-xs text-gray-500">{filename}</span>
        </div>
        <div className="p-4 pt-2">
          <CodeBlock code={code} language="tsx" />
        </div>
      </div>
    </div>
  );
};

export default ViewCodeModal;
