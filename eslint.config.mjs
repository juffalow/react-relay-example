import eslint from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import reactPlugin from 'eslint-plugin-react';

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat['jsx-runtime'],
  {
    settings: {
      react: {
        version: 'detect',
      },
    }
  },
  {
    ignores: [
      'node_modules',
      'build',
      '.react-router',
      'public/gtag.js',
      '**/__generated__',
    ],
  },
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-indexed-object-style': 'warn',
    },
  }
);
