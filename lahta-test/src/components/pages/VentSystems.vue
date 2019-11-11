<template>
  <div v-if="goTo !== null">
    <header class="main-header">
      <div class="main-title">
        <h1 class="main-title-header">{{ $t("vent.main.title") }}</h1>
        <p class="main-title-subheader">{{ $t("companyLahtaEng") }}</p>
        <div>
          <a href="tel:+78122402142">
            <v-btn flat>
              <v-icon>fa-phone</v-icon>&nbsp;
              +7 (812) 240-21-42
            </v-btn>
          </a>
        </div>
      </div>
      <div class="main-card-flex">
        <div class="main-card">
          <p>
            <v-icon class="mr-2">fa-arrow-circle-o-right</v-icon>{{ $t("vent.main.side.vent") }}
          </p>
          <p>
            <v-icon class="mr-2">fa-arrow-circle-o-right</v-icon>{{ $t("vent.main.side.cond") }}
          </p>
          <p>
            <v-icon class="mr-2">fa-arrow-circle-o-right</v-icon>{{ $t("vent.main.side.warm") }}
          </p>
          <p>
            <v-icon class="mr-2">fa-arrow-circle-o-right</v-icon>{{ $t("vent.main.side.water") }}
          </p>
          <p>
            <v-icon class="mr-2">fa-arrow-circle-o-right</v-icon>{{ $t("vent.main.side.autom") }}
          </p>
        </div>
      </div>
    </header>

    <nav class="navigation">
      <router-link to="/vent" exact>
        <v-btn color="info" :outline="(routerPath !== '/vent')">
          <v-icon>fa-home</v-icon>&nbsp;
          {{ $t("vent.main.topBar.home") }}
        </v-btn>
      </router-link>
      <router-link to="/vent/about" exact>
        <v-btn :outline="(routerPath !== '/vent/about')" color="info">
          <v-icon>fa-bank</v-icon>&nbsp;
          {{ $t("vent.main.topBar.about") }}
        </v-btn>
      </router-link>
      <router-link to="/vent/services">
        <v-btn :outline="(routerPath !== '/vent/services')" color="info">
          <v-icon>fa-diamond</v-icon>&nbsp;
          {{ $t("vent.main.topBar.services") }}
        </v-btn>
      </router-link>
      <router-link to="/vent/buildings">
        <v-btn :outline="(routerPath !== '/vent/buildings')" color="info">
          <v-icon>fa-building</v-icon>&nbsp;
          {{ $t("vent.main.topBar.objects") }}
        </v-btn>
      </router-link>
      <router-link to="/vent/licences">
        <v-btn :outline="(routerPath !== '/vent/licences')" color="info">
          <v-icon>fa-book</v-icon>&nbsp;
          {{ $t("vent.main.topBar.licences") }}
        </v-btn>
      </router-link>
      <router-link to="/vent/contacts">
        <v-btn :outline="(routerPath !== '/vent/contacts')" color="info">
          <v-icon>fa-pencil-square</v-icon>&nbsp;
          {{ $t("vent.main.topBar.contacts") }}
        </v-btn>
      </router-link>
    </nav>
    <main class="super-height">
      <router-view></router-view>
    </main>
    <v-footer class="pa-3" color="grey darken-4">
      <v-spacer></v-spacer>
      <div class="main-footer">
        <b>ОГРН</b> 1147847436736
        <b>ИНН</b> 7811598377
        <b>КПП</b>
        781101001
        © {{ $t("companyLahtaEng") }} {{ new Date().getFullYear() }}
        {{ $t("footer.developedBy") }}
        <b>
          <u>
            <a
              href="http://km-webstudio.xyz/contact.html"
              target="_blank"
              rel="nofollow noopener"
            >{{ $t("footer.KM") }}</a>
          </u>
        </b>
      </div>
    </v-footer>
  </div>
  <div v-else>
    <router-view></router-view>
  </div>
</template>

<script>
import router from '../../router';

export default {
  props: ['changeGoto', 'goTo'],
  data() {
    return {
      routerPath: router.currentRoute.path,
      outline: true
    };
  },
  beforeUpdate() {
    this.routerPath = router.currentRoute.path;
    if (router.currentRoute.path === '/') {
      this.changeGoto(null);
    }
  },
  updated() {
    if (
      this.goTo === 'vent' &&
      router.currentRoute.path.indexOf('raw') !== -1
    ) {
      this.changeGoto('raw');
    } else if (
      this.goTo === 'raw' &&
      router.currentRoute.path.indexOf('vent') !== -1
    ) {
      this.changeGoto('vent');
    }
  },
};
</script>

<style>
</style>
