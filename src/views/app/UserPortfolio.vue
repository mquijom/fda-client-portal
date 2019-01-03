<template>
<v-layout row wrap>
    <v-flex xs12 md6 lg3 pa-2>
        <dashboard-card
        icon="card_membership" 
        title="License"
        description="Count"
        details="0.00"
        color="primary"
        >
    </dashboard-card>
    </v-flex>
    <v-flex xs12 md6 lg3 pa-2>
        <dashboard-card
        icon="book" 
        title="Certificates"
        description="Count"
        details="0.00"
        color="success"
        >
    </dashboard-card>
    </v-flex>
    <v-flex xs12 md6 lg3 pa-2>
        <dashboard-card
        icon="far fa-credit-card" 
        title="Payments"
        description="Count"
        details="0.00"
        color="warning"
        >
    </dashboard-card>
    </v-flex>
    <v-flex xs12 md6 lg3 pa-2>
        <dashboard-card
        icon="shopping_cart" 
        title="Certificates"
        description="Count"
        details="0.00"
        color="error"
        >
    </dashboard-card>
    </v-flex>
    <v-flex xs12 md6 lg4 pa-2>
        <v-card>
            <v-toolbar dark color="#00bfa5">
                <span class="subheadline font-weight-light">License Applications</span>
                <v-btn color="success"
                    dark              
                    absolute
                    bottom
                    right
                    fab
                    small
                    >
                    <v-icon>call_made</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                 <v-list two-line subheader>
                     <v-list-tile>
                         <v-list-tile-content>
                            <v-list-tile-title>CASE-123-45656</v-list-tile-title>
                            <v-list-tile-sub-title>Application</v-list-tile-sub-title>
                         </v-list-tile-content>
                         <v-list-tile-action>
                            <v-btn icon ripple>
                                <v-icon color="grey lighten-1">info</v-icon>
                            </v-btn>
                            </v-list-tile-action>
                     </v-list-tile>
                     <v-divider></v-divider>
                     <v-list-tile>
                         <v-list-tile-content>
                            <v-list-tile-title>CASE-123-45656</v-list-tile-title>
                            <v-list-tile-sub-title>Application</v-list-tile-sub-title>
                         </v-list-tile-content>
                         <v-list-tile-action>
                            <v-btn icon ripple>
                                <v-icon color="grey lighten-1">info</v-icon>
                            </v-btn>
                            </v-list-tile-action>
                     </v-list-tile>
                 </v-list>
            </v-card-text>
        </v-card>
    </v-flex>
     <v-flex xs12 md6 lg4 pa-2>
        <v-card>
            <v-toolbar dark color="#ff6e40">
                <span class="subheadline font-weight-light">Certificates Applications</span>
                <v-btn color="warning"
                    dark              
                    absolute
                    bottom
                    right
                    fab
                    small
                    >
                    <v-icon>call_made</v-icon>
                </v-btn>
            </v-toolbar>
            <v-card-text>
                <v-list two-line subheader>
                     <v-list-tile>
                         <v-list-tile-content>
                            <v-list-tile-title>CASE-123-45656</v-list-tile-title>
                            <v-list-tile-sub-title>Application</v-list-tile-sub-title>
                         </v-list-tile-content>
                         <v-list-tile-action>
                            <v-btn icon ripple>
                                <v-icon color="grey lighten-1">info</v-icon>
                            </v-btn>
                            </v-list-tile-action>
                     </v-list-tile>
                     <v-divider></v-divider>
                     <v-list-tile>
                         <v-list-tile-content>
                            <v-list-tile-title>CASE-123-45656</v-list-tile-title>
                            <v-list-tile-sub-title>Application</v-list-tile-sub-title>
                         </v-list-tile-content>
                         <v-list-tile-action>
                            <v-btn icon ripple>
                                <v-icon color="grey lighten-1">info</v-icon>
                            </v-btn>
                            </v-list-tile-action>
                     </v-list-tile>
                     <v-divider></v-divider>
                 </v-list>
            </v-card-text>
        </v-card>
    </v-flex>
    <v-flex xs12 md6 lg4 pa-2>
        <v-card>
            <v-toolbar extended style="background:url('https://pixinvent.com/free-materialize-material-design-admin-template/images/gallary/12.png') no-repeat center">            
            <v-btn
            
              color="error"
              dark              
              absolute
              bottom
              right
              fab
              small
            >
              <v-icon>edit</v-icon>
            </v-btn>

            <v-btn
              dark              
              absolute
              bottom
              left
              fab
              color="white"
            >
              <v-avatar>
                  <img src="http://i.pravatar.cc/400" alt="alt" size="400">
              </v-avatar>              
            </v-btn>
          </v-toolbar>
            <!-- <v-card-title primary-title>
                
            </v-card-title> -->
            
            <v-card-text>
                <v-layout row wrap mt-4>
                    <v-flex xs12>
                        <span class="title font-width-light">Ariel Balita</span>
                    </v-flex>
                    <v-flex xs12 pa-1>
                        <v-icon small>email</v-icon>
                        <span class="subheader font-width-light">ariel.a.balita@gmail.com</span>
                    </v-flex>
                    <v-flex xs12 pa-1>
                        <v-icon small>phone</v-icon>
                        <span class="subheader font-width-light">+63 917 709 4930</span>
                    </v-flex>
                </v-layout>
                                
            </v-card-text>          
        </v-card>
    </v-flex>
</v-layout>    
</template>

<script>
import DashboardCard from "@/components/DashboardCards";
export default {
  components: { DashboardCard }
};
</script>

<style>
</style>

