/*****************************************************************************************************************/

// @author         Michael Roberts <michael@observerly.com>
// @package        @observerly/turborepo-vite-template
// @license        Copyright © 2021-2023 observerly

/*****************************************************************************************************************/

import { defineConfig } from 'unocss'

/*****************************************************************************************************************/

// https://unocss.dev/config/
export default defineConfig({
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        'src/**/*.{vue,html,js,jsx,ts,tsx}'
      ],
      exclude: ['node_modules']
    }
  }
})

/*****************************************************************************************************************/
