/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
};

export default nextConfig;
