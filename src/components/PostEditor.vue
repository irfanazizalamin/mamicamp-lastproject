<template>
  <div>
    <form @submit.prevent="save">
      <div class="form-group">
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          class="form-input"
          v-model="postText"
        ></textarea>
      </div>
      <div class="form-action">
        <button class="btn-blue">Submit post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    threadId: {
      required: true
    }
  },
  data () {
    return {
      postText: ''
    }
  },
  methods: {
    save () {
      const post = {
        text: this.postText,
        threadId: this.threadId
      }
      this.postText = ''

      // this.$emit('save', { post })
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>
