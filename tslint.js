module.exports = {
  "extends": [
    "tslint-eslint-rules",
  ],
  "rules": {
    "align": [
      true,
      "parameters",
      "statements"
    ],
    "class-name": true,
    "comment-format": [
      true,
      "check-space"
    ],
    "curly": true,
    "object-curly-spacing": true,
    "eofline": true,
    "forin": true,
    "indent": [
      true,
      "spaces"
    ],
    "jsdoc-format": false,
    "label-position": true,
    "max-line-length": [
      true,
      200
    ],
    "member-ordering": [
      false,
      {
        "order": [
          "statics-first"
        ]
      }
    ],
    "new-parens": true,
    "no-any": false,
    "no-empty-interface": true,
    "no-arg": true,
    "no-bitwise": false,
    "no-conditional-assignment": true,
    "no-consecutive-blank-lines": true,
    "no-console": [
      true,
      "debug",
      "info",
      "time",
      "timeEnd",
      "trace"
    ],
    "no-construct": true,
    "no-constructor-vars": false,
    "no-debugger": true,
    "no-duplicate-variable": true,
    "no-empty": [true, "allow-empty-functions", "allow-empty-catch"], // 不允许空块，但是函数可以
    "no-eval": true,
    "no-internal-module": true,
    "no-namespace": true,
    "no-reference": true,
    "no-shadowed-variable": true,
    "no-string-literal": true,
    "no-switch-case-fall-through": false,
    "no-trailing-whitespace": true,
    "no-unused-expression": [
      true,
      "allow-fast-null-checks",
      "allow-new",
      "allow-tagged-template"
    ],
    "no-use-before-declare": false,
    "no-var-keyword": true,
    "no-var-requires": false,
    "object-literal-sort-keys": false,
    "one-line": [
      true,
      "check-catch",
      "check-else",
      "check-finally",
      "check-open-brace",
      "check-whitespace"
    ],
    "one-variable-per-declaration": [
      false,
      "ignore-for-loop"
    ],
    "quotemark": [
      true,
      "single"
    ],
    "radix": true,
    "semicolon": [
      true,
      "always",
      "ignore-bound-class-methods",
      "ignore-interfaces",
    ],
    "switch-default": true,
    "trailing-comma": [
      true,
      {
        "singleline": "never"
      }
    ],
    "triple-equals": [
      true,
      "allow-null-check"
    ],
    "typedef": true,
    "typedef-whitespace": [
      true,
      {
        "call-signature": "nospace",
        "index-signature": "nospace",
        "parameter": "nospace",
        "property-declaration": "nospace",
        "variable-declaration": "nospace"
      },
      {
        "call-signature": "onespace",
        "index-signature": "onespace",
        "parameter": "onespace",
        "property-declaration": "onespace",
        "variable-declaration": "onespace"
      }
    ],
    "use-isnan": true,
    "variable-name": [
      true,
      "allow-leading-underscore",
      "ban-keywords",
      "check-format",
      "allow-pascal-case"
    ],
    "whitespace": [
      true,
      "check-branch",
      "check-decl",
      "check-operator",
      "check-module",
      "check-separator",
      "check-type",
      "check-typecast"
    ],
    "prefer-const": true,
    "no-return-await": true,
    "no-unnecessary-callback-wrapper": true,
  }
}
