// @ts-check
/// <reference path="node_modules/@prettier/plugin-pug/src/prettier.d.ts" />

/**
 * @type {import('prettier').Options}
 */
module.exports = {
  plugins: [
    require.resolve('@prettier/plugin-pug'),
    require.resolve('prettier-plugin-organize-imports'),
  ],

  singleQuote: true,
  trailingComma: 'all',

  pugSingleQuote: false,
  pugSortAttributes: 'asc',
  pugSortAttributesBeginning: [
    '^v-if$',
    '^v-else-if$',
    '^v-else$',
    '^v-for$',
    '^:is$',
    '^:key$',
    '^v-on$',
    '^v-bind$',
    '^ref$',
    '^v-model',
    '^name$',
    '^:?type$',
    '^:value$',
    '^:?label$',
    '^:?src$',

    // QTable
    '^:title$',
    '^:columns$',
    '^:rows$',
    '^:?row-key$',
    '^v-model:pagination$',
    '^:loading$',
  ],
  pugSortAttributesEnd: ['^@click', '^@'],
};
