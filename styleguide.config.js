const cfg = require("./.eslintrc.js");
const lib = require('./package.json');

module.exports = {
  components: 'src/charts/**/[A-Z]*.js',
  getComponentPathLine(componentPath) {
    return `@jetbrains/infocharts`;
  },
  webpackConfig: require('./styleguide.webpack.js'),
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
  propsParser: require('react-docgen-typescript').withDefaultConfig('./tsconfig.json', [cfg.parserOptions]).parse,
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
      components: '/src/charts/**/!(index).{tsx,ts}',
      sectionDepth: 1,
    }
  ]
}
