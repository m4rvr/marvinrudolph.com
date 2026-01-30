import { writeFile } from 'node:fs/promises'
import process from 'node:process'

// Only create .npmrc file in CI as we get the token locally from the global .npmrc file
if (process.env.CI) {
  writeFile(
    '.npmrc',
    // eslint-disable-next-line no-template-curly-in-string
    '@hugeicons-pro:registry=https://npm.hugeicons.com/\n//npm.hugeicons.com/:_authToken=${HUGEICONS_PRO_AUTH_TOKEN}',
    'utf-8',
  )
}
