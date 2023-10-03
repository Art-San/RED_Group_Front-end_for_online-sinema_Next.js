/** @type {import('next').NextConfig} */
const nextConfig = {
	// reactStrictMode: true, // Выключили что бы Next.js не ругался так как используем устаревшие библиотеки
	poweredByHeader: false, // Отключили пробивку с помощью чего сделан сайт
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
