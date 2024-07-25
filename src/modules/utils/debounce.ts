// // @ts-check

// /**
//  * @param {() => void} callback to debounce
//  * @param {number} wait milliseconds
//  * @param {Object} options
//  * @param {boolean=} options.leading
//  * @param {boolean=} options.trailing
//  * @returns
//  */
// export const debounce = (
//   callback,
//   wait = 0,
//   { leading = true, trailing = false } = {}
// ) => {
//   let timeoutId = null
//   return (...args) => {
//     window.clearTimeout(timeoutId)
//     if (timeoutId === null && leading) callback.apply(null, args)
//     timeoutId = window.setTimeout(() => {
//       if (!leading || trailing) callback.apply(null, args)
//     }, wait)
//   }
// }


type DebounceOptions = {
  leading?: boolean;
  trailing?: boolean;
};

/**
 * Debounces a callback function.
 * @param {() => void} callback - The function to debounce.
 * @param {number} wait - The number of milliseconds to delay.
 * @param {DebounceOptions} options - Options to control the debounce behavior.
 * @returns {(...args: any[]) => void}
 */
export const debounce = (
  callback: (...args: any[]) => void,
  wait = 0,
  { leading = true, trailing = false }: DebounceOptions = {}
): ((...args: any[]) => void) => {
  let timeoutId: number | null = null;
  return (...args: any[]) => {
    if (timeoutId !== null) {
      window.clearTimeout(timeoutId);
    }
    if (timeoutId === null && leading) {
      callback.apply(null, args);
    }
    timeoutId = window.setTimeout(() => {
      if (!leading || trailing) {
        callback.apply(null, args);
      }
      timeoutId = null; // reset timeoutId to ensure the trailing call is properly handled
    }, wait);
  };
};
