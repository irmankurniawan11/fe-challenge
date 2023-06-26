/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        GOREST_TOKEN_CLIENT: process.env.GOREST_TOKEN,
    }
}

module.exports = nextConfig
