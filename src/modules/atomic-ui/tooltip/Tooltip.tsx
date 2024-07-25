// // @ts-check

// import useMouseEnterAndLeave from '@modules/react/hooks/useMouseEnterAndLeave'
// import React, {
//   Fragment,
//   cloneElement,
//   useEffect,
//   useImperativeHandle,
//   useLayoutEffect,
//   useRef,
//   useState
// } from 'react'
// import { createPortal } from 'react-dom'

// export default React.forwardRef(
//   /**
//    * @param {Object} props
//    * @param {React.ReactElement} props.children
//    * @param {string} props.text
//    * @returns
//    */
//   ({ children, text }, forwardedRef) => {
//     const targetRef = useRef(null)
//     const labelRef = useRef(null)
//     const labelPositionRef = useRef({
//       top: 0,
//       left: 0,
//       arrowTop: 0,
//       arrowLeft: 0,
//       arrowDirection: 'top'
//     })
//     const [labelPosition, setLabelPosition] = useState(labelPositionRef.current)
//     const [isVisible, setIsVisible] = useState(false)

//     useImperativeHandle(forwardedRef, () => targetRef.current)

//     const updatePosition = () => {
//       if (!isVisible || !targetRef.current || !labelRef.current) return
//       const newPosition = calculatePosition(targetRef, labelRef)
//       // Only update state if position has changed
//       if (
//         JSON.stringify(newPosition) != JSON.stringify(labelPositionRef.current)
//       ) {
//         labelPositionRef.current = newPosition
//         setLabelPosition(newPosition)
//       }
//     }

//     useLayoutEffect(() => {
//       if (!targetRef.current) return
//       updatePosition()
//     }, [text, isVisible, targetRef.current])

//     useMouseEnterAndLeave(
//       targetRef,
//       {
//         onMouseEnter: () => {
//           updatePosition()
//           setIsVisible(true)
//         },
//         onMouseLeave: () => {
//           setIsVisible(false)
//         }
//       },
//       { enterDelay: 500, leaveDelay: 0 }
//     )

//     useEffect(() => {
//       const handleDocumentClick = () => {
//         setIsVisible(false) // Hide tooltip on any click
//       }
//       document.addEventListener('click', handleDocumentClick)
//       return () => {
//         document.removeEventListener('click', handleDocumentClick)
//       }
//     }, [])

//     return (
//       <Fragment>
//         {cloneElement(children, { ref: targetRef })}
//         {isVisible &&
//           createPortal(
//             <div className="dot-style">
//               <div
//                 className="tooltip"
//                 ref={labelRef}
//                 style={{
//                   top: `${labelPosition.top}px`,
//                   left: `${labelPosition.left}px`
//                 }}
//               >
//                 {text}
//               </div>
//               <div
//                 className={`tooltip-arrow tooltip-arrow-${labelPosition.arrowDirection}`}
//                 style={{
//                   top: `${labelPosition.arrowTop}px`,
//                   left: `${labelPosition.arrowLeft}px`
//                 }}
//               ></div>
//             </div>,
//             document.body
//           )}
//       </Fragment>
//     )
//   }
// )

// /**
//  * @typedef {'top'|'bottom'|'left'|'right'} Direction
//  */

// /**
//  *
//  * @param {React.MutableRefObject} targetRef
//  * @param {React.MutableRefObject} labelRef
//  * @returns {{
//  *   top: number,
//  *   left: number,
//  *   arrowTop: number,
//  *   arrowLeft: number,
//  *   arrowDirection: Direction
//  * }}
//  */
// const calculatePosition = (targetRef, labelRef) => {
//   const targetRect = targetRef.current.getBoundingClientRect()
//   const labelRect = labelRef.current.getBoundingClientRect()

//   const viewportWidth = window.innerWidth
//   const viewportHeight = window.innerHeight

//   // Default beneath to showing the arrow at the top
//   let top = targetRect.bottom + 3
//   let left = targetRect.left + targetRect.width / 2 - labelRect.width / 2
//   let arrowTop = top
//   let arrowLeft = targetRect.left + targetRect.width / 2

//   /** @type {Direction} */
//   let arrowDirection = 'top'

//   // Check for vertical overflow
//   if (top + labelRect.height > viewportHeight) {
//     // then arrow at bottom
//     arrowTop = labelRect.top + labelRect.height
//     arrowDirection = 'bottom'
//     top = targetRect.top - labelRect.height
//   }

//   // Check for horizontal overflow
//   if (left < 100) {
//     left = targetRect.left + targetRect.width + 10
//     arrowLeft = left
//     top = targetRect.top + targetRect.height / 2 - labelRect.height / 2
//     arrowTop = targetRect.top + targetRect.height / 2

