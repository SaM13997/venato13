/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'images.igdb.com',
			},
			{
				hostname: 'img.freepik.com',
			},
			{
				hostname: 'media.rawg.io',
			},
		],
	},
}

module.exports = nextConfig
