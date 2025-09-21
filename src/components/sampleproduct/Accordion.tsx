
import React, { useState } from 'react';
import { ChevronDownIcon } from './icons';

interface AccordionProps {
  title: string;
  count: number;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

const Accordion: React.FC<AccordionProps> = ({ title, count, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={toggleAccordion}
        className="w-full flex justify-between items-center p-4 bg-gray-50 hover:bg-gray-100 focus:outline-none"
      >
        <div className="flex items-center">
          <h4 className="font-semibold text-lg text-gray-700">{title}</h4>
          <span className="ml-3 px-2 py-0.5 bg-green-200 text-green-800 text-xs font-bold rounded-full">{count} record{count !== 1 ? 's' : ''}</span>
        </div>
        <ChevronDownIcon className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="bg-white">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
