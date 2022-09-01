/**
 * @type {import('eslint').ESLint.ConfigData}
 */
const eslintConfig = {
  extends: ['custom/react'],
  parserOptions: { project: require.resolve('./tsconfig.json') },
  root: true,
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: require.resolve('./tsconfig.json'),
      },
    },
  },
};

module.exports = eslintConfig;
