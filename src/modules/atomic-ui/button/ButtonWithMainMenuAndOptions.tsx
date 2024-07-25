// // @ts-check

// import React, { Fragment, forwardRef, useRef, useState } from 'react'
// import OptionsMenuAttached from '../menus/options-menu/OptionsMenuAttached'
// import { atomic_threeDotsMenuIcon } from '@modules/icons/'
// import { Icon } from '@modules/react/atoms/'
// import { Menu } from '../menus/menu/Menu'
// import { OptionsMenu } from '../menus/options-menu/OptionsMenu'
// import { OptionsMenuOptionsList } from '../menus/options-menu/OptionsMenuOptionsList'
// import { useClickOutside } from '../hooks/useClickOutside'
// import ButtonWithMenu from '../menus/menu/ButtonWithMenu'

// export default forwardRef(
//   /**
//    * @param {Object} props
//    * @param {string} props.text
//    * @param {string} props.icon
//    * @param {'platform-bar-wmmao-contrast' | 'platform-bar'} props.style
//    * @param {string=} props.title
//    * @param {boolean=} props.disabled
//    * @param {number=} props.optionsMenuMaxWidth
//    * @param {React.ReactNode} props.menu
//    * @param {() => void} props.onClick
//    * @param {import('../menus/options-menu/types').MenuOptions} props.options
//    * @param {string=} props.id
//    */
//   function ButtonWithMainMenuAndOptions(
//     {
//       text,
//       title,
//       icon,
//       style = 'platform-bar-wmmao-contrast',
//       disabled,
//       optionsMenuMaxWidth,
//       menu,
//       onClick,
//       options,
//       id = null
//     },
//     ref
//   ) {
//     const optionsButtonRef = useRef(null)
//     const menuRef = useRef(null)
//     const [opened, setOpened] = useState(false)
//     const open = () => {
//       setOpened(true)
//     }
//     const close = () => {
//       setOpened(false)
//     }
//     useClickOutside(opened ? [optionsButtonRef, menuRef] : [], close)

//     return (
//       <Fragment>
//         <div
//           ref={ref}
//           className={`button-${style} ${
//             options.length > 0 ? 'has-options' : ''
//           }`}
//           id={id}
//         >
//           <ButtonWithMenu
//             button={
//               <button
//                 className="main-button"
//                 onClick={onClick}
//                 title={title}
//                 disabled={disabled}
//               >
//                 <Icon svg={icon} />
//                 {text && <span className="text">{text}</span>}
//               </button>
//             }
//             menu={menu}
//           />
//           {options.length > 0 && (
//             <button
//               className="options"
//               ref={optionsButtonRef}
//               onClick={opened ? close : open}
//             >
//               <Icon svg={atomic_threeDotsMenuIcon} />
//             </button>
//           )}
//         </div>
//         {options.length > 0 && opened && (
//           <Menu targetRef={optionsButtonRef}>
//             <div ref={menuRef}>
//               <OptionsMenu menuMaxWidth={optionsMenuMaxWidth}>
//                 <OptionsMenuOptionsList options={options} onClose={close} />
//               </OptionsMenu>
//             </div>
//           </Menu>
//         )}
//       </Fragment>
//     )
//   }
// )


import React, { Fragment, forwardRef, useRef, useState } from 'react';
// import OptionsMenuAttached from '../menus/options-menu/OptionsMenuAttached';
import { atomic_threeDotsMenuIcon } from '@modules/icons/';
import { Icon } from '@modules/react/atoms/';
import { Menu } from '../menus/menu/Menu';
import { OptionsMenu } from '../menus/options-menu/OptionsMenu';
import { OptionsMenuOptionsList } from '../menus/options-menu/OptionsMenuOptionsList';
import { useClickOutside } from '../hooks/useClickOutside';
import ButtonWithMenu from '../menus/menu/ButtonWithMenu';
import { MenuOption } from '../menus/options-menu/types';

interface ButtonWithMainMenuAndOptionsProps {
  text: string;
  icon: string;
  style: 'platform-bar-wmmao-contrast' | 'platform-bar';
  title?: string;
  disabled?: boolean;
  optionsMenuMaxWidth?: number;
  menu: React.ReactNode;
  onClick: () => void;
  options: MenuOption[];
  id?: string;
}

const ButtonWithMainMenuAndOptions = forwardRef<HTMLDivElement, ButtonWithMainMenuAndOptionsProps>(
  (
    {
      text,
      title,
      icon,
      style = 'platform-bar-wmmao-contrast',
      disabled,
      optionsMenuMaxWidth,
      menu,
      onClick,
      options,
      id = null
    },
    ref
  ) => {
    const optionsButtonRef = useRef<HTMLButtonElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const [opened, setOpened] = useState(false);

    const open = () => {
      setOpened(true);
    };

    const close = () => {
      setOpened(false);
    };

    useClickOutside(opened ? [optionsButtonRef, menuRef] : [], close);

    return (
      <Fragment>
        <div
          ref={ref}
          className={`button-${style} ${options.length > 0 ? 'has-options' : ''}`}
          id={id || undefined}
        >
          <ButtonWithMenu
            button={
              <button
                className="main-button"
                onClick={onClick}
                title={title}
                disabled={disabled}
              >
                <Icon svg={icon} />
                {text && <span className="text">{text}</span>}
              </button>
            }
            menu={menu}
          />
          {options.length > 0 && (
            <button
              className="options"
              ref={optionsButtonRef}
              onClick={opened ? close : open}
            >
              <Icon svg={atomic_threeDotsMenuIcon} />
            </button>
          )}
        </div>
        {options.length > 0 && opened && (
          <Menu targetRef={optionsButtonRef}>
            <div ref={menuRef}>
              <OptionsMenu menuMaxWidth={optionsMenuMaxWidth}>
                <OptionsMenuOptionsList options={options} onClose={close} />
              </OptionsMenu>
            </div>
          </Menu>
        )}
      </Fragment>
    );
  }
);

export default ButtonWithMainMenuAndOptions;

