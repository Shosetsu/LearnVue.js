var vmApi= new Vue({
	el:'#content',
	data: function(){return {
		lastTarget: localStorage.lastTarget

		}
	},
	methods:{
		changeTarget: function(target){
			this.lastTarget=this.lastTarget===target?'':target;
		}
	}
});