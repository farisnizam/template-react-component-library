// @ts-check
import React, { useLayoutEffect, useRef, useState } from 'react'
import usePortal from '@modules/react/hooks/usePortal'
import { createPortal } from 'react-dom'
import { useClickOutside } from '@modules/atomic-ui/hooks/useClickOutside'
import { OptionsMenuOptionsList } from './OptionsMenuOptionsList'
import { OptionsMenu } from './OptionsMenu'
import { getBoundingClientRect } from '@modules/utils/dom/'

/**
 * @typedef {import('./types').MenuOptions} MenuOptions
 */

/**
 * Creates a Portal as a root for the options menu.
 * Nested menus will load inline with the code, and
 * are not portalled
 *
 * @param {Object} options
 * @param {MenuOptions} options.options
 * @param {number} options.xMod
 * @param {number} options.yMod
 * @param {number} options.originX
 * @param {number} options.originY
 * @param {number} options.originHeight
 * @param {number} options.originWidth
 * @param {number=} options.menuMaxWidth
 * @param {() => void} options.onClose
 * @returns {JSX.Element}
 */
export const OptionsMenuRoot = ({
  options,
  originX,
  originY,
  originHeight,
  xMod = 0,
  yMod = 0,
  menuMaxWidth = null,
  onClose
}) => {
  // PEDRO_TO_MOVE_TO_CONTEXT_PROVIDER
  const target = usePortal('dot-content')
  const ref = useRef(null)
  const [rect, setRect] = useState({ x: 0, y: 0, height: 0, width: 0 })
  const [position, setPosition] = useState({})

  useLayoutEffect(() => {
    const rafId = window.requestAnimationFrame(() =>
      setRect(
        ref.current
          ? getBoundingClientRect(ref.current)
          : { x: 0, y: 0, height: 0, width: 0 }
      )
    )
    return () => {
      window.cancelAnimationFrame(rafId)
    }
  }, []) // , [originX, originY]

  useClickOutside([ref], onClose)

  useLayoutEffect(() => {
    let _position = {}
    // X position
    if (originX + xMod + rect.width > window.innerWidth - 20) {
      _position.left = originX - xMod - rect.width
    } else {
      _position.left = originX + xMod
    }
    // Y position
    if (originY - yMod + rect.height > window.innerHeight - 40) {
      _position.top = originY + yMod - rect.height
    } else {
      _position.top = originY - yMod
    }
    setPosition(_position)
  }, [rect.height])

  return createPortal(
    <div
      ref={ref}
      className="dot-style"
      style={{
        position: 'absolute',
        zIndex: 999999999999,
        ...position
      }}
    >
      <OptionsMenu menuMaxWidth={menuMaxWidth}>
        <OptionsMenuOptionsList options={options} onClose={onClose} />
      </OptionsMenu>
    </div>,
    target
  )
}
