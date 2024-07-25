// // @ts-check

// import useMouseEnterAndLeave from '@modules/react/hooks/useMouseEnterAndLeave'
// import { debounce } from '@modules/utils/debounce'
// import React, { useEffect, useRef, useState } from 'react'

// /**
//  * @param {Object} options
//  * @param {React.ReactNode} options.button
//  * @param {React.ReactNode} options.dropdown
//  */
// export default function ButtonWithDropdown({ button, dropdown }) {
//   const [showDropdown, setShowDropdown] = useState(false)
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth)
//   const ref = useRef(null)

//   useEffect(() => {
//     const onResize = debounce(
//       () => {
//         setWindowWidth(window.innerWidth)
//       },
//       200,
//       { leading: false, trailing: true }
//     )
//     window.addEventListener('resize', onResize)
//     return () => {
//       window.addEventListener('resize', onResize)
//     }
//   }, [])

//   useMouseEnterAndLeave(ref, {
//     onMouseEnter: () => {
//       setShowDropdown(true)
//     },
//     onMouseLeave: () => {
//       setShowDropdown(false)
//     }
//   })

//   return (
//     <div style={{ position: 'relative', height: '100%' }}>
//       {button}
//       {showDropdown && (
//         <div
//           style={{
//             position: 'absolute',
//             top: 50,
//             ...(windowWidth > 1200 ? { left: 0 } : { right: 0 })
//           }}
//         >
//           {dropdown}
//         </div>
//       )}
//     </div>
//   )
// }


import useMouseEnterAndLeave from '@modules/react/hooks/useMouseEnterAndLeave';
import { debounce } from '@modules/utils/debounce';
import React, { useEffect, useRef, useState } from 'react';

interface ButtonWithDropdownProps {
  button: React.ReactNode;
  dropdown: React.ReactNode;
}

const ButtonWithDropdown: React.FC<ButtonWithDropdownProps> = ({ button, dropdown }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onResize = debounce(
      () => {
        setWindowWidth(window.innerWidth);
      },
      200,
      { leading: false, trailing: true }
    );
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useMouseEnterAndLeave(ref, {
    onMouseEnter: () => {
      setShowDropdown(true);
    },
    onMouseLeave: () => {
      setShowDropdown(false);
    }
  });

  return (
    <div ref={ref} style={{ position: 'relative', height: '100%' }}>
      {button}
      {showDropdown && (
        <div
          style={{
            position: 'absolute',
            top: 50,
            ...(windowWidth > 1200 ? { left: 0 } : { right: 0 })
          }}
        >
          {dropdown}
        </div>
      )}
    </div>
  );
};

export default ButtonWithDropdown;

