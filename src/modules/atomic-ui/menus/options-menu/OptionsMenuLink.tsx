// // @ts-check
// import React from 'react'
// import { Icon } from '@modules/react/atoms/'

// /**
//  * @param {Object} options
//  * @param {string} options.icon
//  * @param {string} options.href
//  * @param {string} options.text
//  * @param {string=} options.tip
//  * @param {string=} options.target
//  * @param {boolean=} options.highlight
//  * @param {boolean=} options.disabled
//  * @returns {JSX.Element}
//  */
// export const OptionsMenuLink = ({
//   icon,
//   text,
//   tip,
//   href,
//   target = null,
//   highlight = false,
//   disabled = false
// }) => (
//   <a
//     className={`${disabled ? 'disabled ' : ''}link-${
//       highlight ? 'options-menu-highlight' : 'options-menu'
//     }`}
//     href={href}
//     target={target}
//     rel={target == '_blank' ? 'nofollow noreferrer' : null}
//     // this is needed otherwise on click the link
//     // would remain focused
//     onMouseDown={e => {
//       if (e.button === 1) {
//         // DISCUSTING - assumes e.currentTarget will be in DOM
//         const will = e.currentTarget.blur.bind(e.currentTarget)
//         window.requestAnimationFrame(will)
//       }
//     }}
//     title={tip}
//   >
//     {icon && <Icon svg={icon} />}
//     <span className="text">{text}</span>
//   </a>
// )


import React from 'react';
import { Icon } from '@modules/react/atoms/';

interface OptionsMenuLinkProps {
  icon: string;
  href: string;
  text: string;
  tip?: string;
  target?: string;
  highlight?: boolean;
  disabled?: boolean;
}

export const OptionsMenuLink: React.FC<OptionsMenuLinkProps> = ({
  icon,
  text,
  tip,
  href,
  target = null,
  highlight = false,
  disabled = false
}) => (
  <a
    className={`${disabled ? 'disabled ' : ''}link-${
      highlight ? 'options-menu-highlight' : 'options-menu'
    }`}
    href={href}
    target={target || undefined}
    rel={target === '_blank' ? 'nofollow noreferrer' : undefined}
    // this is needed otherwise on click the link
    // would remain focused
    onMouseDown={(e) => {
      if (e.button === 1) {
        // DISCUSTING - assumes e.currentTarget will be in DOM
        const will = e.currentTarget.blur.bind(e.currentTarget);
        window.requestAnimationFrame(will);
      }
    }}
    title={tip}
  >
    {icon && <Icon svg={icon} />}
    <span className="text">{text}</span>
  </a>
);

