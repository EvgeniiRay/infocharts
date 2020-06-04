const webpackConfig = require("./styleguide.webpack.js");
const lib = require('./package.json');

module.exports = {
  skipComponentsWithoutExample: true,
  webpackConfig,
  pagePerSection: true,
  version: lib.version,
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily:
          "'Open Sans', Helvetica, Arial, sans-serif"
      }
    }
  },
  propsParser: require('react-docgen-typescript').parse,
  sections: [
    {
      name: 'Introduction',
      content: 'docs/introduction.md'
    },
    {
      name: 'Documentation',
      sections: [
        {
          name: 'Installation',
          content: 'docs/installation.md',
        },
        {
          name: 'Configuration',
          content: 'docs/configuration.md'
        }
      ]
    },
    {
      name: 'Charts',
      components: 'src/charts/**/!(index).{tsx,ts}',
      sectionDepth: 1,
    }
  ]
}
