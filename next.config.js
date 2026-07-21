/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	i18n: {
		locales: ['en'],
		defaultLocale: 'en',
	},
	images: {
		remotePatterns:  [
			{
				protocol: 'https',
				hostname: 'imagesforlunaapparel.s3.eu-west-2.amazonaws.com',
				pathname: '/**',
			},
		]
	},
};

module.exports = nextConfig;
