/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		appDir: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'media.rawg.io',
				port: '',
				pathname: '/**',
			},
		],
	},
}

module.exports = nextConfig
