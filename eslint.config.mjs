// @ts-check
import stylistic from '@stylistic/eslint-plugin';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  {
    plugins: {
      '@stylistic': stylistic,
    },
  },
  stylistic.configs['recommended-flat'],
  {
    rules: {
      'no-console': 'off',
      'vue/no-v-html': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/component-definition-name-casing': ['error', 'kebab-case'],
      'vue/custom-event-name-casing': ['warn', 'kebab-case', {
      // Допускаем двоеточия и тире "abc:def", "abc-def:ghi-jkl"
        ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'],
      }],
      'vue/v-on-event-hyphenation': ['warn', 'always'],
      'vue/attribute-hyphenation': ['warn', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],

    // TODO: Добавить правила сортировки импортов:
    // 'simple-import-sort/imports'
    },
  },
]);
