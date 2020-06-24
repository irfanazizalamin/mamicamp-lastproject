<template>
  <div class="col-large push-top">
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
      @save="addPost" 
      :threadId="id"
    />
  </div>
</template>

<script>
import sourceData from '@/data'
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
  data () {
    return {
      thread: sourceData.threads[this.$route.params.id]
    }
  },
  computed: {
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(sourceData.posts)
        .filter(post => postIds.includes(post['.key'])
      )
    }
  },
  methods: {
    addPost ({post}) {
      const postId = post['.key']
      // Vue.set(obj, propertyName, value)
      this.$set(sourceData.posts, postId, post) // sourceData.posts[postId] = post
      this.$set(this.thread.posts, postId, postId) // this.thread.posts[postId] = postId
      this.$set(sourceData.users[post.userId].posts, postId, postId)
    }
  }
}
</script>
