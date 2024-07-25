// // @ts-check

// import React, { Fragment, useEffect, useRef, useState } from 'react'
// import { Menu } from './Menu'

// /**
//  * @param {Object} props
//  * @param {React.ReactElement} props.button
//  * @param {React.ReactNode} props.menu
//  * @param {number=} props.yOffset
//  * @param {number=} props.delay
//  */
// export default function ButtonWithMenu({
//   button,
//   menu,
//   yOffset = 0,
//   delay = 0
// }) {
//   const [opened, setOpened] = useState(false)

//   const closeTimeoutRef = useRef(null)

//   const open = () => {
//     // Clear any pending timeouts to prevent closing if user re-enters
//     if (closeTimeoutRef.current) {
//       clearTimeout(closeTimeoutRef.current)
//       closeTimeoutRef.current = null
//     }
//     setOpened(true)
//   }

//   const close = () => {
//     // Close with a delay
//     if (closeTimeoutRef.current) {
//       clearTimeout(closeTimeoutRef.current)
//     }
//     closeTimeoutRef.current = setTimeout(() => {
//       setOpened(false)
//     }, delay)
//   }

//   const ref = useRef(null)

//   useEffect(() => {
//     return () => {
//       if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current)
//     }
//   }, [])

//   return React.cloneElement(button, {
//     ref,
//     onMouseEnter: open,
//     onMouseLeave: close,
//     className: `${button.props.className} ${opened ? 'active' : ''}`,
//     children: (
//       <Fragment>
//         {button.props.children}
//         {opened && (
//           <Menu targetRef={ref} yOffset={yOffset}>
//             {menu}
//           </Menu>
//         )}
//       </Fragment>
//     )
//   })
// }


import React, { Fragment, useEffect, useRef, useState, ReactElement, ReactNode } from 'react';
import { Menu } from './Menu';

interface ButtonWithMenuProps {
  button: ReactElement;
  menu: ReactNode;
  yOffset?: number;
  delay?: number;
}

export default function ButtonWithMenu({
  button,
  menu,
  yOffset = 0,
  delay = 0
}: ButtonWithMenuProps) {
  const [opened, setOpened] = useState(false);

  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const open = () => {
    // Clear any pending timeouts to prevent closing if user re-enters
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpened(true);
  };

  const close = () => {
    // Close with a delay
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    closeTimeoutRef.current = setTimeout(() => {
      setOpened(false);
    }, delay);
  };

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  return React.cloneElement(button, {
    ref,
    onMouseEnter: open,
    onMouseLeave: close,
    className: `${button.props.className} ${opened ? 'active' : ''}`,
    children: (
      <Fragment>
        {button.props.children}
        {opened && (
          <Menu targetRef={ref} yOffset={yOffset}>
            {menu}
          </Menu>
        )}
      </Fragment>
    )
  });
}
