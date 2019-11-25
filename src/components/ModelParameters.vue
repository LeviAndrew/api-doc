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
                            <v-dialog v-model="dialog" max-width="500px">
                                <v-card>
                                    <v-card-text>
                                    <v-text-field v-model="dialogData.chave" label="Chave" required></v-text-field>
                                    <v-text-field v-model="dialogData.valor" label="Valor" required></v-text-field>

                                    </v-card-text>

                                    <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn text color="primary" @click="addItens" :disabled="validaBtn">Save</v-btn>
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
                                        <td>{{ item.valor }}</td>
                                        <v-btn text icon color="red"
                                            @click="delItens(index)"
                                        >
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
    </v-row>
</template>

<script>
export default {
    name: "ModelParameters",
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
        }
    },
    data: () => ({
        dialog: false,
        dialogData: {
            chave: '',
            valor: '',
        },
    }),
    computed: {
        validaBtn () {
            return !this.dialogData.chave || !this.dialogData.valor
        }
    },
    methods: {
        addItens () {
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
                data:index
            });
        }
    }
}
</script>