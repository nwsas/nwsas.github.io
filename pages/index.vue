<template lang="pug">
.index-page
  .logo
    nws-logo.ma-12(animate :width="400")
    v-icon(
      color="white"
      size="60"
    ) mdi-arrow-down-drop-circle-outline

  v-container.pa-0
    v-card.rounded-xl.ma-6.pa-6
      .text-h4 Vi bygger der behovene finnes!
      .text-body-1.my-6
        | Norwegian Web Services AS eksisterer for å bygge små og middels store nettbaserte tjenester der behov oppstår.
        | En passiv inntektsmodell, ofte i form av abonnementsløsninger, skaper maksimal verdi til minimalt vedlikehold.
      .text-body-1.mb-6
        | Vi er et litet team på tre personer med nødvendig spisskompetanse innen utvikling og markedsføring. Tjenester
        | vi har produsert og som er live i dag er&nbsp;
        a(
          href="https://www.xn--reservertsk-pgb.no/"
          target="_new"
        ) reservertsøk.no
        | .

      v-list-item.px-0(two-line)
        v-list-item-avatar.my-0.rounded-xl(size="60" tile)
          v-img(
            src="img/pontus_aurdal.jpg"
            lazy-src="https://app.iotnite.com/img/placeholder.jpg"
            alt="Pontus Aurdal"
            contain
          )
        v-list-item-content.pa-0
          v-list-item-title Pontus Edvard Aurdal
          v-list-item-subtitle Daglig leder
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Norwegian Web Services'
    }
  }
}
</script>

<style lang="stylus" scoped>
@keyframes fadein
  0%
    opacity 0
  75%
    opacity 0
  100%
    opacity 1

@keyframes promo
  0%
    transform translate(0, 0)
  100%
    transform translate(0, -12px)

.index-page
  .logo
    min-height 100vh
    position relative
    display flex
    justify-content center
    align-items center

    .v-icon
      position absolute
      bottom 34px
      left 50%
      margin-left -30px
      animation 4s ease 0s normal forwards 1 fadein, promo 1s ease-in-out infinite alternate
      -webkit-animation 4s ease 0s normal forwards 1 fadein, promo 1s ease-in-out infinite alternate

  .container
    max-width 800px

    a
      text-decoration none !important
</style>
