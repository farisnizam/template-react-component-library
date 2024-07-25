// @ts-check
import React, { useLayoutEffect, useRef, useState } from 'react'
import { getBoundingClientRect } from '@modules/utils/dom/'

/**
 * @typedef {import('./types').MenuOptions} MenuOptions
 */

/**
 * Creates an absolutely positioned menu that adjusts its top to not go out
 * of the window.
 *
 * MISSING adjust left
 *
 * @param {Object} options
 * @param {JSX.Element} options.children
 * @param {number=} options.menuMaxWidth
 * @returns {JSX.Element}
 */
export const OptionsMenu = ({ children, menuMaxWidth = 260 }) => {
  // must adjust to not go out of screen
  // for now we are just adjusting regarding bottom
  const ref = useRef(null)

  const [rect, setRect] = useState({ x: 0, y: 0, height: 0, width: 0 })

  // pulls the menu upwards if out of bounds
  const adjustment =
    rect.y + rect.height > window.innerHeight
      ? Math.min(0, -1 * (rect.y + rect.height + 25 - window.innerHeight))
      : 0

  useLayoutEffect(() => {
    setRect(
      ref.current
        ? getBoundingClientRect(ref.current)
        : { x: 0, y: 0, height: 0, width: 0 }
    )
  }, [])

  return (
    <div
      ref={ref}
      className="options-menu"
      style={{
        top: adjustment,
        ...(menuMaxWidth ? { maxWidth: menuMaxWidth } : null)
      }}
    >
      {children}
    </div>
  )
}
