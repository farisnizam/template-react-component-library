// // @ts-check

// import React, { forwardRef } from 'react'

// export default forwardRef(
//   /**
//    * Creates a React button with options to
//    *
//    * @param {object} options
//    * @param {string=} options.id
//    * @param {boolean} options.isToggled
//    * @param {(v: boolean) => void} options.onToggle - callback function for click to toggle event
//    * @param {string=} options.text - text string
//    * @param {string=} options.title - title string
//    * @param {boolean=} options.disabled
//    * @param {(
//    * | 'bar'
//    * | 'popup'
//    * | 'bar-inline'
//    * )} options.style - only navigation for now defined
//    * @param {(
//    * | 'orange'
//    * | 'green'
//    * )=} options.color
//    *
//    * @example
//    * ToggleSwitch({
//    *   isToggled: <value>
//    *   onToggle: (v) => {...changeState}
//    *   text: 'Reveal All',
//    *   title: 'Show all hidden components'
//    * })
//    * @returns {JSX.Element}
//    */
//   function ToggleSwitch(
//     {
//       id = null,
//       isToggled,
//       onToggle,
//       text = '',
//       title,
//       style,
//       color = 'orange',
//       disabled
//     },
//     ref
//   ) {
//     return (
//       <div
//         className={`toggle-switch toggle-switch-style-${style} toggle-switch-color-${color} ${
//           disabled ? 'disabled' : ''
//         }`}
//         title={title}
//         ref={ref}
//       >
//         <label className="switch">
//           <input
//             id={id}
//             type="checkbox"
//             checked={isToggled}
//             disabled={disabled}
//             onChange={e => {
//               onToggle(e.currentTarget.checked)
//             }}
//           />
//           <span className="slider"></span>
//           <span className="text">{text}</span>
//         </label>
//       </div>
//     )
//   }
// )

import { forwardRef } from 'react';

interface ToggleSwitchProps {
  id?: string;
  isToggled: boolean;
  onToggle: (v: boolean) => void;
  text?: string;
  title?: string;
  disabled?: boolean;
  style: 'bar' | 'popup' | 'bar-inline';
  color?: 'orange' | 'green';
}

const ToggleSwitch = forwardRef<HTMLDivElement, ToggleSwitchProps>(
  (
    {
      id,
      isToggled,
      onToggle,
      text = '',
      title,
      style,
      color = 'orange',
      disabled,
    },
    ref
  ) => {
    return (
      <div
        className={`toggle-switch toggle-switch-style-${style} toggle-switch-color-${color} ${
          disabled ? 'disabled' : ''
        }`}
        title={title}
        ref={ref}
      >
        <label className="switch">
          <input
            id={id}
            type="checkbox"
            checked={isToggled}
            disabled={disabled}
            onChange={(e) => {
              onToggle(e.currentTarget.checked);
            }}
          />
          <span className="slider"></span>
          <span className="text">{text}</span>
        </label>
      </div>
    );
  }
);

export default ToggleSwitch;

