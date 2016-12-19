<template lang="html">


  <section class="evento-filter">
    <h3>
      filter by name:
      <input type="text" class="filterInput" v-on:input="updateValue($event.target.value)">
    </h3>
  </section>
</template>

<script lang="js">
  import EventoPreview from '../evento-preview/evento-preview';

  export default {
    name: 'evento-filter',
    props: {
      value: {
        type: String,
        default: ''
      }
    },
    mounted() {
      //console.log('evento-group-list this.eventsList: ', this.eventsList + " | " + this.nameList)
    },
    data() {
      return {
      }
    },
    methods: {
      updateValue: function (value) {
        this.$emit('input', value)
      },
    },
    computed: {

    },
    components: {
      EventoPreview
    }
  }
</script>

<style scoped lang="scss">
  
</style>