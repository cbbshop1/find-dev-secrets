
import React, { useState } from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  initiallyOpen?: boolean;
}

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-0' : '-rotate-90'}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

export const Section: React.FC<SectionProps> = ({ title, children, initiallyOpen = false }) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);

  return (
    <div className="border border-slate-700 rounded-lg bg-slate-800 shadow-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left bg-slate-700/50 hover:bg-slate-700 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-slate-100">{title}</h2>
        <ChevronIcon isOpen={isOpen} />
      </button>
      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="p-4 sm:p-6 prose prose-invert max-w-none prose-slate prose-headings:font-semibold prose-p:leading-relaxed prose-li:my-1">
              {children}
          </div>
        </div>
      </div>
    </div>
  );
};