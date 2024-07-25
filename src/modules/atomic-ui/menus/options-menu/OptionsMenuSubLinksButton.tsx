// // @ts-check
// import React, { useEffect, useRef, useState } from 'react'
// import { OptionsMenuSubLinks } from './OptionsMenuSubLinks'
// import { OptionsMenu } from './OptionsMenu'
// import { atomic_arrowRightIcon } from '@modules/icons/'
// import { Icon } from '@modules/react/atoms/'
// import useMouseEnterAndLeave from '@modules/react/hooks/useMouseEnterAndLeave'

// /**
//  * @param {Object} options
//  * @param {import('./types').MenuOption_SubLinks} options.option
//  * @param {() => void} options.onClose
//  * @returns {JSX.Element}
//  */
// export const OptionsMenuSubLinksButton = ({ option, onClose }) => {
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
//     <div ref={ref} className="options-menu-sub-button-container">
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
//           <OptionsMenuSubLinks options={option.sub} onClose={onClose} />
//         </OptionsMenu>
//       )}
//     </div>
//   )
// }


import React, { useRef, useState } from 'react';
import { OptionsMenuSubLinks } from './OptionsMenuSubLinks';
import { OptionsMenu } from './OptionsMenu';
import { atomic_arrowRightIcon } from '@modules/icons/';
import { Icon } from '@modules/react/atoms/';
import useMouseEnterAndLeave from '@modules/react/hooks/useMouseEnterAndLeave';
import { MenuOptionSubLinks } from './types';

interface OptionsMenuSubLinksButtonProps {
  option: MenuOptionSubLinks;
  onClose: () => void;
}

export const OptionsMenuSubLinksButton: React.FC<OptionsMenuSubLinksButtonProps> = ({ option, onClose }) => {
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
    <div ref={ref} className="options-menu-sub-button-container">
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
          <OptionsMenuSubLinks options={option.sub} onClose={onClose} />
        </OptionsMenu>
      )}
    </div>
  );
};
