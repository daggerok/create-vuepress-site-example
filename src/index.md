---
home: false
heroImage: https://v1.vuepress.vuejs.org/hero.png
tagline: npx create-vuepress-site usage example
actionText: Quick Start →
actionLink: /guide/
features:
- title: Feature 1 Title
  details: Feature 1 Description
- title: Feature 2 Title
  details: Feature 2 Description
- title: Feature 3 Title
  details: Feature 3 Description
footer: Made by Maksim Kostromin with ❤️
---

# index

<!--
<pre style="background: transparent">
  $paginations: {{ $paginations }}
</pre>

---
-->

<ul>
  <li v-for="post in $allPostsInDescendingOrder">
    <router-link :to="post.path" :key="post.sortBy">{{ post.title }}</router-link>
  </li>
</ul>

<style>
  ul {
    list-style-type: none;
    padding: 0;
  }
</style>

<!--
<pre style="background: transparent">
  posts: {{ $allPostsInDescendingOrder }}
</pre>
-->

---

Inline vue counter component:

<span>
<button @click="increment()">increment {{ counter }}</button>
</span>

<script>
export default {
  data () {
    return {
      counter: 0,
    };
  },
  methods: {
    increment() {
      this.counter++;
    }
  },
}
</script>
