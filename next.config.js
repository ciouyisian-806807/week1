const path = require("path");
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  /* bydefault config  option Read For More Optios
  here https://github.com/vercel/next-plugins/tree/master/packages/next-sass
  */
  cssModules: true,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  resolve: {
    alias: {
      // '@compoments': path.resolve(__dirname, 'assets/src/javascript/compoments'),
      // '@template': path.resolve(__dirname, 'assets/src/javascript/template'),
      // '@scss': path.resolve(__dirname, 'assets/src/scss'),
    },
  },
};

module.exports = nextConfig;
