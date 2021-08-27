module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: [
    '../src/components/**/stories.mdx',
    '../src/components/**/stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    "storybook-addon-next-router",
    "@storybook/addon-essentials"
  ],
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      require.resolve('@babel/plugin-transform-react-jsx')
    ]
  }),
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
