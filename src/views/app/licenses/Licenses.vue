<template>
    <v-layout row wrap>
        <v-flex xs12 p1-2>
           <v-card>
               <v-btn
                    fab
                    small                    
                    color="primary"
                    top
                    right
                    absolute        
                    @click.native.stop="apply"
                >
                    <v-icon>edit</v-icon>
                </v-btn>
                <v-data-table
                    :headers="headers"
                    :items="$store.state.licenses.licenses"
                    class="elevation-1"
                >
                    <template slot="items" slot-scope="props">
                    <td>{{ props.item.case_no }}</td>
                    <td>{{ props.item.case_no }}</td>
                    <td>{{ props.item.application_type }}</td>
                    <td>{{ props.item.current_task }}</td>
                    <td>{{ props.item.date_created }}</td>
                    <td>{{ props.item.date_variation }}</td>
                    <td>
                        <v-layout row wrap>
                            <v-flex xs6>
                                <v-btn flat icon color="primary">
                                    <v-icon small>edit</v-icon>
                                </v-btn>
                            </v-flex>
                            <v-flex xs6>
                                <v-btn flat icon color="primary">
                                    <v-icon small>search</v-icon>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </td>
                    </template>
                </v-data-table>
           </v-card>
        </v-flex>
        
    </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Case No', value: 'case_no'},
          { text: 'License No', value: 'case_no' },
          { text: 'Type', value: 'application_type' },
          { text: 'Task', value: 'current_task' },
          { text: 'Application Date', value: 'date_created' },
          { text: 'Variation Date', value: 'date_variation' },
          { text: 'Actions', value: '' }
        ],
        licenses: []
      }
    },
    created(){
        this.init()
    },
    methods:{
        init(){
            this.$store.dispatch('SET_LICENSES');
        },
        apply(){
            this.$router.push('/app/licenses/apply')
        }
    }
  }
</script>

<style>

</style>
