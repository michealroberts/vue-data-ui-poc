// Import the base Uno CSS styles:
import 'virtual:uno.css'
// Import the default Uno CSS reset styles:
import '@unocss/reset/normalize.css'
import '@unocss/reset/tailwind-compat.css'

import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
