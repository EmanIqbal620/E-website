/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        domains: ['cdn.sanity.io'], // Add this line
        domains: ['cdn.sanity.io', 'another-domain.com'],

      },
      


};



export default nextConfig;
