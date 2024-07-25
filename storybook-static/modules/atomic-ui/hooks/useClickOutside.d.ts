import { RefObject } from '../../../../node_modules/react';

/**
 * Hook that executes a callback when the user clicks outside
 * of the passed ref
 *
 * @param {Array<RefObject<HTMLElement>>} refs
 * @param {() => void} [callback]
 */
export declare const useClickOutside: (refs: Array<RefObject<HTMLElement>>, callback?: (() => void) | null) => void;
