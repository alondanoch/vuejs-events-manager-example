<template lang="html">


  <section class="evento-group-list">
    <h3>Events List</h3>
    <div class="row">
      <div class="evento-wrapper col-xs-18 col-sm-4" v-for="event of eventsList">
          <evento-preview class="card"  v-bind:event="event"></evento-preview>
      </div>

    </div>
    
  </section>
</template>

<script lang="js">
  import EventoPreview from '../evento-preview/evento-preview';

  export default  {
    name: 'evento-group-list',
    props: ['eventsList'],
    mounted() {
      console.log('evento-group-list this.eventsList: ',this.eventsList)
    },
    data() {
      return {
      }
    },
    methods: {

    },
    computed: {

    },
    components: {
      EventoPreview
    }
}
</script>

<style scoped lang="scss">
  .evento-wrapper {
    height: 350px;
    

  }
</style>
