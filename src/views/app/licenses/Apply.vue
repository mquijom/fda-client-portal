<template>
    <v-layout row wrap>
        <v-flex xs3 pa-1>
            <v-card>
                <v-card-title primary-title>
                    <span class="title font-weight-thin">Progress</span>
                    <v-spacer></v-spacer>
                    <v-progress-circular :value="20" color="primary"></v-progress-circular>
                </v-card-title>
                <v-divider></v-divider>
                <v-card-text>
                    <v-stepper v-model="e6" vertical>
                        <v-stepper-step :complete="e6 > 1" step="1">
                        Select an app
                        <small>Summarize if needed</small>
                        </v-stepper-step>

                        <v-stepper-content step="1">
                       
                        </v-stepper-content>

                        <v-stepper-step :complete="e6 > 2" step="2">Configure analytics for this app</v-stepper-step>

                        <v-stepper-content step="2">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click="e6 = 3">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>

                        <v-stepper-step :complete="e6 > 3" step="3">Select an ad format and name ad unit</v-stepper-step>

                        <v-stepper-content step="3">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click="e6 = 4">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>

                        <v-stepper-step step="4">View setup instructions</v-stepper-step>
                        <v-stepper-content step="4">
                        <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                        <v-btn color="primary" @click="e6 = 1">Continue</v-btn>
                        <v-btn flat>Cancel</v-btn>
                        </v-stepper-content>
                    </v-stepper>
                </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>
