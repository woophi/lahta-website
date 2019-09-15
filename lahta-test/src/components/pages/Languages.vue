<template>
  <div class="locale-changer">
    <img class="ru" :src="ru" @click="changeLang('ru')" alt="russian" :style="selectedLang === 'ru' ? selectedBtn : {}" />
    <img class="en" :src="en" @click="changeLang('en')" alt="english" :style="selectedLang === 'en' ? selectedBtn : {}" />
  </div>
</template>

<script>
import ru from '@/assets/ru.svg';
import en from '@/assets/en.svg';

export default {
  data() {
    return {
      langs: ['ru', 'en'],
      ru,
      en,
      selectedLang: this.$i18n.locale,
      selectedBtn: {
        borderBottom: '2px solid #0e9641 !important',
        transition: '.2s ease'
      }
    };
  },

  methods: {
    changeLang(languageToChange) {
      const curLng = this.$i18n.locale;
      if (
        curLng !== languageToChange &&
        this.langs.find(ln => ln === languageToChange)
      ) {
        this.$i18n.locale = languageToChange;
        this.selectedLang = languageToChange;
        this.setCookie('lahta_lng', languageToChange, 10);
      }
    },
    setCookie(cname, cvalue, exdays) {
      const d = new Date();
      d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
      const expires = `expires=${d.toUTCString()}`;
      document.cookie = `${cname}=${cvalue};${expires};path=/`;
    },
  }

};
</script>

<style lang="stylus" scoped>

.locale-changer
  position absolute
  display flex
  top 1rem
.ru
  width 25px
  margin-right .5rem
  cursor pointer
.en
  width 25px
  cursor pointer

</style>
