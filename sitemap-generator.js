const { createSitemap } = require('sitemap')
const { SitemapStream, streamToPromise } = require('sitemap')

const { getServerSideSitemap } = require('./next-sitemap');

async function generateSitemap() {
    const pages = await getServerSideSitemap();

    const sitemap = createSitemap({
        hostname: 'https://example.com', // Replace with your website URL
        cacheTime: 600000, // 600 seconds (10 minutes) - adjust as needed
        urls: pages,
    });

    const stream = new SitemapStream({ hostname: 'https://example.com' }); // Replace with your website URL

    const xml = await streamToPromise(stream.pipe(sitemap.write()));

    // Save the generated XML sitemap to a file
    const fs = require('fs');
    fs.writeFileSync('./public/sitemap.xml', xml);
}

generateSitemap();