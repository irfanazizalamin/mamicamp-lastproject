<template>
  <div class="push-top col-full">
    <h1>{{ thread.title }}</h1>
    <p>
      By <a href="#" class="link-unstyled">Robin</a>, <AppDate :timestamp="thread.publishedAt"/>.
      <span
        style="float:right; margin-top: 2px;"
        class="hide-mobile text-faded text-small"
        >3 replies by 3 contributors</span
      >
    </p>
    <PostList :posts="posts" />
    <PostEditor 
      :threadId="id"
    />
  </div>
</template>

<script>
import PostList from '../components/PostList'
import PostEditor from '../components/PostEditor'
export default {
  components: {
    PostList,
    PostEditor
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    thread () {
      return this.$store.state.threads[this.$route.params.id]
    },
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(this.$store.state.posts)
        .filter(post => postIds.includes(post['.key'])
      )
    }
  }
}
</script>
