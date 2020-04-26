import Vue from 'vue'
import Vuex from 'vuex'

const recipes = require.context("@/store/recipes",true,/.*\.json/i)

console.log(recipes.keys())

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({
    recipes: {}
  }),
  getters: {
    getRecipeById: (state) => (id) => {
      return state.recipes[id] || null
    }
  },
  mutations: {
    ADD_RECIPE(state, recipe) {
      if(state.recipes[recipe.id]) {
        console.warn("Recipe “" + recipe.id + "” already exists.");
      }
      state.recipes[recipe.id] = recipe
    }
  },
  actions: {
    addRecipes({ commit }) {
      for (var i = 0; i < recipes.keys().length; ++i) {
        commit("ADD_RECIPE", require("./recipes/" + recipes.keys()[i].replace(/^\.\//,"")))
      }
    }
  },
  modules: {
  }
})
