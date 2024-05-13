import globals from 'globals'
import pluginJs from '@eslint/js'

// export default [
//   {
//     languageOptions: { globals: globals.node },
//     rules: {
//       "no-unused-vars": ["warn", { "varsIgnorePattern": "^_$" }]
//     }
//   },
//   pluginJs.configs.recommended
// ];

export default [
  pluginJs.configs.recommended,
  {
    languageOptions: { globals: globals.node },
    rules: {
      'indent': ['error', 2],
      'linebreak-style': ['error', 'unix'],
      'quotes': [
        'error',
        'single',
        {
          allowTemplateLiterals: true,
        },
      ],
      'semi': ['error', 'never'],
      'object-curly-spacing': ['error', 'always'],
      'no-console': ['error', { allow: ['warn', 'error', 'info'] }],
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },
]
