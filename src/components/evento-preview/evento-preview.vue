<template lang="html">

  <section class="evento-preview thumbnail">
    <!--<img class="img-responsive" :src="" alt="">-->
    <div class="caption">
      <h4>{{event.name}}</h4>
    </div>  
    <div class="evento-description" v-html="event.description">
      <!--<p v-html="rawHtml">{{event.description}}</p>-->
    </div>
  </section>

</template>

<script lang="js">
  export default  {
    name: 'evento-preview',
    props: ['event'],
    mounted() {
      console.log('ssds');
      console.log('evento-preview this.event: ',this.event);
    },
    data() {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .evento-preview{
    .evento-description {
        height: 200px;
        overflow: auto;
        font-size: 12px;
    }
  }
</style>
