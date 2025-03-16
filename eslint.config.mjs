import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'
import pluginReact from 'eslint-plugin-react'


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: 'detect'
      },
    }
  },
  {
    rules: {
      'indent': ['error', 2, { 'SwitchCase': 1 }],
      'semi': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single'],
      'space-before-blocks': ['error', 'always'],
      'space-before-function-paren': ['error', 'never'],
      'keyword-spacing': ['error', { 'before': true, 'after': true, 'overrides': { 'if': { 'after': true } } }]
    }
  }
]