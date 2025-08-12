/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
		return [
			{
				source: '/',
				destination: '/index',
			},
		]
	},
	experimental: {
		optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
