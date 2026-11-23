/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async headers() {
    const isProduction = process.env.NODE_ENV === 'production';
    const sharedSecurityHeaders = [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ...(isProduction ? [{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' }] : []),
    ];
    const siteContentSecurityPolicy = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self'",
      "img-src 'self' https://images.unsplash.com https://cdn.sanity.io data: blob:",
      "font-src 'self' data:",
      "style-src 'self' 'unsafe-inline'",
      `script-src 'self' 'unsafe-inline'${isProduction ? '' : " 'unsafe-eval'"}`,
      "connect-src 'self'",
      "frame-src https://maps.google.com https://www.google.com",
      ...(isProduction ? ['upgrade-insecure-requests'] : []),
    ].join('; ');
    const studioContentSecurityPolicy = [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'none'",
      "form-action 'self' https://*.sanity.io",
      "img-src 'self' https://images.unsplash.com https://cdn.sanity.io https://*.sanity.io data: blob:",
      "font-src 'self' data: https://design-system-static.sanity.io https://*.sanity.io",
      "style-src 'self' 'unsafe-inline' https://*.sanity.io",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://core.sanity-cdn.com https://*.sanity.io",
      "connect-src 'self' https://*.api.sanity.io https://*.sanity.io https://*.sanity-cdn.com wss://*.api.sanity.io wss://*.sanity.io",
      "frame-src https://*.sanity.io https://*.sanity.studio",
      ...(isProduction ? ['upgrade-insecure-requests'] : []),
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: sharedSecurityHeaders,
      },
      {
        source: '/((?!studio(?:/|$)).*)',
        headers: [{ key: 'Content-Security-Policy', value: siteContentSecurityPolicy }],
      },
      {
        source: '/studio/:path*',
        headers: [{ key: 'Content-Security-Policy', value: studioContentSecurityPolicy }],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
};

export default nextConfig;
