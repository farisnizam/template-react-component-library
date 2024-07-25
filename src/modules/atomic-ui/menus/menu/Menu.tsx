// // @ts-check
// import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
// import { createPortal } from 'react-dom'
// import { getBoundingClientRect } from '@modules/utils/dom/'
// import { debounce } from '@modules/utils/debounce'

// /**
//  *
//  * @param {React.MutableRefObject} elementRef
//  * @returns {{x:number,y:number,height:number,width:number}}
//  */
// const getRect = elementRef => {
//   if (elementRef.current) {
//     const { x, y, height, width } = getBoundingClientRect(elementRef.current)
//     return { x, y, height, width }
//   } else return { x: 0, y: 0, height: 0, width: 0 }
// }

// /**
//  * Creates a Portal as a root for the options menu.
//  * Nested menus will load inline with the code, and
//  * are not portalled
//  *
//  * @param {Object} options
//  * @param {React.MutableRefObject} options.targetRef
//  * @param {number=} options.yOffset
//  * @param {React.ReactNode} options.children
//  * @returns {JSX.Element}
//  */
// export const Menu = ({ targetRef, yOffset = 0, children }) => {
//   const ref = useRef(null)
//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight
//   })
//   const [rectSize, setRectSize] = useState({ height: 0, width: 0 })
//   const [targetRect, setTargetRect] = useState({
//     x: 0,
//     y: 0,
//     height: 0,
//     width: 0,
//     originX: 0 + window.scrollX,
//     originY: 0 + window.scrollY
//   })
//   const [position, setPosition] = useState({})

//   // we can eventually allow these through as arguments
//   const xMod = 0
//   const yMod = 0

//   useEffect(() => {
//     const onResize = debounce(
//       () => {
//         setWindowSize({
//           width: window.innerWidth,
//           height: window.innerHeight
//         })
//       },
//       200,
//       { leading: false, trailing: true }
//     )
//     window.addEventListener('resize', onResize)
//     return () => {
//       window.removeEventListener('resize', onResize)
//     }
//   }, [])

//   useLayoutEffect(() => {
//     const rafId = window.requestAnimationFrame(() => {
//       const rect = getRect(ref)
//       setRectSize({ height: rect.height, width: rect.width })
//     })
//     return () => {
//       window.cancelAnimationFrame(rafId)
//     }
//   }, [])

//   useLayoutEffect(() => {
//     const rafId = window.requestAnimationFrame(() => {
//       const targetRect = getRect(targetRef)
//       setTargetRect({
//         x: targetRect.x,
//         y: targetRect.y,
//         height: targetRect.height,
//         width: targetRect.width,
//         originX: targetRect.x + window.scrollX,
//         originY: targetRect.y + targetRect.height + window.scrollY
//       })
//     })
//     return () => {
//       window.cancelAnimationFrame(rafId)
//     }
//   }, [targetRef.current, windowSize])

//   // Determine position based on rect size, targetRef and window size
//   useLayoutEffect(() => {
//     let _position = {}
//     // X position
//     if (targetRect.originX + xMod + rectSize.width > windowSize.width - 20) {
//       _position.left =
//         targetRect.originX - xMod - rectSize.width + targetRect.width
//     } else {
//       _position.left = targetRect.originX + xMod
//     }
//     // Y position
//     if (targetRect.originY - yMod + rectSize.height > windowSize.height - 40) {
//       _position.top = targetRect.originY + yMod - rectSize.height
//     } else {
//       _position.top = targetRect.originY - yMod
//     }
//     setPosition(_position)
//   }, [rectSize, targetRect, windowSize])

//   return createPortal(
//     <div
//       ref={ref}
//       className="dot-style atomic-ui-menu"
//       style={{
//         position: 'absolute',
//         zIndex: 1,
//         marginTop: -1 * yOffset,
//         paddingTop: 2 * yOffset,
//         ...position
//       }}
//     >
//       {children}
//     </div>,
//     document.body
//   )
// }


import React, { useEffect, useLayoutEffect, useRef, useState, MutableRefObject, ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { getBoundingClientRect } from '@modules/utils/dom/';
import { debounce } from '@modules/utils/debounce';

interface Rect {
  x: number;
  y: number;
  height: number;
  width: number;
}

const getRect = (elementRef: MutableRefObject<HTMLElement | null>): Rect => {
  if (elementRef.current) {
    const { x, y, height, width } = getBoundingClientRect(elementRef.current);
    return { x, y, height, width };
  } else {
    return { x: 0, y: 0, height: 0, width: 0 };
  }
};

interface MenuProps {
  targetRef: MutableRefObject<HTMLElement | null>;
  yOffset?: number;
  children: ReactNode;
}

export const Menu: React.FC<MenuProps> = ({ targetRef, yOffset = 0, children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const [rectSize, setRectSize] = useState({ height: 0, width: 0 });
  const [targetRect, setTargetRect] = useState({
    x: 0,
    y: 0,
    height: 0,
    width: 0,
    originX: 0 + window.scrollX,
    originY: 0 + window.scrollY,
  });
  const [position, setPosition] = useState<React.CSSProperties>({});

  // we can eventually allow these through as arguments
  const xMod = 0;
  const yMod = 0;

  useEffect(() => {
    const onResize = debounce(
      () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      },
      200,
      { leading: false, trailing: true }
    );
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  useLayoutEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      const rect = getRect(ref);
      setRectSize({ height: rect.height, width: rect.width });
    });
    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  useLayoutEffect(() => {
    const rafId = window.requestAnimationFrame(() => {
      const targetRect = getRect(targetRef);
      setTargetRect({
        x: targetRect.x,
        y: targetRect.y,
        height: targetRect.height,
        width: targetRect.width,
        originX: targetRect.x + window.scrollX,
        originY: targetRect.y + targetRect.height + window.scrollY,
      });
    });
    return () => {
      window.cancelAnimationFrame(rafId);
    };
  }, [targetRef.current, windowSize]);

  // Determine position based on rect size, targetRef and window size
  useLayoutEffect(() => {
    let _position: React.CSSProperties = {};
    // X position
    if (targetRect.originX + xMod + rectSize.width > windowSize.width - 20) {
      _position.left = targetRect.originX - xMod - rectSize.width + targetRect.width;
    } else {
      _position.left = targetRect.originX + xMod;
    }
    // Y position
    if (targetRect.originY - yMod + rectSize.height > windowSize.height - 40) {
      _position.top = targetRect.originY + yMod - rectSize.height;
    } else {
      _position.top = targetRect.originY - yMod;
    }
    setPosition(_position);
  }, [rectSize, targetRect, windowSize]);

  return createPortal(
    <div
      ref={ref}
      className="dot-style atomic-ui-menu"
      style={{
        position: 'absolute',
        zIndex: 1,
        marginTop: -1 * yOffset,
        paddingTop: 2 * yOffset,
        ...position,
      }}
    >
      {children}
    </div>,
    document.body
  );
};
