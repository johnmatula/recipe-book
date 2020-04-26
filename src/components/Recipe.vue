<template>
  <div class="recipe">
    <h1>{{ recipe.title }}?</h1>
    <p>{{ recipe.id }}</p>
    <p>{{ recipe.description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: {}
    }
  },
  created() {
    this.recipe = this.updateRecipeOrRedirect(this.$route.params.id)
  },
  watch: {
    $route() {
      this.recipe = this.updateRecipeOrRedirect(this.$route.params.id)
    }
  },
  methods: {
    updateRecipeOrRedirect(id) {
      return this.$store.getters.getRecipeById(id) || this.$router.push("/")
    }
  },
  name: 'Recipe',
}
</script>
