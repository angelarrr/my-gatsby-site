import * as React from "react"
import PropTypes from "prop-types"
import "./header.css"

const Header = ({
	link,
	title
}) => (

	<header>
		<h1>
			<a href={ link }>{ title }</a>
		</h1>
	</header>

)

Header.propTypes = {
	/* Link that header title will navigate to when clicked */
	link: PropTypes.string.isRequired,
	/* Header title */
	title: PropTypes.string.isRequired,
}

Header.defaultProps = {
	title: ``,
}

export default Header
