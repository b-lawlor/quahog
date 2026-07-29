import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Quahog",
  description: "A chrono-synclastic infundibulum",
  lastUpdated: true,
  cleanUrls: true,
  base: '/quahog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Blog', link: '/blog' },
      { text: 'Guides', link: '/guides/' },
      { text: 'Bugs', link: '/bugs' },
    ],

    sidebar: {
      '/guides/': [
        {
          text: 'Koha Dev',
          // collapsed: true,
          items: [
            { text: 'Getting connected', link: '/guides/koha-dev/getting-connected' },
            { text: 'Installing dependencies', link: '/guides/koha-dev/installing-dependencies' },
            { text: 'Getting set up', link: '/guides/koha-dev/getting-set-up' },
            { text: 'Testing patches', link: '/guides/koha-dev/testing-patches' },
            { text: 'Finding bugs', link: '/guides/koha-dev/finding-bugs' },
            { text: 'Submiting patches', link: '/guides/koha-dev/submitting-patches' },
          ]
        }
      ],
      
    },

    footer: {
      message: '',
      copyright: 'So it goes © 2024 Brendan Lawlor'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/b-lawlor/quahog' },
    ],

    search: {
      provider: 'local'
    },

    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },

    editLink: {
      pattern: 'https://github.com/b-lawlor/quahog/edit/main/:path'
    }
  },
  
  markdown: {
    config: (md) => {
      // render ```mermaid fences as <div class="mermaid"> for Mermaid.vue to pick up
      const fence = md.renderer.rules.fence!.bind(md.renderer.rules)
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        if (token.info.trim() === 'mermaid') {
          return `<div class="mermaid">${token.content.trim()}</div>`
        }
        return fence(tokens, idx, options, env, self)
      }
    },
    languageAlias: { 
      'output': 'bash',
      'nano': 'bash' 
    }
  },

  head: [
    ['link',
      {rel: 'stylesheet', href:'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'}
    ],
    [
      'script',
      {src: 'https://unpkg.com/website-carbon-badges@1.1.3/b.min.js'},
    ],
  ]
})
