import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default defineConfig([
  globalIgnores(['dist']),

  {
    files: ['**/*.{ts,tsx}'],

    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactHooks.configs.recommended,
      reactRefresh.configs.vite,
      react.configs.flat.recommended,
      eslintConfigPrettier, // prettier와 충돌하는 eslint 규칙 제거
    ],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: globals.browser,
    },

    plugins: {
      prettier,
    },

    rules: {
      // prettier를 eslint 규칙으로 실행
      'prettier/prettier': ['warn', { endOfLine: 'auto' }],

      // TS
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',

      // react refresh
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // 필요하면
      'react/jsx-no-target-blank': 'off',
    },
  },
]);
