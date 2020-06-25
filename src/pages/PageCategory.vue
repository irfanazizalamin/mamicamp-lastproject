<template>
    <div class="col-full">
        <h1>{{ category.name }}</h1>
        <CategoryListItem :category="category" />
    </div>
</template>

<script>
import sourceData from '@/data'
import CategoryListItem from '@/components/CategoryListItem'
export default {
  components: {
    CategoryListItem
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    category () {
      return sourceData.categories[this.id]
    }
    // forums () {
    //   return Object.values(sourceData.forums)
    //     .filter(forum => forum.categoryId === this.category['.key'])
    // }
  }
}
</script>