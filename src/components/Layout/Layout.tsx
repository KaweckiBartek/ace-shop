import React, { FC } from "react"
import classNames from "classnames"
import { LayoutProps } from "./models"
import "./Layout.scss"
import "../../styles/main.scss"

const Layout: FC<LayoutProps> = ({
  children,
  headerTransparent,
  className,
}) => {
  return (
    <div
      className={classNames("layout layout-wrapper", className, {
        "layout--transparent": headerTransparent,
      })}
    >
      <main id="main" className="layout__main">
        {children}
      </main>
    </div>
  )
}

export default Layout
