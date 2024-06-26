import React from 'react';
import styles from './Label.module.scss';

interface LabelProps {
  type: string;
  content: string;
  paddingH: number;
  paddingV: number;
}

const Label = ({ type, content, paddingH, paddingV }: LabelProps) => {
  // width는 311, 103, 71
  // height는 45, 45, 37

  const dynamicPaddingStyle = {
    padding: `${paddingH}px ${paddingV}px`,
  };

  return (
    <div
      style={dynamicPaddingStyle}
      className={`${styles.label}
      ${type === '100' ? styles.labelGreen100 : type === '10' ? styles.labelGreen10 : styles.labelWhite}`}
    >
      {content}
    </div>
  );
};

export default Label;
