module.exports = {
  presets: [
    [
      '@rnx-kit/babel-preset-metro-react-native',
      {unstable_transformProfile: process.env.ESBUILD ? 'esbuild' : undefined},
    ],
  ],
  plugins: [],
};
