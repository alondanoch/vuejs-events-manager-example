<template lang="html">


  <section class="car-list">
    <div class="row">
      <div v-for="(dataList, index) in DataGroups">
        <evento-group-list class="card" v-bind:eventsList="dataList" v-bind:nameList="index"></evento-group-list>
      </div>
    </div>
    
  </section>
</template>

<script lang="js">
  import moment from 'moment';
  import EventoGroupList from '../evento-group-list/evento-group-list';
  
  export default  {
    name: 'evento-group',
    props: ['DataGroups'],
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
      // getNameList: function(dayInYear){
      //   return moment().dayOfYear(dayInYear).format("DD-MM-YYYY");
      // }
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
