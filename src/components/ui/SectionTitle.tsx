import { HTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '',
  ...props 
}: SectionTitleProps) => {
  return (
    <motion.div 
      className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      {...props}
    >
      {subtitle && (
        <span className="inline-block px-3 py-1 text-sm font-medium text-secondary-500 bg-secondary-50 rounded-full mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="mb-4">{title}</h2>
      <div className={`h-1 w-20 bg-secondary-500 rounded ${centered ? 'mx-auto' : ''}`}></div>
    </motion.div>
  );
};

export default SectionTitle;