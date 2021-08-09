module.exports = {
  // env: {
  //   browser: true,
  //   es2021: true
  // },
  parserOptions: {
    parser: '@typescript-eslint/parser', // 指定eslint解析器
    ecmaVersion: 2020, // 允许解析现代ecmascript特性
    sourceType: 'module', // 允许使用imports
    ecmaFeatures: {
      ts: true
    }
  },
  extends: [
    'plugin:vue/vue3-recommended'
    // 'plugin:@typescript-eslint/recommended', // 使用@typescript eslint/eslint插件中推荐的规则
    // 'prettier/@typescript-eslint', // 使用eslint config prettier禁用@typescript eslint/eslint插件中与prettier冲突的eslint规则
    // 'plugin:prettier/recommended', // 启用eslint插件Pretter和eslint配置Pretier。这将显示更漂亮的错误作为ESLint错误。确保这始终是Extensions数组中的最后一个配置。
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': ['error', { vars: 'all', args: 'after-used' }],
    'operator-linebreak': ['error', 'after'], //换行时运算符在行尾还是行首
    // 'space-before-function-paren': ['error', 'never'], //函数定义时括号前面要不要有空格
    'no-var': 'error',
    'array-bracket-spacing': ['error', 'never'], //是否允许非空数组里面有多余的空格
    camelcase: 'error',
    quotes: ['error', 'single'],
    'no-multiple-empty-lines': ['error', { max: 2 }], //空行最多不能超过2行
    'no-trailing-spaces': 'error', //一行结束后面不要有空格
    indent: ['error', 2], //缩进
    'arrow-parens': ['error', 'as-needed'],
    // vue文件每行最大属性数
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
          allowFirstLine: true
        },
        multiline: {
          max: 1,
          allowFirstLine: false
        }
      }
    ],
    'vue/html-self-closing': [
      // 标签是否自关闭
      'error',
      {
        html: {
          void: 'always',
          normal: 'never'
          // 'component': 'always' // 不需要设置则注释
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
      }
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/singleline-html-element-content-newline': [
      'error',
      {
        ignoreWhenNoAttributes: true,
        ignoreWhenEmpty: true,
        ignores: ['pre', 'textarea', ...INLINE_ELEMENTS]
      }
    ],
    'vue/attribute-hyphenation': [
      'error',
      'always' | 'never',
      {
        ignore: []
      }
    ]
  }
}
