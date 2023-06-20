/** @type {import('@babel/core').ConfigFunction} */
module.exports = function (api) {
  api.cache.using(() => process.env.NODE_ENV);
  return {
    presets: [
      'module:metro-react-native-babel-preset',
      '@babel/preset-typescript',
    ],
    plugins: ['module:react-native-dotenv', 'react-native-reanimated/plugin'],
  };
};
