<template>
<v-app>
    <v-navigation-drawer app :mini-variant="mini || $vuetify.breakpoint.mdAndDown" width="250">
      <v-toolbar dark style='height: 100px; background: linear-gradient(45deg, #43A047 0%, #1de9b6 100%)'>
        <v-list class="pa-0">
          <v-list-tile  class="pa-1" avatar style=" height: 100px; background:url('https://pixinvent.com/free-materialize-material-design-admin-template/images/gallary/7.png') no-repeat center center">
            <v-list-tile-avatar class="mt-4" >
              <img src="http://i.pravatar.cc/300">
            </v-list-tile-avatar>
            <v-spacer></v-spacer>
            <v-list-tile-content class="mt-4">
              <v-list-tile-title class="body-2">abalita</v-list-tile-title>
              <v-list-tile-sub-title class="caption">Last Logged in:</v-list-tile-sub-title>
              <v-list-tile-sub-title class="caption">01/02/2019 2:19PM</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list>
        <v-list-tile @click="goTo('/app')" class="ma-1" :style="activeRoute('Dashboard')">
          <v-list-tile-action>
            <v-icon color="success">dashboard</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Dashboard</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile  @click="goTo('/app/licenses')" class="ma-1" :style="activeRoute('Licenses')">
          <v-list-tile-action>
            <v-icon color="success">card_membership</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Licenses</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile  @click="goTo('/app/certificates')" class="ma-1" :style="activeRoute('Certificates')">
          <v-list-tile-action>
            <v-icon color="success">book</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Certificates</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile  @click="goTo('/app/payments')" class="ma-1" :style="activeRoute('Payments')">
          <v-list-tile-action>
            <v-icon color="success">far fa-credit-card</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Payments</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile  @click="goTo('/app/payments')" class="ma-1" :style="activeRoute('Notifications')">
          <v-list-tile-action>
            <v-icon color="success">notifications</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Notifications</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>

        <v-list-tile  @click="goTo('/app/payments')" class="ma-1" :style="activeRoute('Notifications')">
          <v-list-tile-action>
            <v-icon color="success">far fa-user-circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">My Profile</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-list-tile  @click="goTo('/app/payments')" class="ma-1" :style="activeRoute('Notifications')">
          <v-list-tile-action>
            <v-icon color="success">lock_open</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Password Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

         <v-list-tile  @click="goTo('/app/payments')" class="ma-1" :style="activeRoute('Notifications')">
          <v-list-tile-action>
            <v-icon color="success">fas fa-sign-out-alt</v-icon>            
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="body-1 font-weight-light">Logout</v-list-tile-title>
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
    <span class="headline font-weight-light">FDA Client Portal</span>
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
  <!-- <v-content> -->
    <v-container fluid>
      <span class="headline font-weight-thin">{{page_name}}</span>
      <v-breadcrumbs divider="/" >
       <v-breadcrumbs-item v-for="item in breadcrumbs" :key="item" @click="goTo('/app')">
         
         <v-icon color="primary">{{item.icon}}</v-icon><span class="caption font-weight-light">{{item.name}}</span>
         
       </v-breadcrumbs-item> 
      </v-breadcrumbs>      
      <v-divider></v-divider>
      <!-- <transition name="fade"> -->
      <router-view></router-view>
      <!-- </transition> -->
    </v-container>
  <!-- </v-content> -->
  <v-footer app  dark class="pa-1" style='background: linear-gradient(45deg, #43A047 0%, #1de9b6 100%)'>
    <span class="caption">Copyright © 2019 FDA All rights reserved.</span>
    <v-spacer></v-spacer>
    <span class="caption">Food And Drugs Administration of the Philippines</span>
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
      mini:false,
      route_name:''
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
    goTo(router){
      this.$router.push(router)
    },
    activeRoute(route){
      console.log("ROUTER_NAME: " + this.$route.name)
      if(this.$route.name ===route){
        return "background-color: rgb(2, 128, 0); color:white"
      }else{
        return
      }
      
    }

  },
  //#########################
  // computed
  //#########################
  computed:{
    page_name(){
      return this.$route.name
    },
    breadcrumbs(){
      return [
        { icon:'home',
          name: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        { icon:'book',
          name: 'Certificates',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        
        ]
    }
  }

}
</script>

<style>

</style>
