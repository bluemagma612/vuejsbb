 new Vue({
	// we want to target the div with an id of events
	el: '#events',

	// here we can register any values or collections that hold data
	// for the application
	data: {
		event: { name: '', description: '', date: '' },
		events: []
	},

	// Anything within the ready function will run when the application loads
	ready: function() {
		this.fetchEvents();
	},

	// methods we want to use in our application are registered here
	methods: {
		// we dedicate a method to retrieving and setting some data
		fetchEvents: function() {
			var events = [
			{
				id: 1, 
				name: 'TIFF',
				description: 'Toronto intl film fest',
				date: '2015-9-10'
			},
			{
				id: 2, 
				name: 'martian premiere',
				description: 'the martian comes to theatres',
				date: '2015-9-11'
			},
			{
				id: 3, 
				name: 'SXSW',
				description: 'music film and interacive festival in austin tx',
				date: '2015-9-12'
			}
			];
			// set a convenience method provided by Vue that is similar to pushing
			// data into an array
			this.$set('events', events);
			// If we had a back end with an events endpoint set up that responds to GET requests
			// this.$http.get('api/events').success(function(events) {
			//   this.$set('events', events);
			// }).error(function(error) {
			//   console.log(error);
			// });
		},
		// adds an event to the existing events array
		addEvent: function() {
			if(this.event.name) {
				this.events.push(this.event);
				this.event = { name: '', description: '', date: ''};
			}
		},
		// If we had an endpoint set up that responds to POST requests
		// this.$http.post('api/events', this.event).success(function(response) {
		//   this.events.push(this.event);
		//   console.log("Event added!");
		// }).error(function(error) {
		//   console.log(error);
		// });
		// deletes an event from the existing events array
		deleteEvent: function(index) {
			if(confirm("Are you sure you want to delete this event?")) {
				// $remove is a Vue convenience method similar to splice
				this.events.$remove(index);
			}
		}
		// We could also delete an event if we had the events endpoint set up to delete data
		// this.$http.delete('api/events/' + event.id).success(function(response) {
		//   this.events.$remove(index);
		// }).error(function(error) {
		//   console.log(error);
		// });

	}
});