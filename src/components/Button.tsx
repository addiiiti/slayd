import React from 'react';
import { motion } from 'framer-motion';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  isFullWidth?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary',
  size = 'md',
  icon,
  isFullWidth = false,
}) => {
  const baseStyles = 'font-medium rounded-full transition-all duration-200 flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-slayd-blue hover:bg-opacity-90 text-white shadow-lg hover:shadow-xl hover:shadow-slayd-blue/20',
    secondary: 'bg-slayd-purple hover:bg-opacity-90 text-white shadow-lg hover:shadow-xl hover:shadow-slayd-purple/20',
    outline: 'bg-transparent border-2 border-slayd-pink text-slayd-pink hover:bg-slayd-pink hover:bg-opacity-10',
  };
  
  const sizeStyles = {
    sm: 'text-sm py-2 px-4',
    md: 'text-base py-3 px-6',
    lg: 'text-lg py-4 px-8',
  };
  
  const widthStyle = isFullWidth ? 'w-full' : '';

  return (
    <motion.button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;