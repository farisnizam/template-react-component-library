// // @ts-check

// import React, { useEffect, useRef, useState } from 'react'

// /**
//  * @param {Object} options
//  * @param {string=} options.className
//  * @param {string} options.title
//  * @param {string} options.idleText
//  * @param {string} options.loadingText
//  * @param {string} options.successText
//  * @param {() => Promise<any>} options.onClickAsync
//  * @param {boolean=} options.disabled
//  * @returns {JSX.Element} a button that may have a loading state
//  */
// export default function StatesLoadingButton({
//   className = 'states-loading-button-default',
//   title,
//   idleText,
//   loadingText,
//   successText,
//   onClickAsync,
//   disabled
// }) {
//   const [state, setState] = useState('idle')

//   useEffect(() => {
//     if (state === 'success') {
//       const timer = setTimeout(() => {
//         setState('idle')
//       }, 2000)
//       return () => {
//         clearTimeout(timer)
//       }
//     }
//   }, [state])

//   return (
//     <button
//       className={`states-loading-button ${state} ${className}`}
//       title={title}
//       onClick={e => {
//         e.currentTarget.blur()
//         if (state !== 'idle') return
//         setState('loading')
//         onClickAsync().then(
//           () => {
//             setState('success')
//           },
//           () => {
//             setState('idle')
//           }
//         )
//       }}
//       disabled={disabled}
//     >
//       <span className={`text ${state === 'idle' ? 'active' : ''}`}>
//         {idleText}
//       </span>
//       <span className={`text ${state === 'loading' ? 'active' : ''}`}>
//         {loadingText}
//       </span>
//       <span className={`text ${state === 'success' ? 'active' : ''}`}>
//         {successText}
//       </span>
//     </button>
//   )
// }


import React, { useEffect, useState } from 'react';

export interface StatesLoadingButtonProps {
  className?: string;
  title: string;
  idleText: string;
  loadingText: string;
  successText: string;
  onClickAsync: () => Promise<any>;
  disabled?: boolean;
}

const StatesLoadingButton: React.FC<StatesLoadingButtonProps> = ({
  className = 'states-loading-button-default',
  title,
  idleText,
  loadingText,
  successText,
  onClickAsync,
  disabled = false,
}) => {
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');

  useEffect(() => {
    if (state === 'success') {
      const timer = setTimeout(() => {
        setState('idle');
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [state]);

  return (
    <button
      className={`states-loading-button ${state} ${className}`}
      title={title}
      onClick={(e) => {
        e.currentTarget.blur();
        if (state !== 'idle') return;
        setState('loading');
        onClickAsync().then(
          () => {
            setState('success');
          },
          () => {
            setState('idle');
          }
        );
      }}
      disabled={disabled}
    >
      <span className={`text ${state === 'idle' ? 'active' : ''}`}>
        {idleText}
      </span>
      <span className={`text ${state === 'loading' ? 'active' : ''}`}>
        {loadingText}
      </span>
      <span className={`text ${state === 'success' ? 'active' : ''}`}>
        {successText}
      </span>
    </button>
  );
};

export default StatesLoadingButton;
