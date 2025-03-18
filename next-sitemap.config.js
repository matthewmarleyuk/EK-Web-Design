/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ekwebdesign.vercel.app',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  outDir: 'public',
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/404', '/500'],
  generateIndexSitemap: false,
  additionalPaths: async (config) => {
    const result = [];
    // Add URLs manually since static generation of dynamic routes doesn't capture all pages
    const paths = ['/', '/about', '/services', '/contact'];
    
    return paths.map((path) => ({
      loc: path,
      changefreq: 'weekly',
      priority: path === '/' ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    }));
  },
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
