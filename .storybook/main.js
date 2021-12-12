// .storybook/main.js

module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: ['@storybook/addon-storysource', '@storybook/addon-actions', '@storybook/addon-notes', '@storybook/addon-viewport', '@storybook/addon-a11y', 'storybook-addon-outline', 'storybook-tailwind-dark-mode', {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    }],
  };