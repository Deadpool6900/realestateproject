// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// export default nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: true,
    distDir: "build",
    images: {
        domains: ["source.unsplash.com", "images.unsplash.com", "unsplash.com"],
    },
};

export default nextConfig;