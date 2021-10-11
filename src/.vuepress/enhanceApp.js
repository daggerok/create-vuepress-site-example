/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */

// import paginations from '@dynamic/vuepress_blog/paginations';
import naturalCompare from 'natural-compare-lite/index';

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer,
}) => {
  Vue.mixin({
    computed: {
      // $paginations() {
      //   return paginations;
      // },
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
