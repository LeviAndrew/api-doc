<template>
    <v-container fluid>
        <v-card class="mx-auto mt-3 mb-3" color="grey" max-width="1400" outlined>
            <model-parameters
                title="Header"
                arrayName="headers"
                :items="headers"
                @addItem="addItem"
                @delItens="delItens"
                class="mx-auto mb-3"/>
            <model-parameters
                title="Params"
                arrayName="params"
                :items="params"
                @addItem="addItem"
                @delItens="delItens"
                class="mx-auto mb-3"/>
            <model-parameters
                title="Query"
                arrayName="query"
                :items="query"
                @addItem="addItem"
                @delItens="delItens"
                class="mx-auto mb-3"/>

            <!--<model-parameters 
                v-if="apiData.method === 'PUT' || apiData.method === 'POST'"
                title="Body"
                arrayName="body"
                :items="body"
                @addItem="addItem"
                @delItens="delItens"/>-->
            <model-body
                title="Body"
                arrayName="body"
                :items="body"
                @addItem="addItem"
                @delItens="delItens"
                class="mx-auto mb-3"/>
        </v-card>
    </v-container>
</template>

<script>
import ModelParameters from '../components/ModelParameters.vue'
import ModelBody from '../components/ModelBody.vue'
import { mapMutations } from 'vuex'
import {mapState} from 'vuex'
export default {
    name: "PageParameters",
    components: {
        ModelParameters,
        ModelBody,
    },
    data: () => ({
        headers: [],
        params: [],
        query: [],
        body: [],
    }),
    computed: {
        ...mapState({
            apiData: state=> state.pageOne.api,
        }),
    },
    methods: {
        addItem (eventData) {
            console.log('addItem no pai', eventData);
            this[eventData.arrayName].push(eventData.data);
        },
        delItens (eventData) {
            this[eventData.arrayName].splice(eventData.data, 1)
        },
    }                
}
</script>