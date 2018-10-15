var vmApp = new Vue({
	el:'.container',
	beforeCreate: function(){
		this.tempNextJudge = getLocalSessionDate("nextJudge");
	},
	data:function(){
		return {
			time: new Date(),
			selectTime: new Date(),
			nextJudge: this.tempNextJudge,
			cureentTime: 0
		}
	},
	computed: {
		year: function(){
			return this.time.getYear()+1900
		},
		month: function(){
			return this.time.getMonth()+1
		},
		day: function(){
			return this.time.getDate()
		}
	},
	methods:{
		getElapsedDate: getElapsedDate,
		saveShedule: function(){

		},
		isCleared: function(timeA,timeB){
			return timeA>timeB;
		}
	},
	updated: function(){

	}
});