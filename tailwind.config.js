module.exports = {
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md',
      './docs/**/*.md',
      './blog/**/*.md',
    ],
    options: {
      whitelist: [
        'body',
        'html',
        'img',
        'a',
        'g-image',
        'g-image--lazy',
        'g-image--loaded',
        'active',
      ],
    },
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        title: ['Peddana', 'serif'],
        logo: ['Cascadia', 'serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}
