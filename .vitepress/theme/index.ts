// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './style.css'

import CustomLayout from './layouts/CustomLayout.vue'
import Mermaid from './components/Mermaid.vue'

import TestComponent from './components/TestComponent.vue'
import Bug from './components/Bug.vue'
import BugList from './components/BugList.vue'

import './style.css'

export default {
    extends: DefaultTheme,
    Layout: CustomLayout,
    enhanceApp({ app, router, siteData }) {
        app.component( 'Mermaid', Mermaid )
        app.component( 'Bug', Bug)
        app.component( 'BugList', BugList)
        // app.component( 'start', StartLayout )
        // app.component( 'Gallery', Gallery )
        // app.component( 'Figure', Figure )
    }
} satisfies Theme