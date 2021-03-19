import * as React from "react"
import PropTypes from "prop-types"
import "./header.css"

/**
 * Header component
 * Renders a h1 section header with a link
 */
const Header = ({
	link,
	title
}) => (

	<header>
		<h1>
			<a
				href={ link }
				rel="noreferrer"
				target="_blank"
			>
				{ title }
			</a>
		</h1>
	</header>

)

Header.propTypes = {
	/* External link the header title will navigate to when clicked */
	link: PropTypes.string.isRequired,
	/* Header title */
	title: PropTypes.string.isRequired,
}

export default Header
