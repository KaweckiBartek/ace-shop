import React, { FC } from "react"
import { Link } from "gatsby"
import classNames from "classnames"
import { IButtonProps } from "./model"

import "./Button.scss"

const Button: FC<IButtonProps> = ({
  ariaLabel,
  children,
  link,
  btnColorVariant,
  classes,
  className,
  handler,
  type = "button",
}) => {
  const classesButton = classNames(
    `button`,
    {
      [`button--${btnColorVariant}`]: btnColorVariant,
      [`${classes}`]: classes,
    },
    className
  )

  if (link) {
    const isInternal = /^\/(?!\/)/.test(link)

    return (
      <>
        {isInternal ? (
          <Link
            rel="preload"
            className={classesButton}
            aria-label={ariaLabel}
            to={link}
          >
            {children}
          </Link>
        ) : (
          <a
            className={classesButton}
            aria-label={ariaLabel}
            href={link}
            rel="noopener noreferrer"
            target="_blank"
          >
            {children}
          </a>
        )}
      </>
    )
  }

  return (
    // eslint-disable-next-line react/button-has-type
    <button
      onClick={handler}
      className={classesButton}
      type={type}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default Button
