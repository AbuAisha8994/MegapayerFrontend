import React from 'react';
import { motion } from 'framer-motion';

interface Section {
  title: string;
  id: string;
  subsections?: Section[];
}

interface TableOfContentsProps {
  sections: Section[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderSections = (sections: Section[], depth = 0) => {
    return sections.map((section, index) => (
      <motion.li 
        key={section.id} 
        className={`mb-2 ${depth > 0 ? 'ml-4' : ''}`}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.05 }}
      >
        <button 
          onClick={() => scrollToSection(section.id)}
          className={`text-left hover:text-primary transition-colors ${depth === 0 ? 'font-medium' : 'text-sm text-gray-300'}`}
        >
          {section.title}
        </button>
        
        {section.subsections && section.subsections.length > 0 && (
          <ul className="mt-1 space-y-1">
            {renderSections(section.subsections, depth + 1)}
          </ul>
        )}
      </motion.li>
    ));
  };

  return (
    <div className="p-4 bg-dark/20 backdrop-blur-sm rounded-lg border border-white/10">
      <h3 className="text-md font-bold mb-3 text-primary">Table of Contents</h3>
      <ul>
        {renderSections(sections)}
      </ul>
    </div>
  );
};

export default TableOfContents;
