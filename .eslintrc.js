module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', // TypeScriptでチェックされる項目をLintから除外する設定
    'prettier', // prettierのextendsは他のextendsより後に記述する
    //'prettier/@typescript-eslint', // eslint verアップデートでprettier/@typescript-eslintの記載が不要になった。
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json', // TypeScriptのLint時に参照するconfigファイルを指定
  },
  root: true, // 上位ディレクトリにある他のeslintrcを参照しないようにする
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn', // 関数の戻り値の型を明示
    '@typescript-eslint/no-explicit-any': 'warn', // 'any'型の使用を警告
    '@typescript-eslint/no-unused-vars': 'warn', // 未使用の変数を警告
    '@typescript-eslint/explicit-module-boundary-types': 'warn', // モジュールの境界での型を明示
    // '@typescript-eslint/no-inferrable-types': 'warn', // 推論可能な型の明示を警告
    // 'no-console': 'warn', // console.logの使用を警告
    'prefer-const': 'warn', // 変更されない変数にはconstを使用
  },
};
