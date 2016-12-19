import moment from 'moment';
import EventsData from 'src/assets/data/eventsData.js';

export default {
  name: 'evento-details',
  props: [],
  beforeCreate() {

  },
  mounted() {

  },
  data() {
    return {
      //routeId : this.$route.params.id
    }
  },
  methods: {
    getTime: function(){
      return moment(this.evento.time).format('DD-MM-YY MM:HH A');
    }
  },
  computed: {
    evento: function () {
      let routeId = this.$route.params.id;
      let evento = EventsData.events.filter((evento) => {
        return evento.id == routeId;
      });
      if (Array.isArray(evento)){
        evento = evento[0];
      }
      return evento;
    }
  },
  components: {

  }
}