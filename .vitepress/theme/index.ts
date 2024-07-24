// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'

import './style.css'

import CustomLayout from './layouts/CustomLayout.vue'
import Mermaid from './components/Mermaid.vue'

import TestComponent from './components/TestComponent.vue'
import Bug from './components/Bug.vue'
import BugList from './components/BugList.vue'
import Xkcd from './components/Xkcd.vue'

// import StartLayout from './layouts/StartLayout.vue'
// import Gallery from './components/Gallery.vue'
// import Figure from './components/Figure.vue'
import './style.css'

export default {
    extends: DefaultTheme,
    Layout: CustomLayout,
    enhanceApp({ app, router, siteData }) {
        app.component( 'Mermaid', Mermaid )
        app.component( 'TestComponent', TestComponent)
        app.component( 'Bug', Bug)
        app.component( 'BugList', BugList)
        app.component( 'Xkcd', Xkcd)
        // app.component( 'start', StartLayout )
        // app.component( 'Gallery', Gallery )
        // app.component( 'Figure', Figure )
    }
} satisfies Theme