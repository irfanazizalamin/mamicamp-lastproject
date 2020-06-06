<template>
  <div class="post-list">
      <!-- <div v-for="post in posts" :key="post['.key']">
          {{post}}
      </div> -->
    <PostListItem 
      v-for="post in posts" 
      :post="post" 
      :key="post['.key']" 
    />
  </div>
</template>

<script>
import PostListItem from './PostListItem'
export default {
  components: {
    PostListItem
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>
