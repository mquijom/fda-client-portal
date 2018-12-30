<template>

  <card 
    icon="shopping_cart" 
    title="Total Certificates"
    description="Count"
    details="0.00"
    color="success"></card>

</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import card from '@/components/DashboardCards'

  export default {
    components: {
      HelloWorld,
      card
    }
  }
</script>
