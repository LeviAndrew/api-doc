<template>
    <v-row >
        <v-col cols="11">
            <v-expansion-panels inset>
            <v-expansion-panel>
                <v-expansion-panel-header>
                    <v-row>
                        <v-col cols="2">
                            <h2>{{ title }}</h2>
                        </v-col>
                        <v-col cols="8">
                            <v-dialog v-model="dialog" max-width="600px">
                                <v-card>
                                    <v-card-text>
                                        <div class="d-flex align-center" >
                                            <h2 class="mt-5 mb-3">{{ title }}</h2>
                                        </div>
                                        <v-text-field v-model="dialogData.chave" label="Chave" required></v-text-field>
                                        <v-select v-model="dialogData.type" :items="types" label="Type" required></v-select>
                                        <v-text-field v-if="dialogData.type === 'Valor'" v-model="dialogData.valor" label="Valor" required></v-text-field>
                                        <!-- <v-btn text v-if="dialogData.type === 'JSON'" color="primary" @click="addJSON" :disabled="validaBtn"><v-icon>mdi-plus</v-icon></v-btn> -->
                                        <div v-if="dialogData.type === 'JSON'">
                                            <div v-for="(x, index) in jsonArray" :key="index">
                                                <v-text-field v-model="x.key" label="Key" required></v-text-field>
                                                <v-select v-model="x.type" :items="types" label="Type" required></v-select>
                                                <v-text-field v-if="x.type === 'Valor'" v-model="x.value" label="Valor" required></v-text-field>
                                                <!-- <v-btn text v-if="x.type === 'JSON'" color="primary" @click="addJSON" :disabled="validaBtn"><v-icon>mdi-plus</v-icon></v-btn> -->
                                            </div>
                                        </div>
                                        <div v-if="dialogData.type === 'Array'">
                                            <div v-for="(y, index) in aArray" :key="index">
                                                <v-select v-model="y.type" :items="types" label="Type" required></v-select>
                                                <v-text-field v-if="y.type === 'Valor'" v-model="y.value" label="Valor" required></v-text-field>
                                                <!-- <v-btn text v-if="x.type === 'JSON'" color="primary" @click="addJSON" :disabled="validaBtn"><v-icon>mdi-plus</v-icon></v-btn> -->
                                            </div>
                                        </div>

                                    </v-card-text>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                        <v-btn text v-if="dialogData.type === 'JSON'" color="primary" @click="addJSON" :disabled="validaBtn"><v-icon>mdi-plus</v-icon></v-btn>
                                        <v-btn text v-if="dialogData.type === 'Array'" color="primary" @click="addArray" :disabled="validaBtn"><v-icon>mdi-plus</v-icon></v-btn>
                                        <v-btn text color="primary" @click="addItens" :disabled="validaBtn">Confirmar</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>                
                        </v-col>
                    </v-row>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div>
                        <v-simple-table dense :height="150">
                            <template>
                                <thead>
                                    <tr>
                                        <th class="text-left"><h2><strong>Chave</strong></h2></th>
                                        <th class="text-left"><h2><strong>Valor</strong></h2></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in items" :key="index">
                                        <td>{{ item.chave }}</td>
                                        <td v-if="Array.isArray(item.valor)">
                                          <v-btn text color="blue" @click="showDialogJson(item.valor)">
                                            <strong>JSON</strong>
                                          </v-btn>
                                        </td>
                                        <td v-else-if="Array.isArray(item.valor)">
                                          <v-btn text color="blue" @click="showDialogArray(item.valor)">
                                            <strong>Array</strong>
                                          </v-btn>
                                        </td>
                                        <td v-else>{{ item.valor }}</td>
                                        <v-btn text icon color="red" @click="delItens(index)">
                                            <v-icon>mdi-delete</v-icon>
                                        </v-btn>
                                    </tr>
                                </tbody>
                            </template>
                        </v-simple-table>
                    </div>
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
        <v-col cols="1" align-self="center">
            <v-btn fab color="primary" :elevation="15"
                max-height="35" max-width="35"
                @click="dialog = !dialog">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-col>
        <v-dialog v-model="dialogJason" max-width="600px">
          <v-card>
            <v-card-text>
              <div class="d-flex align-center">
                {{ jsonToShow }}
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogArray" max-width="600px">
          <v-card>
            <v-card-text>
              <div class="d-flex align-center">
                {{ arrayToShow }}
              </div>
            </v-card-text>
          </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    name: "ModelBody",
    props: {
        title: {
            type: String,
            default: "Sem titulo",
        },
        items: {
            type: Array,
            default: ()=> []
        },
        arrayName: {
            type: String,
            required: true,
        },
        testArray: {
            type: Array,
            default: ()=> []
        }
    },
    data: () => ({
        dialog: false,
        dialogJason: false,
        dialogArray: false,
        jsonToShow: [],
        arrayToShow: [],
        dialogData: {
            chave: '',
            valor: '',
            type: 'JSON',
        },
        types: ['Valor', 'JSON', 'Array'],
        jsonArray: [],
        aArray: [],
    }),
    computed: {
        validaBtn () {
            return !this.dialogData.chave || !this.dialogData.type
        },
        validaType () {
            return !this.dialogData.type
        }
    },
    methods: {
        addItens () {
          if(this.dialogData.type === "JSON"){
            this.dialogData.valor = this.jsonArray;
            this.jsonArray = [];
          }
          if(this.dialogData.type === "Array"){
            this.dialogData.valor = this.aArray;
            this.aArray = [];
          }
          this.$emit("addItem", {
              arrayName: this.arrayName,
              data: this.dialogData,
          });
          this.dialogData = { chave: '', valor: '' }
          this.dialog = false
        },
        delItens (index) {
            // this.ListaParameter.splice(index, 1)
            this.$emit("delItens", {
                arrayName: this.arrayName,
                data:index,
                jsonArray: index,
                aArray: index
            });
        },
        addJSON () {
            this.jsonArray.push({
                key: '',
                type: '',
                value: '',
            })
        },
        addArray () {
            this.aArray.push({
                type: '',
                value: '',
            })
        },
        showDialogJson(valorParaMostrar){
          this.jsonToShow = valorParaMostrar;
          this.dialogJason = true;
        },
        showDialogArray(mostrarValor){
          this.jsonToShow = mostrarValor;
          this.dialogArray = true;
        },
    }
}
</script>