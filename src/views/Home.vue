<template lang="pug">
v-layout
  v-row(
    align="center"
    justify="center"
  )
    nws-logo(animate :width="400")
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
