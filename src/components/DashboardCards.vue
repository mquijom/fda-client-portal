<template>
    <v-layout row wrap>
  <v-flex xs12 sm12 md6 lg3 pa-3>
    <v-card dark :style="style">
    <v-card-title primary-title>
      <v-avatar
        size="50"
        color="rgba(0, 0, 0, 0.18)"
      >
       <v-icon >{{icon}}</v-icon>       
      </v-avatar>
      <v-spacer></v-spacer>
      <h3 class="headline font-weight-light">{{title}}</h3>
      
    </v-card-title>
    <v-card-text>
      <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs6>
            <h4 class="subheading">{{description}}</h4>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs6 style="text-align: right">
            <span class="subheading">{{details}}</span>
          </v-flex>
        </v-layout>
      
    </v-card-text>
  </v-card>
  </v-flex>
</v-layout>
</template>

<script>
export default {
    props:['icon', 'title', 'description','details', 'color'],
    computed:{
        style(){
            if(this.color==='error'){
                return 'background:linear-gradient(45deg, #FF5252 0%, #f48fb1 100%); box-shadow: 0 6px 20px 0 rgba(244, 143, 177, 0.5); '
            }else if(this.color==='warning'){
                return 'background: linear-gradient(45deg, #ff6f00 0%, #ffca28 100%); box-shadow: 0 6px 20px 0 rgba(255, 111, 0, 0.3) '
            }else if(this.color==='success'){
                return 'background: linear-gradient(45deg, #43A047 0%, #1de9b6 100%); box-shadow: 0 6px 20px 0 rgba(77, 182, 172, 0.5)'            
            }else{
                return 'background:linear-gradient(45deg, #0288d1 0%, #26c6da 100%); box-shadow:0 6px 20px 0 rgba(38, 198, 218, 0.5)'
            }
        }
    }
}
</script>

<style>

</style>
