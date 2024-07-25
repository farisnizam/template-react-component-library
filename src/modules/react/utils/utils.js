/**
 * Utility function to conditionally wrap an element
 *
 * @param {Object} options
 * @param {boolean} options.condition
 * @param {(children: React.ReactElement) => React.ReactElement} options.wrapper
 * @param {React.ReactElement} options.children
 */
export function conditionalWrapper({ condition, wrapper, children }) {
  return condition ? wrapper(children) : children
}
