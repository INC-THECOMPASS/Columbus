import pluginJs from '@eslint/js';
import prettierPlugin from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  pluginJs.configs.recommended,
  {
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
    },
    rules: {
      // import rules
      'import/no-unresolved': 'error',
      'import/named': 'error',
      'import/namespace': 'error',
      'import/default': 'error',
      'import/export': 'error',

      // general rules
      'no-console': 'warn',
      'no-debugger': 'error',

      // prettier rules
      'prettier/prettier': 'error',

      // custom rules
      'max-depth': ['error', 2],
      'max-lines-per-function': ['error', 15],
      'operator-linebreak': ['error', 'after'],
      'no-unused-expressions': ['error', { allowTernary: true }],
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
  {
    files: ['**/__tests__/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'max-lines-per-function': 'off',
    },
  },
];
