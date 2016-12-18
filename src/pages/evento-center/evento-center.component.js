import EventoGroup from 'src/components/evento-group/evento-group';
import EventsData from 'src/assets/data/eventsData.js';

export default  {
  name: 'evento-center',
  props: [],
    mounted() {
      //console.log('EventsData', EventsData.events);
    },
    data() {
      return {
        EventsData: EventsData.events 
      }
    },
    methods: {

    },
    computed: {

    },
    components: {
      EventoGroup
    }
}