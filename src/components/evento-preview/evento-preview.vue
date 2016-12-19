<template lang="html">

  <section class="evento-preview thumbnail">
    <!--<img class="img-responsive" :src="" alt="">-->
    <router-link :to="{ path: '/evento-edit/' + event.id}">
      <button type="button" class="btn btn-default">Edit</button>
    </router-link>

    <router-link :to="{ path: '/evento-details/' + event.id}">
      <div class="caption">
        <h4>{{event.name}}</h4>
      </div>
      <div class="evento-description" v-html="event.description">
        <!--<p v-html="rawHtml">{{event.description}}</p>-->
      </div>
    </router-link>
  </section>

</template>

<script lang="js">
  export default {
    name: 'evento-preview',
    props: ['event'],
    mounted() {
      //console.log('evento-preview this.event: ',this.event);
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

<style lang="scss">
  .evento-preview{
    .caption{
      height: 100px;
    }
    .evento-description {
        height: 200px;
        overflow: auto;
        font-size: 12px;
        word-wrap: break-word;

        p {
          img {
            width: 100%;
          }
        }
    }
  }
</style>