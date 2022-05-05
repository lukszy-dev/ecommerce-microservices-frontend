import { FC } from 'react';

interface ButtonProps {
  onClick?: () => void;
  classes?: string;
}

const Button: FC<ButtonProps> = ({ children, classes, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`min-w-[100px] bg-pink-500 p-3 rounded-lg text-white ${classes}`}
    >
      {children}
    </button>
  );
};

export default Button;
