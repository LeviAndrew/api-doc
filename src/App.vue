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
      src="https://image.shutterstock.com/image-photo/abstract-grunge-dark-navy-background-260nw-386723980.jpg"
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
