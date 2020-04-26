<template>
  <div id="app">
    temp nav... <router-link to="/recipe/quarantine-banana-bread">to banana bread</router-link> or <router-link to="/recipe/chicken-soup">to chicken soop</router-link>
    <ListMain />
    <ListBar />
    <ContentMain />
    <ContentBar />
  </div>
</template>

<script>
import ContentBar from '@/views/ContentBar'
import ContentMain from '@/views/ContentMain'
import ListBar from '@/views/ListBar'
import ListMain from '@/views/ListMain'

export default {
  components: {
    ContentBar,
    ContentMain,
    ListBar,
    ListMain
  }
}
</script>
