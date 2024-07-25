// @ts-check
import React, { Fragment, forwardRef, useRef, useState } from 'react'
import { Icon } from '@modules/react/atoms/'
import {
  atomic_threeDotsMenuIcon,
  atomic_twoDotsMenuIcon
} from '@modules/icons/'
import { OptionsMenuRoot } from './OptionsMenuRoot'
import { getBoundingClientRect } from '@modules/utils/dom/'
import useMergedRefs from '@modules/react/hooks/useMergeRefs'

/**
 * @typedef {import('./types').MenuOptions} MenuOptions
 */

export const OptionsMenuRootButton = forwardRef(
  /**
   * @param {Object} options
   * @param {MenuOptions} options.options
   * @param {'primary'|'secondary'|'bar'=} options.style // |'breadcrumb-connector'
   * @param {'visible'|'hidden'=} options.visibility
   * @param {string=} options.className
   * @param {string=} options.title
   * @param {string=} options.icon
   * @param {number=} options.menuMaxWidth
   * @param {boolean=} options.disabled
   * @returns {JSX.Element}
   */
  (
    {
      options,
      style = 'primary',
      visibility = 'visible',
      title = 'Open menu',
      icon = null,
      menuMaxWidth = null,
      disabled = null,
      className = ''
    },
    ref
  ) => {
    const [active, setActive] = useState(false)
    const buttonRef = useRef()
    const mergedRef = useMergedRefs(buttonRef, ref)
    let { x, y, height, width } = buttonRef.current
      ? getBoundingClientRect(buttonRef.current)
      : { x: 0, y: 0, height: 0, width: 0 }

    let buttonStyle
    switch (style) {
      case 'primary':
        icon = icon || atomic_threeDotsMenuIcon
        buttonStyle = 'button-options-menu-root-primary'
        break
      case 'secondary':
        icon = icon || atomic_twoDotsMenuIcon
        buttonStyle = active
          ? 'button-options-menu-root-secondary-active'
          : 'button-options-menu-root-secondary'
        break
      case 'bar':
        icon = icon || atomic_twoDotsMenuIcon
        buttonStyle = active
          ? 'button-options-menu-root-bar-active'
          : 'button-options-menu-root-bar'
        break
      // case 'breadcrumb-connector':
      //   icon = icon || atomic_twoDotsMenuIcon
      //   buttonStyle = active
      //     ? 'button-options-menu-root-breadcrumb-connector-active'
      //     : 'button-options-menu-root-breadcrumb-connector'
      //   break
    }

    return (
      <Fragment>
        {(visibility == 'visible' || active) && (
          <button
            ref={mergedRef}
            className={`${buttonStyle} ${className}`}
            onMouseDown={e => {
              e.preventDefault()
            }}
            onMouseDownCapture={e => {
              e.stopPropagation()
            }}
            onPointerDownCapture={e => {
              e.stopPropagation()
            }}
            onPointerUp={e => {
              if (e.button === 0) setActive(true)
            }}
            title={title}
            type="button"
            disabled={disabled}
          >
            <Icon svg={icon} className="button-options-menu-root-icon" />
          </button>
        )}
        {active && (
          <div
            style={{ position: 'absolute' }}
            onMouseDownCapture={e => {
              e.stopPropagation()
            }}
            onPointerDownCapture={e => {
              e.stopPropagation()
            }}
          >
            <OptionsMenuRoot
              options={options}
              menuMaxWidth={menuMaxWidth}
              xMod={8}
              yMod={height / 2}
              originX={x + width / 2 + window.scrollX}
              originY={y + height / 2 + window.scrollY}
              originHeight={height}
              originWidth={width}
              onClose={() => setActive(false)}
            />
          </div>
        )}
      </Fragment>
    )
  }
)
