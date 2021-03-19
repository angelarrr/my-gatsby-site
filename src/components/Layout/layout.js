import * as React from "react"
import PropTypes from "prop-types"

import "./layout.css"

/**
 * Layout component
 * Provides base styles
 */
const Layout = ({ children }) => (
    <div className="base-layout">
        { children }
    </div>
)

Layout.propTypes = {
    /* Content that layout wraps */
    children: PropTypes.node.isRequired,
}

export default Layout
