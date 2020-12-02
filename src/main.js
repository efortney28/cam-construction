// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '~/styles.css'


export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(BootstrapVue)

  head.meta.push(
    {
      key:'keywords',
      name: 'keywords',
      content: 'home renovation, houston, texas, builder, construction, liberty, baytown, beaumont, dream home, home, driveways, wood work, concrete work,'
    },
    {
      name: 'google-site-verification',
      content: 'WAEi3CrQeKww-xkn-8Y9DDfNnngiHTXL_sUXEIDObCE'
    },
  
  )
}
