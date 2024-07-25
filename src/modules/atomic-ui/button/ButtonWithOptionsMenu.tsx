// // @ts-check

// import { Fragment, forwardRef, useRef, useState } from 'react'
// import { atomic_threeDotsMenuIcon } from '@modules/icons/'
// import { Icon } from '@modules/react/atoms/'
// import { Menu } from '../menus/menu/Menu'
// import { OptionsMenu } from '../menus/options-menu/OptionsMenu'
// import { OptionsMenuOptionsList } from '../menus/options-menu/OptionsMenuOptionsList'
// import { useClickOutside } from '../hooks/useClickOutside'
// import Tooltip from '../tooltip/Tooltip'
// import { conditionalWrapper } from '@modules/react/utils'

// export default forwardRef(
//   /**
//    * @param {Object} props
//    * @param {string} props.text
//    * @param {string} props.icon
//    * @param {string=} props.title
//    * @param {string=} props.tooltip
//    * @param {(
//    * | 'primary-with-options'
//    * | 'platform-bar-with-options'
//    * | 'platform-bar-contrast'
//    * )} props.style
//    * @param {boolean=} props.disabled
//    * @param {() => void} props.onClick
//    * @param {import('../menus/options-menu/types').MenuOptions} props.options
//    * @param {string=} props.id
//    */
//   function ButtonWithOptions(
//     {
//       text,
//       title = null,
//       tooltip = null,
//       icon,
//       style,
//       disabled,
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

//     const mainButton = conditionalWrapper({
//       children: (
//         <button
//           className="main-button"
//           onClick={onClick}
//           title={title}
//           disabled={disabled}
//         >
//           <Icon svg={icon} />
//           {text && <span className="text">{text}</span>}
//         </button>
//       ),
//       condition: !!tooltip,
//       wrapper: children => <Tooltip text={tooltip}>{children}</Tooltip>
//     })

//     const optionsButton = options.length > 0 && (
//       <button
//         className="options"
//         ref={optionsButtonRef}
//         onClick={opened ? close : open}
//       >
//         <Icon svg={atomic_threeDotsMenuIcon} />
//       </button>
//     )

//     return (
//       <Fragment>
//         <div
//           className={`button-${style} ${
//             options.length > 0 ? 'has-options' : ''
//           }`}
//           id={id}
//           ref={ref}
//         >
//           {mainButton}
//           {optionsButton}
//         </div>
//         {opened && options.length > 0 && (
//           <Menu targetRef={optionsButtonRef}>
//             <div ref={menuRef}>
//               <OptionsMenu>
//                 <OptionsMenuOptionsList options={options} onClose={close} />
//               </OptionsMenu>
//             </div>
//           </Menu>
//         )}
//       </Fragment>
//     )
//   }
// )


import { Fragment, forwardRef, useRef, useState, ReactElement } from 'react';
import { atomic_threeDotsMenuIcon } from '@modules/icons/';
import { Icon } from '@modules/react/atoms/';
import { Menu } from '../menus/menu/Menu';
import { OptionsMenu } from '../menus/options-menu/OptionsMenu';
import { OptionsMenuOptionsList } from '../menus/options-menu/OptionsMenuOptionsList';
import { useClickOutside } from '../hooks/useClickOutside';
import Tooltip from '../tooltip/Tooltip';
import { conditionalWrapper } from '@modules/react/utils/utils';
import { MenuOptions } from '../menus/options-menu/types';

interface ButtonWithOptionsProps {
  text: string;
  icon: string;
  title?: string;
  tooltip?: string;
  style: 'primary-with-options' | 'platform-bar-with-options' | 'platform-bar-contrast';
  disabled?: boolean;
  onClick: () => void;
  options: MenuOptions;
  id?: string;
}

const ButtonWithOptions = forwardRef<HTMLDivElement, ButtonWithOptionsProps>(
  (
    {
      text,
      title = '',
      tooltip = '',
      icon,
      style,
      disabled,
      onClick,
      options,
      id = '',
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

    const mainButton = conditionalWrapper({
      children: (
        <button
          className="main-button"
          onClick={onClick}
          title={title || undefined}
          disabled={disabled}
        >
          <Icon svg={icon} />
          {text && <span className="text">{text}</span>}
        </button>
      ),
      condition: !!tooltip,
      wrapper: (children: ReactElement) => (
        <Tooltip text={tooltip}>{children}</Tooltip>
      ),
    });

    const optionsButton = options.length > 0 && (
      <button
        className="options"
        ref={optionsButtonRef}
        onClick={opened ? close : open}
      >
        <Icon svg={atomic_threeDotsMenuIcon} />
      </button>
    );

    return (
      <Fragment>
        <div
          className={`button-${style} ${options.length > 0 ? 'has-options' : ''}`}
          id={id || undefined}
          ref={ref}
        >
          {mainButton}
          {optionsButton}
        </div>
        {opened && options.length > 0 && (
          <Menu targetRef={optionsButtonRef}>
            <div ref={menuRef}>
              <OptionsMenu>
                <OptionsMenuOptionsList options={options} onClose={close} />
              </OptionsMenu>
            </div>
          </Menu>
        )}
      </Fragment>
    );
  }
);

export default ButtonWithOptions;

