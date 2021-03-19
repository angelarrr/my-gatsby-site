import * as React from "react"

import { Header, Layout, YouTubeVideo } from "../components"

const Homepage = () => (
  <Layout>
		<Header
			link="https://www.google.com"
			title="Hello World"
		/>

		<YouTubeVideo
			title="Cute Kittens Doing Funny Things 2020 YouTube Video"
			videoId="kr4g2h5YmnU"
		/>
  </Layout>
)

export default Homepage
