module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "airbnb-typescript",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs", "server"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/function-component-definition": 0,
    "@typescript-eslint/semi": 0,
    "@typescript-eslint/no-unused-expressions": 0,
    "import/no-extraneous-dependencies": 0,
    "no-param-reassign": 0,
    "no-unused-vars": 'warn',
    "max-len": ["warn", { "code": 130 }],

  },
  overrides: [
  {
    files: ["*.test.ts", "*.test.tsx"],
    rules: {
      "react/destructuring-assignment": 0
    }
  }
]
};
