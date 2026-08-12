import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};

module.exports = {
  allowedDevOrigins: process.env.ALLOWED_DEV_ORIGINS
    ? process.env.ALLOWED_DEV_ORIGINS.split(',').map(origin => origin.trim())
    : '',
}

export default nextConfig;
