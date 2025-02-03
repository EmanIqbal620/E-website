/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'another-domain.com'], // Use a single array for all domains
  },
};

export default nextConfig;
