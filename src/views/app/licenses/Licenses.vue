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
                    :items="licenses"
                    class="elevation-1"
                >
                    <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-right">{{ props.item.calories }}</td>
                    <td class="text-xs-right">{{ props.item.fat }}</td>
                    <td class="text-xs-right">{{ props.item.carbs }}</td>
                    <td class="text-xs-right">{{ props.item.protein }}</td>
                    <td class="text-xs-right">{{ props.item.iron }}</td>
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
          { text: 'Case No', value: 'name'},
          { text: 'License No', value: 'calories' },
          { text: 'Type', value: 'fat' },
          { text: 'Task', value: 'carbs' },
          { text: 'Application Date', value: 'protein' },
          { text: 'Variation Date', value: 'iron' }
        ],
        licenses: []
      }
    },
    created(){

    },
    methods:{
        init(){
            // this.
        },
        apply(){
            this.$router.push('/app/licenses/apply')
        }
    }
  }
</script>

<style>

</style>
