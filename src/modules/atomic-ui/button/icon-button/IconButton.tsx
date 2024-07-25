// // @ts-check

// import { Icon } from '@modules/react/atoms/'
// import React from 'react'

// export const IconButton = React.forwardRef(
//   /**
//    * Creates a React button with options to
//    *
//    * @param {object} options
//    * @param {string=} options.className - class name string
//    * @param {string=} options.title - title string
//    * @param {string=} options.icon - svg string
//    * @param {'black-static'|'orange-static'|'orange-hover'|'gray-orange-hover'|'orange-bordered-hover'|'platform-bar-control'=} options.style
//    * @param {50|40|30|'fill-height'=} options.size
//    * @param {() => void} options.onClick - callback function for click event
//    * @param {React.KeyboardEventHandler<HTMLButtonElement>=} options.onKeyUp - callback function for click event
//    * @param {boolean=} options.disabled
//    *
//    * @example
//    * IconButton({
//    *   title: 'Button',
//    *   icon: '<svg>...</svg>',
//    *   onClick: () => {},
//    * })
//    * @returns {JSX.Element}
//    */
//   (
//     {
//       onClick,
//       title,
//       icon,
//       style = 'black-static',
//       size = 50,
//       disabled = false,
//       onKeyUp = undefined,
//       className = ''
//     },
//     ref
//   ) => {
//     return (
//       <button
//         className={`icon-button ${style} size-${size} ${className}`}
//         onMouseDown={e => {
//           e.preventDefault()
//         }}
//         onMouseDownCapture={e => {
//           e.stopPropagation()
//         }}
//         onPointerDownCapture={e => {
//           e.stopPropagation()
//         }}
//         onPointerUp={function(e) {
//           e.button === 0 && onClick.apply(this, arguments)
//         }}
//         onKeyUp={onKeyUp}
//         title={title}
//         type="button"
//         ref={ref}
//         disabled={disabled}
//       >
//         <Icon svg={icon} className="icon-button-icon"></Icon>
//       </button>
//     )
//   }
// )


import { Icon } from '@modules/react/atoms/';
import React, { KeyboardEventHandler, MouseEventHandler } from 'react';

interface IconButtonProps {
  className?: string;
  title?: string;
  icon?: string;
  style?: 'black-static' | 'orange-static' | 'orange-hover' | 'gray-orange-hover' | 'orange-bordered-hover' | 'platform-bar-control';
  size?: 50 | 40 | 30 | 'fill-height';
  onClick: MouseEventHandler<HTMLButtonElement>;
  onKeyUp?: KeyboardEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      onClick,
      title,
      icon,
      style = 'black-static',
      size = 50,
      disabled = false,
      onKeyUp,
      className = '',
    },
    ref
  ) => {
    return (
      <button
        className={`icon-button ${style} size-${size} ${className}`}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
        onMouseDownCapture={(e) => {
          e.stopPropagation();
        }}
        onPointerDownCapture={(e) => {
          e.stopPropagation();
        }}
        onPointerUp={(e) => {
          if (e.button === 0) onClick(e);
        }}
        onKeyUp={onKeyUp}
        title={title}
        type="button"
        ref={ref}
        disabled={disabled}
      >
        <Icon svg={icon} className="icon-button-icon"></Icon>
      </button>
    );
  }
);
