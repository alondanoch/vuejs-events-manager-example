import moment from 'moment';
import EventoGroup from 'src/components/evento-group/evento-group';
import EventoFilter from 'src/components/evento-filter/evento-filter';
import EventsData from 'src/assets/data/eventsData.js';


export default {
  name: 'evento-center',
  props: [],
  beforeCreate() {
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
      filterByName: '',
      eventsData: EventsData
      //EventsData: EventsData.events 
    }
  },
  methods: {
    
  },
  computed: {
    EventsDataGroups: function () {
      let eventsDataGroups;
      if (!this.eventsData){
        return [];
      }
      else{
        console.log('EventsData', this.eventsData);
      }

      if (this.filterByName) {
        let that = this;
        eventsDataGroups = this.eventsData.events.filter((evento) => {
          return (evento.name.toLowerCase().indexOf(that.filterByName.toLowerCase()) !== -1)
        });
      }
      else {
        eventsDataGroups = this.eventsData.events;
      }
      return eventsDataGroups.reduce((groups, evento) => {
        let key = moment(evento.time).format('DD-MM-YYYY');
        (groups[key] = groups[key] || []).push(evento);
        return groups;
      }, {});
    }
  },
  watch:{

  },
  components: {
    EventoGroup,
    EventoFilter
  }
}