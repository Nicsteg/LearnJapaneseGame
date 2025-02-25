module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    "react/react-in-jsx-scope": "off",  // Disable React import warning
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    // Add this line to disable the 'no-unused-vars' rule for React
    'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
  },
}
