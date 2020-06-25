<template>
  <div class="forum-list">
    <ForumListItem 
      v-for="forum in forums"
      :forum="forum"
      :key="forum['.key']"/>
  </div>
</template>

<script>
import ForumListItem from './ForumListItem'
export default {
  props: {
    forums: {
      type: Array,
      required: true
    }
  },
  components: {
    ForumListItem
  }
}
</script>