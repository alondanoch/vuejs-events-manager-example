<template lang="html">


  <section class="evento-filter">
    <h3>filter by name:</h3>
    <input type="text" v-on:input="updateValue($event.target.value)">
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
      console.log('evento-group-list this.eventsList: ', this.eventsList + " | " + this.nameList)
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
  .evento-wrapper {
    height: 350px;
    

  }
</style>