/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		// APP-SERVER_URL: process.env.REACT_APP-SERVER_URL,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: `http://localhost:3001/api/:path*`,
			},
			{
				source: '/uploads/:path*',
				destination: `http://localhost:3001/uploads/:path*`,
			},
		]
	},
}

module.exports = nextConfig
