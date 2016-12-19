import moment from 'moment';
import EventsData from 'src/assets/data/eventsData.js';

export default {
  name: 'evento-new',
  props: [],
  beforeCreate() {

  },
  mounted() {
    //this.evento.name = "aaaaa";
  },
  data() {
    return {
      id: new Date().getTime(), //just to generate a random number
      name: 'enter event name',
      time: new Date().getTime(),
      status: 'upcoming',
      description: 'enter event description'
    }
  },
  methods: {
    saveNewEvent: function() {
      let newEvent = {
        id: this.id,
        name: this.name,
        time: this.time,
        status: this.status,
        description: this.description  
      }

      console.log(newEvent);
      EventsData.events.push(newEvent);
      console.log(EventsData.events);
      this.$router.push({ path: '/evento-center' });
    }

  },
  computed: {
    getTime: function(){
      return moment(this.time).format('DD-MM-YY HH:mm A');
    },
  },
  components: {

  }
}