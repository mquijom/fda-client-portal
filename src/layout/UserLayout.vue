<template>
<v-app>
    <v-navigation-drawer app :mini-variant="mini" width="250">
      <v-toolbar dark style='height: 100px; background: linear-gradient(45deg, #43A047 0%, #1de9b6 100%)'>
        <v-list class="pa-0">
          <v-list-tile  class="pa-1" avatar style=" height: 100px; background:url('https://pixinvent.com/free-materialize-material-design-admin-template/images/gallary/7.png') no-repeat center center">
            <v-list-tile-avatar>
              <img src="http://i.pravatar.cc/300">
            </v-list-tile-avatar>
            <v-spacer></v-spacer>
            <v-list-tile-content>
              <v-list-tile-title >John Leider</v-list-tile-title>
              <v-list-tile-sub-title>Administrator</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile @click="" class="ma-1">
          <v-list-tile-action>
            <v-icon color="success">dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="subheading font-weight-light">Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="ma-1">
          <v-list-tile-action>
            <v-icon color="success">card_membership</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="subheading font-weight-light">Licenses</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="ma-1">
          <v-list-tile-action>
            <v-icon color="success">book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="subheading font-weight-light">Certificates</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile class="ma-1">
          <v-list-tile-action>
            <v-icon color="success">far fa-credit-card</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="subheading font-weight-light">Payments</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
      </v-list>
    </v-navigation-drawer>
  <v-toolbar app dark
      style='background: linear-gradient(45deg, #43A047 0%, #1de9b6 100%); box-shadow: 0 6px 20px 0 rgba(77, 182, 172, 0.5)'>
    <v-btn icon color="rgba(0, 0, 0, 0.18)" @click.stop='mini = !mini'>
      <v-icon v-if='mini'>menu</v-icon>
      <v-icon v-else>chevron_left</v-icon>
    </v-btn>
    <span class="title font-weight-light">FDA Client Portal</span>
    <v-spacer></v-spacer>
    <v-btn icon >
      <v-icon small> far fa-bell</v-icon>
    </v-btn>
    <v-btn icon><v-avatar
      size="40"
    >
      <img src="http://i.pravatar.cc/200" alt="alt">
    </v-avatar></v-btn>
    <v-btn icon >
      <v-icon small>fas fa-indent</v-icon>
    </v-btn>
    
  </v-toolbar>
  <v-content>
    <v-container fluid>
      <router-view></router-view>
    </v-container>
  </v-content>
  <v-footer app  dark class="pa-1" style='background: linear-gradient(45deg, #43A047 0%, #1de9b6 100%)'>
    <v-spacer></v-spacer>
    <span class="caption">2019</span>
  </v-footer>
</v-app>
</template>

<script>
export default {
  //#########################
  // variables
  //#########################
  data(){
    return{
      mini:false
    }
  },
  //#########################
  // init
  //#########################
  created(){

  },
  //#########################
  // methods
  //#########################
  methods:{

  }
  //#########################
  // computed
  //#########################

}
</script>

<style>
</style>
