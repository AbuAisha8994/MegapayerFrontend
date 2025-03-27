import React from 'react';
import { motion } from 'framer-motion';

interface FilterTag {
  id: string;
  label: string;
  count?: number;
}

interface FilterTagsProps {
  tags: FilterTag[];
  activeTags: string[];
  onTagToggle: (tag: string) => void;
}

const FilterTags: React.FC<FilterTagsProps> = ({ tags, activeTags, onTagToggle }) => {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-gray-300 mb-3">Filter by category:</h3>
      <div className="flex flex-wrap gap-2">
        <motion.button
          key="all"
          onClick={() => onTagToggle('all')}
          className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
            activeTags.length === 0 
              ? 'bg-primary text-white' 
              : 'bg-dark/50 text-gray-300 hover:bg-dark/70'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          All Categories
        </motion.button>
        
        {tags.map((tag) => (
          <motion.button
            key={tag.id}
            onClick={() => onTagToggle(tag.id)}
            className={`px-3 py-1 text-sm rounded-full transition-all duration-300 ${
              activeTags.includes(tag.id) 
                ? 'bg-primary text-white' 
                : 'bg-dark/50 text-gray-300 hover:bg-dark/70'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {tag.label}
            {tag.count !== undefined && (
              <span className="ml-1 text-xs opacity-70">({tag.count})</span>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FilterTags;
