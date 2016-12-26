import moment from 'moment';
import EventoGroup from 'src/components/evento-group/evento-group';
import EventoFilter from 'src/components/evento-filter/evento-filter';
//import EventsData from 'src/assets/data/eventsData.js';


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
    this.getEvents();
  },
  data() {
    return {
      filterByName: '',
      EventsData: []
      //EventsData: EventsData.events 
    }
  },
  methods: {
    getEvents() {
      this.$http.get(`/events-data`)
        .then(res => res.json())
        .then(eventsData => this.EventsData = eventsData);
    }
  },
  computed: {
    EventsDataGroups: function () {
      let eventsDataGroups;
      if (!this.EventsData){
        return [];
      }

      if (this.filterByName) {
        let that = this;
        eventsDataGroups = this.EventsData.filter((evento) => {
          return (evento.name.toLowerCase().indexOf(that.filterByName.toLowerCase()) !== -1)
        });
      }
      else {
        eventsDataGroups = this.EventsData;
      }
      return eventsDataGroups.reduce((groups, evento) => {
        let key = moment(evento.time).dayOfYear();
        (groups[key] = groups[key] || []).push(evento);
        return groups;
      }, {});
    }
  },
  components: {
    EventoGroup,
    EventoFilter
  }
}