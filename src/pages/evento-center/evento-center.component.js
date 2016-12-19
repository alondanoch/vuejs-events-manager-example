import moment from 'moment';
import EventoGroup from 'src/components/evento-group/evento-group';
import EventsData from 'src/assets/data/eventsData.js';

export default  {
  name: 'evento-center',
  props: [],
    beforeCreate(){
      //console.log('EventsData', EventsData.events);
      // var DataArrByDate = EventsData.events.reduce((groups, evento) => {  
      //   let key = moment(evento.time).dayOfYear();
      //   (groups[key] = groups[key] || []).push(evento);
      //   return groups;
      // }, {});

      // console.log('DataArrByDate1', DataArrByDate);
    },
    mounted() {
      
      

    },
    data() {
      return {
        //EventsData: EventsData.events 
      }
    },
    methods: {

    },
    computed: {
      EventsDataGroups: function () {
        return EventsData.events.reduce((groups, evento) => {
          let key = moment(evento.time).dayOfYear();
          (groups[key] = groups[key] || []).push(evento);
          return groups;
        }, {});
      }
    },
    components: {
      EventoGroup
    }
}