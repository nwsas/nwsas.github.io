<template lang="pug">
v-layout
  v-row(
    align="center"
    justify="center"
  )
    nws-logo.ma-12(animate :width="400")
</template>

<script>
import { NwsLogo } from '@/components'

export default {
  name: 'Home',
  components: {
    NwsLogo
  }
}
</script>
