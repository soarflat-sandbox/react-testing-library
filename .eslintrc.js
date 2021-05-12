module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import'],
  rules: {
    // 戻り値の推論は TypeScript の型システムに任せたいので off にする
    '@typescript-eslint/explicit-function-return-type': 'off',
    // コンパイルした JavaScript を外部から利用されるわけではないので、off にする
    'react/prop-types': 'off',
    // インポート順をソートする
    // ソートの仕組み: https://github.com/lydell/eslint-plugin-simple-import-sort/#sort-order
    'simple-import-sort/imports': 'error',
    // すべてのインポートがファイルの先頭にあるか確認する（--fix で修正される）
    'import/first': 'error',
    // import 文の後に改行があるか確認する（--fix で修正される）
    'import/newline-after-import': 'error',
    // 重複している import 文がないか確認する（--fix で修正される）
    'import/no-duplicates': 'error',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.test.ts', '*.test.tsx'],
      extends: ['plugin:jest/recommended'],
    },
  ],
};
