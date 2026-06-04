import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint config is optional for this template; don't fail builds on it.
  eslint: {
    ignoreDuringBuilds: true,
  },
}

export default withPayload(nextConfig)
