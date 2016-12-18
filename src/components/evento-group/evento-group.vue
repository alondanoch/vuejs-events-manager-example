<template lang="html">


  <section class="car-list">
    <h3>evento-group List</h3>
    <div class="row">
        <evento-group-list class="card" v-bind:eventsList="eventsListGroups"></evento-group-list>

    </div>
    
  </section>
</template>

<script lang="js">
  import EventoGroupList from '../evento-group-list/evento-group-list';
  
  export default  {
    name: 'evento-group',
    props: ['Data'],
    mounted() {
        //console.log('evento-group Data', this.Data);
    },
    data() {
      return {
        eventsListGroups: this.Data,
        cars: [{id: 1, name: 'Cartus', power: 3}, {id: 2, name: 'Carla', power: 4}]
      }
    },
    methods: {

    },
    computed: {

    },
    components: {
      EventoGroupList
    }
}
</script>

<style scoped lang="scss">
  .car-list {

    

  }
</style>
