import React, { useEffect, RefObject } from 'react';

/**
 * Hook that executes a callback when the user clicks outside
 * of the passed ref
 *
 * @param {Array<RefObject<HTMLElement>>} refs
 * @param {() => void} [callback]
 */
export const useClickOutside = (
  refs: Array<RefObject<HTMLElement>>,
  callback: (() => void) | null = null
) => {
  useEffect(() => {
    if (!refs.length || callback === null) return;

    /**
     * Handle click outside of elements
     */
    function handleClickOutside(event: MouseEvent) {
      // cancel for any click within any of given refs
      for (let i = 0; i < refs.length; i++) {
        const ref = refs[i].current;
        if (ref && ref.contains(event.target as Node)) return;
      }
      // click is outside, do callback
      if (callback) {
        callback();
      }
    }

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [refs, callback]);
};
