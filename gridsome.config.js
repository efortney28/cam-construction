// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {

  siteName: 'CAM Construction',
  sitURL: 'https://camcustom.com/',
  siteDescription: 'Custom residential and home improvement in the greater Houston area and surrounding areas such as Liberty, Baytown, Beaumont, and more!',
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
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/testamonials/**/*.md',
        typeName: 'Testamonial'
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
        exclude: ['/admin'],
        config: {
          '/': {
            changefreq: 'monthly',
            priority: 0.5,
          },
          '/work/': {
            changefreq: 'weekly',
            priority: 0.7,
          },
          '/contact/': {
            changefreq: 'monthly',
            priority: 0.3
          }
        }
      }
  ],
}
