// // @ts-check

// import { useEffect } from 'react'

// /**
//  * A custom hook for handling mouse enter and leave events.
//  *
//  * @param {React.RefObject} ref - The ref object tied to the DOM element you want to attach listeners to.
//  * @param {Object} events - Function to execute when mouse enters the element.
//  * @param {() => void} events.onMouseEnter - Function to execute when mouse enters the element.
//  * @param {() => void} events.onMouseLeave - Function to execute when mouse leaves the element.
//  * @param {Object} options - configuration
//  * @param {number=} options.enterDelay - in ms
//  * @param {number=} options.leaveDelay - in ms
//  */
// export default function useMouseEnterAndLeave(
//   ref,
//   { onMouseEnter, onMouseLeave },
//   { enterDelay = 0, leaveDelay = 200 } = {}
// ) {
//   useEffect(() => {
//     if (!ref.current) return

//     let enterDelayTimeoutId
//     let leaveDelayTimeoutId

//     const handleMouseEnter = () => {
//       if (leaveDelayTimeoutId) {
//         clearTimeout(leaveDelayTimeoutId)
//         leaveDelayTimeoutId = null
//       }
//       enterDelayTimeoutId = setTimeout(() => {
//         onMouseEnter()
//       }, enterDelay)
//     }

//     const handleMouseLeave = () => {
//       if (enterDelayTimeoutId) {
//         clearTimeout(enterDelayTimeoutId)
//         enterDelayTimeoutId = null
//       }
//       leaveDelayTimeoutId = setTimeout(() => {
//         onMouseLeave()
//       }, leaveDelay)
//     }

//     ref.current.addEventListener('mouseenter', handleMouseEnter)
//     ref.current.addEventListener('mouseleave', handleMouseLeave)

//     return () => {
//       if (enterDelayTimeoutId) clearTimeout(enterDelayTimeoutId)
//       if (leaveDelayTimeoutId) clearTimeout(leaveDelayTimeoutId)
//       ref.current.removeEventListener('mouseenter', handleMouseEnter)
//       ref.current.removeEventListener('mouseleave', handleMouseLeave)
//     }
//   }, [ref.current, onMouseEnter, onMouseLeave, leaveDelay, enterDelay])
// }

import { useEffect, RefObject } from 'react';

interface Events {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

interface Options {
  enterDelay?: number;
  leaveDelay?: number;
}

export default function useMouseEnterAndLeave(
  ref: RefObject<HTMLElement>,
  { onMouseEnter, onMouseLeave }: Events,
  { enterDelay = 0, leaveDelay = 200 }: Options = {}
) {
  useEffect(() => {
    if (!ref.current) return;

    let enterDelayTimeoutId: NodeJS.Timeout | null = null;
    let leaveDelayTimeoutId: NodeJS.Timeout | null = null;

    const handleMouseEnter = () => {
      if (leaveDelayTimeoutId) {
        clearTimeout(leaveDelayTimeoutId);
        leaveDelayTimeoutId = null;
      }
      enterDelayTimeoutId = setTimeout(() => {
        onMouseEnter();
      }, enterDelay);
    };

    const handleMouseLeave = () => {
      if (enterDelayTimeoutId) {
        clearTimeout(enterDelayTimeoutId);
        enterDelayTimeoutId = null;
      }
      leaveDelayTimeoutId = setTimeout(() => {
        onMouseLeave();
      }, leaveDelay);
    };

    const currentElement = ref.current;

    currentElement.addEventListener('mouseenter', handleMouseEnter);
    currentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      if (enterDelayTimeoutId) clearTimeout(enterDelayTimeoutId);
      if (leaveDelayTimeoutId) clearTimeout(leaveDelayTimeoutId);
      currentElement.removeEventListener('mouseenter', handleMouseEnter);
      currentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, onMouseEnter, onMouseLeave, leaveDelay, enterDelay]);
}

