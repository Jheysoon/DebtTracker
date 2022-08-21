module.exports = {
  presets: [
    [
      'module:metro-react-native-babel-preset',
      {useTransformReactJSXExperimental: true},
    ],
  ],
  plugins: [
    ['module:react-native-dotenv'],
    [
      '@babel/plugin-transform-react-jsx',
      {
        runtime: 'automatic',
      },
    ],
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '^~/(.+)': './src/\\1',
        },
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.ts',
          '.android.ts',
          '.ios.tsx',
          '.android.tsx',
          '.js',
          '.jsx',
          '.json',
          '.tsx',
          '.ts',
          '.native.js',
        ],
      },
    ],
  ],
};
