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
	images: {
		domains: ["avatars.githubusercontent.com"],
	},
};

export default nextConfig;
