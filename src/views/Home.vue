<template>
  <v-container fluid>
    <v-card class="mx-auto" outlined>
      <v-col cols="12">
        <v-text-field
          v-model="api.name"
          maxlength="50"
          counter
          :rules="regraText"
          label="NameApi"
          outlined
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-textarea
          v-model="api.description"
          maxlength="200"
          counter
          :rules="regraText"
          label="Description"
          outlined
          required
        ></v-textarea>
      </v-col>

      <v-col cols="12">
        <v-text-field
          v-model="api.path"
          maxlength="40"
          counter
          :rules="regraPaht"
          label="Path"
          outlined
          required
        ></v-text-field>
      </v-col>

      <v-col cols="12">
        <v-select
          v-model="api.method"
          :items="methods"
          :rules="regraText"
          label="Method"
          outlined
          required
        ></v-select>
      </v-col>
      <v-btn class="ml-4" :elevation="15"
      :disabled="validaBtn" @click="prox"
      color="primary">next</v-btn>
    </v-card>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import {
  SET_REQUIRED
  } from '../store/mutationsTypes'
export default {
  data: () => ({
    api: {
      name: 'aaa',
      description: 'bbb',
      path: '/cc',
      method: 'PUT',
    },
    regraText: [(v) => !!v || 'Item is required'],
    regraPaht: [
      v => v[0] === "/" || 'Precisa de barra',
      (v) => v.length > 1 || 'Path tem que ter pelo menos 2 caracteres contando com o /',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
  }),
  computed: {
    validaBtn() {
      return !this.api.name || !this.api.description ||
      !this.api.method || this.api.path.length < 2 || this.api.path[0] !== '/'
    },
  },
  methods: {
    ...mapMutations([SET_REQUIRED]),
    prox() {
      this[SET_REQUIRED](this.api)
      this.$router.push('/pageparameters')
    }
  }
}
</script>
