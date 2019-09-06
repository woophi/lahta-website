<template>
  <div class="locale-changer">
    <div @click="changeLang('en')">en</div>
    <div @click="changeLang('ru')">ru</div>
  </div>
</template>

<script>
export default {
  data() {
    return { langs: ['ru', 'en'] };
  },

  methods: {
    changeLang(languageToChange) {
      const curLng = this.$i18n.locale;
      if (
        curLng !== languageToChange &&
        this.langs.find(ln => ln === languageToChange)
      ) {
        this.$i18n.locale = languageToChange;
      }
    }
  }

};
</script>

<style lang="stylus" scoped>

.locale-changer
  position absolute
  display flex

</style>
