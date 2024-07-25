// // @ts-check

// import React, { forwardRef } from 'react'
// import { Icon } from '@modules/react/atoms/'

// export default forwardRef(
//   /**
//    * Creates a React button with options to
//    *
//    * @param {object} options
//    * @param {() => void} options.onClick - callback function for click event
//    * @param {string=} options.className - optiona class name
//    * @param {string=} options.text - text string
//    * @param {string=} options.title - title string
//    * @param {string=} options.icon - svg string
//    * @param {'left'|'right'=} options.iconPosition - a button should never have 2 icons
//    * @param {(
//    * | 'primary'
//    * | 'primary-large'
//    * | 'primary-contrast'
//    * | 'secondary'
//    * | 'secondary-orange'
//    * | 'ui-selectable-gray'
//    * | 'ui-contrast'
//    * | 'bar'
//    * | 'bar-icon-xl'
//    * | 'bar-contrast'
//    * | 'bar-orange-icon'
//    * )} options.style - only navigation for now defined
//    * @param {'button'|'submit'=} options.type
//    * @param {boolean=} options.selected
//    * @param {boolean=} options.disabled
//    * @param {string=} options.id
//    * @param {'rotate'|'none'=} options.iconAnimation
//    *
//    * @example
//    * Button({
//    *   text: 'Click',
//    *   title: 'Does click'
//    *   icon: '<svg>...</svg>'
//    *   onClick: () => {}
//    * })
//    * @returns {JSX.Element}
//    */
//   function Button(
//     {
//       onClick,
//       text = '',
//       className = '',
//       title,
//       icon,
//       style,
//       iconPosition = 'left',
//       type = 'button',
//       selected = false,
//       disabled = false,
//       id = null,
//       iconAnimation = 'rotate'
//     },
//     ref
//   ) {
//     return (
//       <button
//         id={id}
//         ref={ref}
//         className={`${className} button-${style} ${
//           icon
//             ? `has-icon has-icon-${iconPosition} icon-animation-${iconAnimation}`
//             : ''
//         } ${text ? `has-text` : ''} ${selected ? `selected` : ''}`}
//         onMouseDown={e => e.preventDefault()}
//         onClick={onClick}
//         title={title}
//         type={type}
//         disabled={disabled}
//       >
//         {icon && iconPosition === 'left' && (
//           <Icon className="icon-left" svg={icon}></Icon>
//         )}
//         {text && <span className="text">{text}</span>}
//         {icon && iconPosition === 'right' && (
//           <Icon className="icon-right" svg={icon}></Icon>
//         )}
//       </button>
//     )
//   }
// )


import { forwardRef, MouseEventHandler } from 'react';
import { Icon } from '@modules/react/atoms/';
import './style.less'

type ButtonProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
  className?: string;
  text?: string;
  title?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  style?: 
    | 'primary'
    | 'primary-large'
    | 'primary-contrast'
    | 'secondary'
    | 'secondary-orange'
    | 'ui-selectable-gray'
    | 'ui-contrast'
    | 'bar'
    | 'bar-icon-xl'
    | 'bar-contrast'
    | 'bar-orange-icon';
  type?: 'button' | 'submit';
  selected?: boolean;
  disabled?: boolean;
  id?: string;
  iconAnimation?: 'rotate' | 'none';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      onClick,
      text = '',
      className = '',
      title,
      icon,
      style,
      iconPosition = 'left',
      type = 'button',
      selected = false,
      disabled = false,
      id = null,
      iconAnimation = 'rotate'
    },
    ref
  ) => {
    return (
      <button
        id={id || undefined}
        ref={ref}
        className={`${className} button-${style} ${
          icon
            ? `has-icon has-icon-${iconPosition} icon-animation-${iconAnimation}`
            : ''
        } ${text ? `has-text` : ''} ${selected ? `selected` : ''}`}
        onMouseDown={e => e.preventDefault()}
        onClick={onClick}
        title={title}
        type={type}
        disabled={disabled}
      >
        {icon && iconPosition === 'left' && (
          <Icon className="icon-left" svg={icon}></Icon>
        )}
        {text && <span className="text">{text}</span>}
        {icon && iconPosition === 'right' && (
          <Icon className="icon-right" svg={icon}></Icon>
        )}
      </button>
    );
  }
);

export default Button
