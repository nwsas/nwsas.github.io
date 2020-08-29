<template lang="pug">
v-app
  v-main
    v-container(fluid fill-height)
      router-view
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
.v-application
  .container
    background #517bc2
</style>
