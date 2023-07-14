async function getServerSideSitemap() {
    // Import your Next.js page routes
    const pages = ['/', '/checkout', '/auth/signup', '/auth/login', '/catalogue', '/services', '/destination']; // Add your page routes here

    // You can dynamically generate the pages array based on your Next.js app's pages

    return pages.map((page) => ({
        url: page,
        changefreq: 'daily', // Adjust as needed
        priority: 0.7, // Adjust as needed
    }));
}

module.exports = {
    getServerSideSitemap,
};