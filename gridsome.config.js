// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {

  siteName: 'CAM Construction',
  sitURL: 'https://camcustom.com',
  siteDescription: 'Custom residential construction work.',
  icon: 'src/favicon.png',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/work/**/*.md',
        typeName: 'WorkEntry'
      }
    },
    {
      use: 'gridsome-plugin-netlify-cms',
      options: {
        publicPath: '/admin'
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-99907577-2'
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        exclude: ['/admin'],
        config: {
          '/*': {
            changefreq:'weekly',
            priority: 0.5
          }
        }
      }
    },
  ],
}
