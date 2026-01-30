import antfu from '@antfu/eslint-config'

export default antfu(
  {
    formatters: true,
    react: true,
    astro: true,
    rules: {
      // Bug for false-positives
      // See https://github.com/facebook/react/issues/34775
      // @TODO Enable again after it has been fixed
      'react-hooks/refs': 'off',
      'react-refresh/only-export-components': 'off',
    },
  },
)
