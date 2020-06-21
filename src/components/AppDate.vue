<template>
  <span :title="timestamp | humanFriendlyDate">
    {{ timestamp | diffForHuman }}
  </span>
</template>

<script>
import moment from 'moment'
export default {
  props: {
    timestamp: {
      type: Number,
      required: true
    }
  },
  filters: {
    humanFriendlyDate (date) {
      return moment(date)
        .locale('id')
        .format('MMMM Do YYYY, h:mm:ss a')
    },
    diffForHuman (date) {
      return moment.unix(date).fromNow()
    }
  }
}
</script>

<style lang=""></style>
