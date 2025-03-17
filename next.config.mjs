/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: false,

	eslint: {
		ignoreDuringBuilds: true,
	},
	compress: true,
	compiler: {
		styledComponents: true,
	},
};

export default nextConfig;
