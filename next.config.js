/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	images: {
		domains: [
			'cache.mrporter.com',
			'imagesforlunaapparel.s3.eu-west-2.amazonaws.com',
		],
	},
};

module.exports = nextConfig;
