// @ts-check
import stylistic from '@stylistic/eslint-plugin';
// @ts-ignore
import pluginVue from 'eslint-plugin-vue';
import vueEslintParser from 'vue-eslint-parser';
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt([
  {
    plugins: {
      '@stylistic': stylistic,
    },
  },
  stylistic.configs['recommended-flat'],
  ...pluginVue.configs['flat/recommended'],
  {
    languageOptions: {
      parser: vueEslintParser,
    },
  },
  {
    rules: {
      'no-console': 'off',
      '@vue/no-v-html': 'off',
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/component-definition-name-casing': ['error', 'kebab-case'],
      'vue/custom-event-name-casing': ['warn', 'kebab-case', {
      // Допускаем двоеточия и тире "abc:def", "abc-def:ghi-jkl"
        ignores: ['/^[a-z]+(?:-[a-z]+)*:[a-z]+(?:-[a-z]+)*$/u'],
      }],
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/v-on-event-hyphenation': ['warn', 'always'],
      'vue/attribute-hyphenation': ['warn', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/brace-style': ['error', '1tbs'],

    // TODO: Добавить правила сортировки импортов:
    // 'simple-import-sort/imports'
    },
  },
]);
