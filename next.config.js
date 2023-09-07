/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		domains: ['images.igdb.com', 'img.freepik.com', 'media.rawg.io'],
	},
}

module.exports = nextConfig
