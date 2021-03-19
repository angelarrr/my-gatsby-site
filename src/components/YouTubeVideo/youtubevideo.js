import * as React from "react"
import PropTypes from "prop-types"

const YouTubeVideo = ({
    title = "YouTube video",
    videoId
}) => (
    <div>
        <iframe
            width="560"
            height="315"
            src={ `https://www.youtube.com/embed/${videoId}` }
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title={ title }
        />
    </div>
)

YouTubeVideo.propTypes = {
    /* Video title. Default title is "YouTube video" */
    title: PropTypes.string,
    /* Unique ID of video found in the YouTube embed link of video */
    videoId: PropTypes.string.isRequired
}

export default YouTubeVideo