//     arrowDirection = 'left'
//   } else if (left + labelRect.width > viewportWidth - 100) {
//     left = viewportWidth - labelRect.width - 5
//   }

//   return { top, left, arrowTop, arrowLeft, arrowDirection }
// }

import useMouseEnterAndLeave from '@modules/react/hooks/useMouseEnterAndLeave';
import React, {
  Fragment,
  cloneElement,
  useEffect,
  useImperativeHandle,
  useLayoutEffect,
  useRef,
  useState,
  ReactElement,
  ForwardedRef,
} from 'react';
import { createPortal } from 'react-dom';

interface TooltipProps {
  children: ReactElement;
  text: string;
}

type Direction = 'top' | 'bottom' | 'left' | 'right';

interface Position {
  top: number;
  left: number;
  arrowTop: number;
  arrowLeft: number;
  arrowDirection: Direction;
}

const calculatePosition = (
  targetRef: React.MutableRefObject<HTMLElement | null>,
  labelRef: React.MutableRefObject<HTMLDivElement | null>
): Position => {
  if (!targetRef.current || !labelRef.current) {
    return {
      top: 0,
      left: 0,
      arrowTop: 0,
      arrowLeft: 0,
      arrowDirection: 'top',
    };
  }

  const targetRect = targetRef.current.getBoundingClientRect();
  const labelRect = labelRef.current.getBoundingClientRect();

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Default beneath to showing the arrow at the top
  let top = targetRect.bottom + 3;
  let left = targetRect.left + targetRect.width / 2 - labelRect.width / 2;
  let arrowTop = top;
  let arrowLeft = targetRect.left + targetRect.width / 2;

  let arrowDirection: Direction = 'top';

  // Check for vertical overflow
  if (top + labelRect.height > viewportHeight) {
    // then arrow at bottom
    arrowTop = labelRect.top + labelRect.height;
    arrowDirection = 'bottom';
    top = targetRect.top - labelRect.height;
  }

  // Check for horizontal overflow
  if (left < 100) {
    left = targetRect.left + targetRect.width + 10;
    arrowLeft = left;
    top = targetRect.top + targetRect.height / 2 - labelRect.height / 2;
    arrowTop = targetRect.top + targetRect.height / 2;
    arrowDirection = 'left';
  } else if (left + labelRect.width > viewportWidth - 100) {
    left = viewportWidth - labelRect.width - 5;
  }

  return { top, left, arrowTop, arrowLeft, arrowDirection };
};

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, text }, forwardedRef) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const labelRef = useRef<HTMLDivElement | null>(null);
    const labelPositionRef = useRef<Position>({
      top: 0,
      left: 0,
      arrowTop: 0,
      arrowLeft: 0,
      arrowDirection: 'top',
    });
    const [labelPosition, setLabelPosition] = useState<Position>(labelPositionRef.current);
    const [isVisible, setIsVisible] = useState(false);

    useImperativeHandle(forwardedRef, () => targetRef.current as HTMLDivElement);

    const updatePosition = () => {
      if (!isVisible || !targetRef.current || !labelRef.current) return;
      const newPosition = calculatePosition(targetRef, labelRef);
      // Only update state if position has changed
      if (JSON.stringify(newPosition) != JSON.stringify(labelPositionRef.current)) {
        labelPositionRef.current = newPosition;
        setLabelPosition(newPosition);
      }
    };

    useLayoutEffect(() => {
      if (!targetRef.current) return;
      updatePosition();
    }, [text, isVisible, targetRef.current]);

    useMouseEnterAndLeave(
      targetRef,
      {
        onMouseEnter: () => {
          updatePosition();
          setIsVisible(true);
        },
        onMouseLeave: () => {
          setIsVisible(false);
        },
      },
      { enterDelay: 500, leaveDelay: 0 }
    );

    useEffect(() => {
      const handleDocumentClick = () => {
        setIsVisible(false); // Hide tooltip on any click
      };
      document.addEventListener('click', handleDocumentClick);
      return () => {
        document.removeEventListener('click', handleDocumentClick);
      };
    }, []);

    return (
      <Fragment>
        {cloneElement(children, { ref: targetRef })}
        {isVisible &&
          createPortal(
            <div className="dot-style">
              <div
                className="tooltip"
                ref={labelRef}
                style={{
                  top: `${labelPosition.top}px`,
                  left: `${labelPosition.left}px`,
                }}
              >
                {text}
              </div>
              <div
                className={`tooltip-arrow tooltip-arrow-${labelPosition.arrowDirection}`}
                style={{
                  top: `${labelPosition.arrowTop}px`,
                  left: `${labelPosition.arrowLeft}px`,
                }}
              ></div>
            </div>,
            document.body
          )}
      </Fragment>
    );
  }
);

export default Tooltip;
