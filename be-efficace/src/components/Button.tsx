import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-pale-gold text-white font-bold py-2 px-4 rounded hover:bg-opacity-80 transition-all duration-300 ease-in-out transform hover:scale-105 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
