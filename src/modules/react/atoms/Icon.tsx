// // @ts-check
// import React from 'react'

// // @ts-ignore
// export default function Icon({ svg, className = '', ...props }) {
//   return (
//     <span
//       className={`icon ${className}`}
//       dangerouslySetInnerHTML={{ __html: svg }}
//       {...props}
//     ></span>
//   )
// }


import React, { HTMLAttributes } from 'react';

interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  svg: string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ svg, className = '', ...props }) => {
  return (
    <span
      className={`icon ${className}`}
      dangerouslySetInnerHTML={{ __html: svg }}
      {...props}
    ></span>
  );
};

export default Icon;

