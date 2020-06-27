// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const tailwindcss = require('tailwindcss');

module.exports = {
  transformers: {
    remark: {},
  },

  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "blog/**/*.md",
        typeName: "Post",
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: "Post",
        baseDir: 'blog',
        path: "blog/**/*.md",
        template: "./src/templates/Post.vue",
      }
    }
  ],

  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          tailwindcss
        ]
      }
    }
  },
  chainWebpack: config =>{
    config.module
      .rule('css')
      .oneOf('normal')
        .use('postcss-loader')
          .tap(options => {
            options.plugins.push(tailwindcss('./tailwind.config.js'))
            return options
          })
  },
};
