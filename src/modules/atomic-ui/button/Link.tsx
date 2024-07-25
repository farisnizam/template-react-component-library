// // @ts-check

// import React, { forwardRef } from 'react'
// import { Icon } from '@modules/react/atoms/'

// const Link = forwardRef(
//   /**
//    * Creates a React button with options to
//    *
//    * @param {object} options
//    * @param {string} options.href
//    * @param {string=} options.text
//    * @param {(
//    * | 'secondary'
//    * | 'secondary-contrast'
//    * | 'like-input'
//    * )=} options.style
//    * @param {'normal'|'back'=} options.behavior
//    * @param {string=} options.title
//    * @param {string=} options.icon - svg string
//    * @param {'left'|'right'=} options.iconPosition
//    * @param {'_blank'=} options.target
//    * @param {boolean=} options.disabled
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
//   function Link(
//     {
//       href,
//       text,
//       style = 'secondary',
//       behavior = 'normal',
//       title = null,
//       icon = null,
//       iconPosition = 'left',
//       target = null,
//       disabled = null
//     },
//     ref
//   ) {
//     return (
//       <a
//         ref={ref}
//         className={`link-${style} ${
//           icon ? `has-icon has-icon-${iconPosition}` : ''
//         } ${text ? `has-text` : ''} behavior-${behavior} ${
//           disabled ? 'disabled' : ''
//         }`}
//         href={href}
//         onClick={
//           disabled
//             ? e => {
//                 e.preventDefault()
//               }
//             : null
//         }
//         // this is needed otherwise on click the link
//         // would remain focused
//         onMouseDown={e => {
//           if (e.button === 1) {
//             // DISCUSTING - assumes e.currentTarget will be in DOM
//             const will = e.currentTarget.blur.bind(e.currentTarget)
//             window.requestAnimationFrame(will)
//           }
//         }}
//         title={title}
//         target={target}
//       >
//         {icon && iconPosition == 'left' && <Icon svg={icon} />}
//         {text && <span className="text">{text}</span>}
//         {icon && iconPosition == 'right' && (
//           <Icon className="icon-right" svg={icon}></Icon>
//         )}
//       </a>
//     )
//   }
// )

// /**
//  * @typedef {Parameters<typeof Link>[0]} LinkPropsType
//  */

// export default Link


import { forwardRef, AnchorHTMLAttributes } from 'react';
import { Icon } from '@modules/react/atoms/';

interface LinkProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> {
  href: string;
  text?: string;
  linkStyle?: 'secondary' | 'secondary-contrast' | 'like-input';
  behavior?: 'normal' | 'back';
  title?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
  target?: '_blank';
  disabled?: boolean;
}

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      href,
      text,
      linkStyle = 'secondary',
      behavior = 'normal',
      title,
      icon,
      iconPosition = 'left',
      target,
      disabled = false,
      ...rest
    },
    ref
  ) => {
    return (
      <a
        ref={ref}
        className={`link-${linkStyle} ${
          icon ? `has-icon has-icon-${iconPosition}` : ''
        } ${text ? `has-text` : ''} behavior-${behavior} ${
          disabled ? 'disabled' : ''
        }`}
        href={href}
        onClick={
          disabled
            ? (e) => {
                e.preventDefault();
              }
            : undefined
        }
        onMouseDown={(e) => {
          if (e.button === 1) {
            const will = e.currentTarget.blur.bind(e.currentTarget);
            window.requestAnimationFrame(will);
          }
        }}
        title={title}
        target={target}
        {...rest}
      >
        {icon && iconPosition === 'left' && <Icon svg={icon} />}
        {text && <span className="text">{text}</span>}
        {icon && iconPosition === 'right' && (
          <Icon className="icon-right" svg={icon}></Icon>
        )}
      </a>
    );
  }
);

export default Link;
