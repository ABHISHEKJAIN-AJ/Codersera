// next.config.js
const withCSS = require('@zeit/next-css');
module.exports = withCSS({
    /* config options here */
});
//
//
//
//
const withSass = require('@zeit/next-sass')  // Add this declaration
// We modified the code earlier to add Sass
module.exports = withSass({
    sassLoaderOptions: {}
})