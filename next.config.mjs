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
	experimental: {
		missingSuspenseWithCSRBailout: false,
	},
};

export default nextConfig;
