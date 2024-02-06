interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'MagickSpace', // Site author
	title: 'Astro Theme OpenBlog', // Site title.
	description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // Description to display in the meta tags
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
