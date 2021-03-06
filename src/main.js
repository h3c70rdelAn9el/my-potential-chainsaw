// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue';
import BlogLayout from '~/layouts/BlogLayout.vue';
import VueScrollTo from 'vue-scrollto';

import "./assets/css/global.css";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;
library.add(faGithub, faLinkedin, faEnvelope);

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("BlogLayout", BlogLayout);
  Vue.component("fa", FontAwesomeIcon);

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })
}
