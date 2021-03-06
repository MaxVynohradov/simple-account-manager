// https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project
// https://dev.to/renatobentorocha/how-to-setup-a-react-js-project-with-typcript-eslint-and-prettier-8mn
// https://levelup.gitconnected.com/setting-up-eslint-with-prettier-typescript-and-visual-studio-code-d113bbec9857
// https://github.com/donatoaguirre24/react-typescript-eslint-config/blob/master/.eslintrc.json

module.exports = {
  env: {
    'browser': true,
    'es6': true,
    'jest': true,
    'jest/globals': true,
    'serviceworker': true
  },
  globals: {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    }
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'prettier',
    'simple-import-sort',
  ],
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:promise/recommended',
    'plugin:jest/all',
  ],
  rules: {
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never'
      }
    ],
    semi: [2, 'always'],
    'prettier/prettier': 'error',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-filename-extension': [
      1,
      { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/button-has-type': 0,
    'import/no-extraneous-dependencies': [2, { devDependencies: ['**/test.tsx', '**/test.ts'] }],
    '@typescript-eslint/indent': [2, 2],
    // copied from back-end config
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    camelcase: [
      'error',
      {
        properties: 'never',
      },
    ],
    curly: ["error", 'multi', 'consistent'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'allow-null'],
    'func-names': ['error', 'as-needed'],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'guard-for-in': 'error',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'max-len': ["error", { "code": 120 }],
    'handle-callback-err': 'error',
    'max-depth': 'error',
    'max-params': ['error', 5],
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-else-return': 'error',
    'no-eval': 'error',
    'max-statements-per-line': 'off',
    'consistent-this': 'error',
    'no-extra-label': 'error',
    'no-implicit-coercion': 'error',
    'no-implicit-globals': 'error',
    'no-implied-eval': 'error',
    'no-iterator': 'error',
    'no-label-var': 'error',
    'no-labels': [
      'error',
      {
        allowLoop: true,
      },
    ],
    'no-lone-blocks': 'error',
    'no-lonely-if': 'error',
    'no-loop-func': 'error',
    'no-mixed-requires': [
      'error',
      {
        grouping: true,
      },
    ],
    'no-multi-str': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-new-require': 'error',
    'no-new-symbol': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-concat': 'error',
    'no-useless-rename': 'error',
    'no-void': 'error',
    'no-with': 'error',
    'object-shorthand': 'error',
    'operator-assignment': 'error',
    'padding-line-between-statements': 'error',
    'prefer-template': 'error',
    radix: 'error',
    'spaced-comment': [
      'error',
      'always',
      {
        block: {
          balanced: true,
        },
      },
    ],
    'vars-on-top': 'error',
    yoda: 'error',
    'no-trailing-spaces': 'error',
    'import/no-extraneous-dependencies': 2,
    'max-classes-per-file': 'off',
    'no-array-constructor': 'off',
    'class-methods-use-this': 'off',
    'no-unused-vars': 2,
    'no-use-before-define': 'off',
    'no-var': 2,
    'no-empty-function': 'off',
    'prefer-const': 2,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'no-console': 1,
    'sort-keys': 0,
    quotes: ['error', 'single'],
    'object-curly-spacing': 2,
    'simple-import-sort/sort': 'error',
    'lines-between-class-members': 'off',
    'import/prefer-default-export': 'off',
    'sort-imports': 'off',
    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    '@typescript-eslint/no-explicit-any': 2,
    '@typescript-eslint/no-empty-interface': 2,
    '@typescript-eslint/explicit-function-return-type': 2,
    '@typescript-eslint/member-ordering': 2,
    '@typescript-eslint/no-unused-vars': 2,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/await-thenable': 2,
    '@typescript-eslint/no-for-in-array': 2,
    '@typescript-eslint/no-misused-promises': 2,
    '@typescript-eslint/no-unnecessary-type-assertion': 2,
    '@typescript-eslint/prefer-includes': 2,
    '@typescript-eslint/prefer-regexp-exec': 2,
    '@typescript-eslint/prefer-string-starts-ends-with': 2,
    'require-await': 'off',
    '@typescript-eslint/require-await': 2,
    '@typescript-eslint/unbound-method': 2,
    '@typescript-eslint/adjacent-overload-signatures': 2,
    '@typescript-eslint/ban-types': 2,
    '@typescript-eslint/camelcase': 2,
    '@typescript-eslint/class-name-casing': 2,
    '@typescript-eslint/consistent-type-assertions': 2,
    '@typescript-eslint/no-use-before-define': 2,
    '@typescript-eslint/no-var-requires': 2,
    '@typescript-eslint/prefer-for-of': 2,
    '@typescript-eslint/prefer-namespace-keyword': 2,
    '@typescript-eslint/triple-slash-reference': 2,
    '@typescript-eslint/type-annotation-spacing': 2,
    '@typescript-eslint/no-array-constructor': 2,
    '@typescript-eslint/no-empty-function': 2,
    '@typescript-eslint/no-inferrable-types': 2,
    '@typescript-eslint/no-misused-new': 2,
    '@typescript-eslint/no-namespace': 2,
    '@typescript-eslint/no-non-null-assertion': 2,
    '@typescript-eslint/no-this-alias': 2,
    '@typescript-eslint/member-delimiter-style': 2,
    '@typescript-eslint/promise-function-async': 2,
    '@typescript-eslint/no-dynamic-delete': 2,
    '@typescript-eslint/no-floating-promises': 2,
    '@typescript-eslint/prefer-readonly': 2,
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array-simple',
      },
    ],
    '@typescript-eslint/generic-type-naming': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-unnecessary-qualifier': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/require-array-sort-compare': 'error',
    '@typescript-eslint/restrict-plus-operands': 'error',
    '@typescript-eslint/quotes': ['error', 'single'],
    '@typescript-eslint/ban-ts-ignore': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    },
    react: {
      version: 'detect'
    }
  }
};
