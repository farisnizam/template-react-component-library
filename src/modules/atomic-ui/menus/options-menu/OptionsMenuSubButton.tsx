// // @ts-check
// import React, { useRef, useState } from 'react'
// import { OptionsMenu } from './OptionsMenu'
// import { OptionsMenuOptionsList } from './OptionsMenuOptionsList'
// import { atomic_arrowRightIcon } from '@modules/icons/'
// import { Icon } from '@modules/react/atoms/'
// import useMouseEnterAndLeave from '@modules/react/hooks/useMouseEnterAndLeave'

// /**
//  * @typedef {import('./types').MenuOption_Sub} MenuOption_Sub
//  */

// /**
//  * @param {Object} options
//  * @param {MenuOption_Sub} options.option
//  * @param {() => void} options.onClose
//  * @returns {JSX.Element}
//  */
// export const OptionsMenuSubButton = ({ option, onClose }) => {
//   const [active, setActive] = useState(false)
//   const ref = useRef(null)
//   useMouseEnterAndLeave(ref, {
//     onMouseEnter: () => {
//       setActive(true)
//     },
//     onMouseLeave: () => {
//       setActive(false)
//     }
//   })
//   return (
//     <div className="options-menu-sub-button-container">
//       <button
//         className={`button-options-menu-sub`}
//         onMouseDown={e => e.preventDefault()}
//         onClick={() => {}}
//         title={option.tip}
//         type="button"
//       >
//         <span className="text">{option.text}</span>
//         <Icon svg={atomic_arrowRightIcon} />
//       </button>
//       {active && (
//         <OptionsMenu>
//           <OptionsMenuOptionsList options={option.sub} onClose={onClose} />
//         </OptionsMenu>
//       )}
//     </div>
//   )
// }


import React, { useRef, useState } from 'react';
import { OptionsMenu } from './OptionsMenu';
import { OptionsMenuOptionsList } from './OptionsMenuOptionsList';
import { atomic_arrowRightIcon } from '@modules/icons/';
import { Icon } from '@modules/react/atoms/';
import useMouseEnterAndLeave from '@modules/react/hooks/useMouseEnterAndLeave';
import { MenuOptionSub } from './types';

interface OptionsMenuSubButtonProps {
  option: MenuOptionSub;
  onClose: () => void;
}

export const OptionsMenuSubButton: React.FC<OptionsMenuSubButtonProps> = ({ option, onClose }) => {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useMouseEnterAndLeave(ref, {
    onMouseEnter: () => {
      setActive(true);
    },
    onMouseLeave: () => {
      setActive(false);
    },
  });

  return (
    <div className="options-menu-sub-button-container" ref={ref}>
      <button
        className={`button-options-menu-sub`}
        onMouseDown={(e) => e.preventDefault()}
        onClick={() => {}}
        title={option.tip}
        type="button"
      >
        <span className="text">{option.text}</span>
        <Icon svg={atomic_arrowRightIcon} />
      </button>
      {active && (
        <OptionsMenu>
          <OptionsMenuOptionsList options={option.sub} onClose={onClose} />
        </OptionsMenu>
      )}
    </div>
  );
};
