// // @ts-check
// import React, { Fragment } from 'react'
// import { OptionsMenuLink } from './OptionsMenuLink'

// /**
//  * @param {Object} options
//  * @param {import('./types').MenuOptions_Links} options.options
//  * @param {() => void} options.onClose
//  * @returns {JSX.Element}
//  */
// export const OptionsMenuSubLinks = ({ options, onClose }) => {
//   return (
//     <Fragment>
//       {options.map((option, i) => {
//         switch (option.type) {
//           case 'divider':
//             return <hr key={i} />
//           case 'link':
//             return (
//               <OptionsMenuLink
//                 icon={option.icon}
//                 text={option.text}
//                 tip={option.tip}
//                 href={option.href}
//                 target={option.target}
//                 key={i}
//                 highlight={window.location.href.indexOf(option.href) > -1}
//               />
//             )
//         }
//       })}
//     </Fragment>
//   )
// }


import React, { Fragment } from 'react';
import { OptionsMenuLink } from './OptionsMenuLink';
import { MenuOptionsLinks } from './types';

interface OptionsMenuSubLinksProps {
  options: MenuOptionsLinks;
  onClose: () => void;
}

export const OptionsMenuSubLinks: React.FC<OptionsMenuSubLinksProps> = ({ options, onClose }) => {
  return (
    <Fragment>
      {options.map((option, i) => {
        switch (option.type) {
          case 'divider':
            return <hr key={i} />;
          case 'link':
            return (
              <OptionsMenuLink
                icon={option.icon || ''}
                text={option.text}
                tip={option.tip}
                href={option.href}
                target={option.target}
                key={i}
                highlight={window.location.href.indexOf(option.href) > -1}
              />
            );
          default:
            return null; // Ensures that the function always returns a value
        }
      })}
    </Fragment>
  );
};
