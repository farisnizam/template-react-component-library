// // @ts-check

// import React from 'react'
// import PulseLoadingAnimation from './PulseLoadingAnimation'

// /**
//  * @param {Object} options
//  * @param {string} options.text
//  * @param {boolean} options.loading
//  * @param {string=} options.className
//  * @param {() => void=} options.onClick
//  * @param {string=} options.title
//  * @param {string=} options.name
//  * @param {string=} options.form
//  * @param {"button" | "submit" | "reset"=} options.type
//  * @param {boolean=} options.disabled
//  * @returns {JSX.Element} a button that may have a loading state
//  */
// export default ({
//   text,
//   loading = false,
//   className = '',
//   onClick = null,
//   title = null,
//   name = null,
//   type = null,
//   form = null,
//   disabled = null
// }) => {
//   return (
//     <button
//       className={className}
//       type={type}
//       form={form}
//       title={title}
//       name={name}
//       disabled={disabled}
//       onClick={onClick}
//     >
//       {loading ? (
//         <PulseLoadingAnimation />
//       ) : (
//         <span className="text">{text}</span>
//       )}
//     </button>
//   )
// }


import React from 'react';
import PulseLoadingAnimation from './PulseLoadingAnimation';
import './style.less'

export interface ButtonWithLoadingProps {
  text: string;
  loading?: boolean;
  className?: string;
  onClick?: () => void;
  title?: string;
  name?: string;
  form?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const ButtonWithLoading: React.FC<ButtonWithLoadingProps> = ({
  text,
  loading = false,
  className = '',
  onClick = null,
  title = null,
  name = null,
  type = 'button',
  form = null,
  disabled = false,
}) => {
  return (
    <button
      className={className}
      type={type}
      form={form || undefined}
      title={title || undefined}
      name={name || undefined}
      disabled={disabled}
      onClick={onClick || undefined}
    >
      {loading ? (
        <PulseLoadingAnimation />
      ) : (
        <span className="text">{text}</span>
      )}
    </button>
  );
};

export default ButtonWithLoading;
