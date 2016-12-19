import moment from 'moment';
import EventsData from 'src/assets/data/eventsData.js';

export default {
  name: 'evento-edit',
  props: [],
  beforeCreate() {

  },
  mounted() {
    //this.evento.name = "aaaaa";
  },
  data() {
    return {
      //routeId : this.$route.params.id
    }
  },
  methods: {
    getTime: function () {
      return moment(this.evento.time).format('DD-MM-YY HH:mm A');
    },
    serName: function (event, newName) {
      console.log(this.evento.name);
      this.evento.name = (newName || "aaa");
      console.log(this.evento.name);

    },
    navigateToMainView: function () {
      this.$router.push({ path: '/evento-center' });
    }
  },
  computed: {
    evento: function () {
      let routeId = this.$route.params.id;
      let evento = EventsData.events.filter((evento) => {
        return evento.id == routeId;
      });
      if (Array.isArray(evento)) {
        evento = evento[0];
      }
      return evento;
    }
  },
  components: {

  }
}