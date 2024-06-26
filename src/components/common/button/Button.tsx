import React from 'react';
import styles from './Button.module.scss';

interface ButtonProps {
  type: string;
  width: number;
  height: number;
  content: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ type, width, height, content, onClick }: ButtonProps) => {
  // width는 319, 111, 79
  // height는 45, 45, 37
  const dynamicPaddingStyle = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <button
      onClick={onClick}
      style={dynamicPaddingStyle}
      className={`${styles.btn}
      ${type === '100' ? styles.btnGreen100 : type === '10' ? styles.btnGreen10 : styles.btnWhite}`}
    >
      {content}
    </button>
  );
};

export default Button;
