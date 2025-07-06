"use client"

import * as React from 'react';
import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'tsx' }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (navigator && navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
      navigator.clipboard.writeText(code)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1500);
        })
        .catch(() => {
          fallbackCopyTextToClipboard(code);
        });
    } else {
      fallbackCopyTextToClipboard(code);
    }
  };

  // Fallback for older browsers
  function fallbackCopyTextToClipboard(text: string) {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Optionally handle error (e.g., show a toast)
    }
  }

  return (
    <div className="my-4 rounded-xl border border-gray-800 bg-[#161b22] overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-[#20262e] border-b border-gray-800">
        <span className="text-xs font-mono text-gray-400 select-none">{language}</span>
        <button
          className="ml-auto bg-[#23272f] text-gray-300 px-3 py-1 rounded-md text-xs font-semibold hover:bg-[#30363d] active:bg-[#23272f] focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          onClick={handleCopy}
          aria-label="Copy code"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <pre className="px-4 py-4 text-xs sm:text-sm leading-relaxed text-gray-100 font-mono whitespace-pre-wrap break-words min-h-[48px] max-h-72 overflow-x-auto bg-transparent">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
