// @ts-check
import React from 'react'
import { Icon } from '@modules/react/atoms/'

/**
 * @param {Object} options
 * @param {string} options.text
 * @param {string=} options.icon
 * @param {string=} options.tip
 * @param {boolean=} options.disabled
 * @param {() => void} options.onClick
 * @returns {JSX.Element}
 */
export const OptionsMenuButton = ({
  icon,
  text,
  tip,
  disabled = false,
  onClick
}) => (
  <button
    className={`button-options-menu`}
    onMouseDown={e => e.preventDefault()}
    onClick={onClick}
    title={tip}
    type="button"
    disabled={disabled}
  >
    {icon && <Icon svg={icon} />}
    <span className="text">{text}</span>
  </button>
)
