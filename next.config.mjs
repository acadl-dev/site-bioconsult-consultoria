/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export', // Habilita a exportação estática
  trailingSlash: true, // Importante para GitHub Pages
  basePath: '/site-bioconsult-consultoria', // Troque pelo nome do repositório
}

export default nextConfig
