import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginImport from 'eslint-plugin-import';

export default [
  pluginJs.configs.recommended,
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node,
    },
    plugins: {
      import: pluginImport,
    },
    rules: {
      'import/extensions': 'off',
      'no-console': 'off',
    },
  },
];
