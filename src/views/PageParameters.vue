<template>
    <v-container fluid>
        <v-card class="mx-auto" max-width="1500" outlined>
            <v-row justify="center">
                <v-col cols="12">
                    <v-expansion-panels inset>
                    <v-expansion-panel>
                        <v-expansion-panel-header>
                            <v-row>
                                <v-col cols="2">
                                    <h2>Header</h2>                                    
                                </v-col>
                                <v-col cols="8">
                                    <v-btn fab color="primary" :elevation="15"
                                    max-height="35" max-width="35"
                                    @click="dialog1 = !dialog1">
                                    <v-icon>mdi-plus</v-icon>
                                    </v-btn>
                                    <v-dialog v-model="dialog1" max-width="500px">
                                        <v-card>
                                            <v-card-text>
                                            <v-text-field v-model="dialogData.chave" label="Chave" :rules="regraText" required></v-text-field>
                                            <v-text-field v-model="dialogData.valor" label="Valor" :rules="regraText" required></v-text-field>

                                            </v-card-text>

                                            <v-card-actions>
                                            <v-spacer></v-spacer>

                                            <v-btn text color="primary" @click="openDialog">Save</v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>                
                                </v-col>
                            </v-row>
                        </v-expansion-panel-header>
                        <v-expansion-panel-content>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                    </v-expansion-panels>
                </v-col>
                <v-col cols="2">
                <h2>- Parameters</h2>
                </v-col>
                <v-col cols="10">
                    <v-btn fab color="primary" max-height="35" max-width="35" :elevation="15">
                    <v-icon>mdi-plus</v-icon>
                    </v-btn>                
                </v-col>
                <v-col cols="2">
                <h2>- Query</h2>
                </v-col>
                <v-col cols="10">
                    <v-btn fab color="primary" max-height="35" max-width="35" :elevation="15">
                    <v-icon>mdi-plus</v-icon>
                    </v-btn>                
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
            <v-row v-if="apiData.method === 'PUT' || apiData.method === 'POST'">
                <v-col cols="2">
                <h2>- Body</h2>
                </v-col>
                <v-col cols="2">
                    <v-btn fab color="primary" max-height="35" max-width="35" :elevation="15">
                    <v-icon>mdi-plus</v-icon>
                    </v-btn>                
                </v-col>
                <v-spacer></v-spacer>
            </v-row>
        </v-card>
    </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
import {mapState} from 'vuex'
export default {
    
    data: () => ({
        dialog1: false,
        del1: false,
        edit1: false,
        regraText: [(v) => !!v || 'Item is required'],
        dialogData: {
            chave: '',
            valor: '',
        }
    
    }),
    computed: {
        ...mapState({
            apiData: state=> state.pageOne.api,
        }),
    },
    methods: {
        openDialog () {
            this.dialogData = { chave: '', valor: '' }
            this.dialog1 = false
        }
    }                
}
</script>