<template>
  <v-container
    fluid
  >
    <v-col cols="12">
      <v-text-field
        v-model="api.name"
        maxlength="50"
        counter
        :rules="regraText"
        label="NameApi"
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
        required
      ></v-text-field>
    </v-col>

    <v-col cols="12">
      <v-select
        v-model="api.method"
        :items="methods"
        :rules="regraText"
        label="Method"
        required
      ></v-select>
    </v-col>
    <v-btn class="ml-5" :disabled="validaBtn" @click="prox" color="primary">next</v-btn>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data: () => ({
    api: {
      name: '',
      description: '',
      path: '/',
      method: '',
    },
    regraText: [(v) => !!v || 'Item is required'],
    regraPaht: [
      v => v[0] === "/" || 'Precisa de barra',
      (v) => v.length > 1 || 'Path tem que ter pelo menos 3 caracteres contando com o /',
    ],
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
  }),
  computed: {
    validaBtn() {
      return !this.api.name || !this.api.description ||
      !this.api.method || this.api.path.length < 2
    },
  },
  methods: {
    ...mapMutations('user', ['SET_API_REQUIRED']),
    prox() {
      this['SET_API_REQUIRED'](this.api)
      this.$router.push('/pagetwo')
    }
  }
}
</script>
