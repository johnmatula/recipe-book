<template>
  <div class="recipe">
    <h1>{{ recipe.title }}?</h1>
    <p>{{ recipe.id }}</p>
    <template v-for="(node, n) in textNodes">
      <v-timer-button v-if="node.indexOf('{{') !== -1" :duration="node" :key="n"></v-timer-button>
      <template v-else>{{node}}</template>
    </template>
    <v-timer-button :duration="10" :parsed="true">hellooo</v-timer-button>
  </div>
</template>

<script>
import TimerButton from '@/components/TimerButton'
export default {
  data() {
    return {
      recipe: {}
    }
  },
  components: {
    'v-timer-button': TimerButton
  },
  created() {
    this.recipe = this.updateRecipeOrRedirect(this.$route.params.id)
  },
  watch: {
    $route() {
      this.recipe = this.updateRecipeOrRedirect(this.$route.params.id)
    }
  },
  computed: {
    textNodes() {
      return this.recipe.description.split(/({{[^}]+}})/)
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
