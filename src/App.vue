<template>
  <v-app>
    <v-app-bar
      app
      color="primary">
      <div class="d-flex align-center">
        <h1><strong> API - DOC </strong></h1>
      </div>
    </v-app-bar>
    <v-content>
      <v-navigation-drawer
      src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      width="100%"
      permanent
      >
        <router-view/>
      </v-navigation-drawer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
