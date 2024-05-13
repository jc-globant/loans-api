import globals from 'globals';
import pluginJs from '@eslint/js';

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
  {
    rules: {
      'eqeqeq': 'off',
      'no-unused-vars': ['warn', { varsIgnorePattern: '^_$' }],
      'prefer-const': ['error', { ignoreReadBeforeAssign: true }],
    },
  },
];
