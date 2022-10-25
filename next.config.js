/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['cache.mrporter.com'],
	},
};

module.exports = nextConfig;
