// // @ts-check
// import React, { Fragment } from 'react'
// import { OptionsMenuSubButton } from './OptionsMenuSubButton'
// import { OptionsMenuButton } from './OptionsMenuButton'
// import { OptionsMenuLink } from './OptionsMenuLink'
// import { OptionsMenuSubLinksButton } from './OptionsMenuSubLinksButton'

// /**
//  * @typedef {import('./types').MenuOptions} MenuOptions
//  */

// /**
//  * Load a list of options of multiple types
//  *
//  * @param {Object} options
//  * @param {MenuOptions} options.options
//  * @param {() => void} options.onClose
//  * @returns {JSX.Element}
//  */
// export const OptionsMenuOptionsList = ({ options, onClose }) => (
//   <Fragment>
//     {options.map((option, i) => {
//       switch (option.type) {
//         case 'divider':
//           return <hr key={i} />
//         case 'onClick':
//           return (
//             <OptionsMenuButton
//               icon={option.icon}
//               text={option.text}
//               tip={option.tip}
//               disabled={option.disabled}
//               key={i}
//               onClick={() => {
//                 option.onClick()
//                 onClose()
//               }}
//             />
//           )
//         case 'link':
//           return (
//             <OptionsMenuLink
//               icon={option.icon}
//               text={option.text}
//               tip={option.tip}
//               href={option.href}
//               target={option.target}
//               disabled={option.disabled}
//               key={i}
//             />
//           )
//         case 'sub':
//           return (
//             <OptionsMenuSubButton option={option} key={i} onClose={onClose} />
//           )
//         case 'sub-links':
//           return (
//             <OptionsMenuSubLinksButton
//               option={option}
//               key={i}
//               onClose={onClose}
//             />
//           )
//       }
//     })}
//   </Fragment>
// )

import React, { Fragment } from 'react';
import { OptionsMenuSubButton } from './OptionsMenuSubButton';
import { OptionsMenuButton } from './OptionsMenuButton';
import { OptionsMenuLink } from './OptionsMenuLink';
import { OptionsMenuSubLinksButton } from './OptionsMenuSubLinksButton';
import { MenuOption } from './types';

interface OptionsMenuOptionsListProps {
  options: MenuOption[];
  onClose: () => void;
}

/**
 * Load a list of options of multiple types
 *
 * @param {OptionsMenuOptionsListProps} props
 * @returns {JSX.Element}
 */
export const OptionsMenuOptionsList: React.FC<OptionsMenuOptionsListProps> = ({ options, onClose }) => (
  <Fragment>
    {options.map((option, i) => {
      switch (option.type) {
        case 'divider':
          return <hr key={i} />;
        case 'onClick':
          return (
            <OptionsMenuButton
              icon={option.icon || ''}
              text={option.text}
              tip={option.tip}
              disabled={option.disabled}
              key={i}
              onClick={() => {
                option.onClick();
                onClose();
              }}
            />
          );
        case 'link':
          return (
            <OptionsMenuLink
              icon={option.icon || ''}
              text={option.text}
              tip={option.tip}
              href={option.href}
              target={option.target}
              disabled={option.disabled}
              key={i}
            />
          );
        case 'sub':
          return (
            <OptionsMenuSubButton option={option} key={i} onClose={onClose} />
          );
        case 'sub-links':
          return (
            <OptionsMenuSubLinksButton
              option={option}
              key={i}
              onClose={onClose}
            />
          );
        default:
          return null;
      }
    })}
  </Fragment>
);
