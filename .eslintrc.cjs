module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import"],
  settings: {
    "import/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
    "import/resolver": { typescript: {}, node: { extensions: [".js", ".jsx", ".ts", ".tsx"] } },
    "import/extensions": [".js", ".mjs", ".jsx", ".ts", ".tsx"],
  },
  overrides: [
    {
      files: [
        "**/*.spec.js",
        "**/*.spec.jsx",
        "**/*.spec.ts",
        "**/*.spec.tsx",
        "**/*.test.js",
        "**/*.test.jsx",
        "**/*.test.ts",
        "**/*.test.tsx",
        "**/*-test.js",
        "**/*-test.jsx",
        "**/*-test.ts",
        "**/*-test.tsx",
      ],
      env: { jest: true },
    },
  ],
  rules: {
    "no-empty-function": "off",
    "@typescript-eslint/no-empty-interface": "off",

    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "multiline-block-like" },
      { blankLine: "always", prev: "multiline-block-like", next: "*" },
      { blankLine: "always", prev: "*", next: ["const", "let", "export"] },
      { blankLine: "always", prev: ["const", "let", "export"], next: "*" },
      { blankLine: "any", prev: ["const", "let", "export"], next: ["const", "let", "export"] },
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: "if", next: "if" },
    ],

    // Import Static Analysis
    "import/no-cycle": "error",

    // Import Warning
    "import/no-mutable-exports": "error",
    "import/prefer-default-export": "off",
    // "import/no-default-export": "error",

    // Import Style Guide
    "import/order": [
      "error",
      { groups: ["builtin", "external", "parent", "sibling", "index"], alphabetize: { order: "asc" } },
    ],
    "import/newline-after-import": ["error", { count: 1 }],
    "import/no-duplicates": "error",

    // Enable dev dependency usage
    "import/no-extraneous-dependencies": [
      "error",
      { devDependencies: ["**/*.test.ts", "**/*.test.tsx", "**/*.stories.tsx"] },
    ],

    // Enable import without extention
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", jsx: "never", ts: "never", tsx: "never" },
    ],

    // Handle typescript no-shadow e.g.) enum
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",

    // Use no-unused-vars for Typescript
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],

    // Class Definition
    "lines-between-class-members": ["error", "always", { exceptAfterSingleLine: true }],
    "class-methods-use-this": "off",
    "max-classes-per-file": "off",
    "no-useless-constructor": "off",
  },
};
