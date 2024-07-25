// @ts-check

import React from 'react'
import { OptionsMenuRoot } from './OptionsMenuRoot'
import { getBoundingClientRect } from '@modules/utils/dom/'

/**
 * @param {Object} props
 * @param {import("./types").MenuOptions} props.options
 * @param {() => void} props.onClose
 * @param {React.MutableRefObject} props.targetRef
 * @returns
 */
export default function OptionsMenuAttached({ options, onClose, targetRef }) {
  let { x, y, height, width } = targetRef.current
    ? getBoundingClientRect(targetRef.current)
    : { x: 0, y: 0, height: 0, width: 0 }

  return (
    <OptionsMenuRoot
      options={options}
      menuMaxWidth={window.outerHeight * 0.62}
      xMod={0}
      yMod={0}
      originX={x + window.scrollX}
      originY={y + height + window.scrollY}
      originHeight={height}
      originWidth={width}
      onClose={onClose}
    />
  )
}
