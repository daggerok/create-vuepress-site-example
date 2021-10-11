# @vuepress/plugin-blog usage [![CI](https://github.com/daggerok/create-vuepress-site-example/actions/workflows/github-pages.yaml/badge.svg)](https://github.com/daggerok/create-vuepress-site-example/actions/workflows/github-pages.yaml)
This repository contains my findings of how to configure and use VuePress 1.x blog plugin...

* create project
  ```bash
  npx create-vuepress-site
  mv docs create-vuepress-site-example && cd $_
  npm i -ED @vuepress/plugin-blog natural-compare-lite
  ```
* create posts
  ```bash
  mkdir -p src/_posts/
  mv src/index.md src/_posts/
  mv src/config/README.md src/_posts/config-README.md
  mv src/guide/README.md src/_posts/guide-README.md  
  mv src/guide/using-vue.md src/_posts/guide-using-vue.md
  ```
* configure `@vuepress/plugin-blog`
  ```bash
  vi src/.vuepress/config.js
  ```
  ```js
  /*
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
  },
  */
  ```
  ```js
  /*
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
  */
  ```
  ```js
  plugins: [
    ["@vuepress/blog", {
      directories: [
        {
          id: 'post', // Unique ID of current classification
          dirname: '_posts', // Target directory
          path: '/post/', // Posts context path
          itemPermalink: '/post/:year/:month/:day/:slug', // Requires if path is not '/'
        },
      ],
    }],
  ]
  ```
  * update app enhancer to list and link all posts
  ```js
  import naturalCompare from 'natural-compare-lite';
      
  export default ({ Vue }) => {
    Vue.mixin({
      computed: { 
        $allPostsInDescendingOrder() {
          return this.$site.pages
                     .filter(p => p.path.indexOf('/post/') === 0)
                     .map(({ title, path }) => ({ title, path, sortBy: path.replace('/post/', '/') }))
                     .filter(p => p.sortBy.length > 1)
                     .sort((a, b) => naturalCompare(b.sortBy, a.sortBy))
        },
      },
    });
  }
  ```
* TODO: tags, pagination, etc...

## links
* [Sort JavaScript arrays in natural order](https://github.com/litejs/natural-compare-lite)
* [VuePress getting started guide](https://vuepress-plugin-blog.billyyyyy3320.com/guide/getting-started.html#getting-started)
* [Example of an app enhancer](https://github.com/tolking/vuepress-plugin-blog-multidir/blob/master/enhanceAppFile.js#L85)
* [My vuepress-plugin-blog GitHub issue with a questions](https://github.com/vuepress/vuepress-plugin-blog/issues/123)
