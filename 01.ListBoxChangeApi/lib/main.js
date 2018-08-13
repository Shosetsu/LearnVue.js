const vaildStatus = (status)=>status>25?25:status<0?0:status;
const vaildSubStatus = (status,max)=>status<0?0:status>max?max:status;
const syncData = ()=>{
	localStorage["lastTarget"] = vmApi._data.lastTarget;
	localStorage["states"] = JSON.stringify(vmApi._data.states);
	localStorage["HP"] = vmApi._data.HP;
	localStorage["LP"] = vmApi._data.LP;
}
const reStatus = (states) =>{
	for(status in states){
		states[status] = 10;
	}
}
const logicCheck = ()=>{
	if(vmApi._data.states.CON<3||!vmApi._data.HP||vmApi._data.HP==0){
		console.log("restart");
		reStatus(vmApi._data.states);
		vmApi._data.HP=20;
		vmApi._data.LP=0;
	}
}
const beforeCheck = ()=>{
	localStorage["states"]=!localStorage["states"]?JSON.stringify({"STR":10,"CON":10,"DEX":10,"INT":10,"WIS":10,"CHA":10}):localStorage["states"];
	localStorage["HP"] = !localStorage["HP"]?localStorage["states"]["CON"]*2:localStorage["HP"];
	localStorage["LP"] = !localStorage["LP"]?0:localStorage["LP"];
}
var vmApi= new Vue({
	el:'#content',
	data: function(){
		return {
			lastTarget: localStorage.lastTarget,
			states:JSON.parse(localStorage.states),
			HP:localStorage.HP,
			LP:localStorage.LP
		}
	},
	beforeCreate: beforeCheck,
	computed: {
		MaxHP: function(){
			return this.states['CON']*2;
		},
		MaxLP: function(){
			return Math.floor(this.states['WIS']*1.5+this.states['INT']*0.5)
		}
	},	
	methods:{
		changeTarget: function(target){
			this.lastTarget=this.lastTarget===target?'':target;
		},
		changeDestiny: function(){
			for(status in this.states){
				this.states[status] = vaildStatus(this.states[status]+Math.round((Math.random()-0.5)*5));
			}
			this.HP = vaildSubStatus(this.HP,this.MaxHP)
			this.LP = vaildSubStatus(Math.round(this.LP + Math.random()*3),this.MaxLP);
		},
		reDestiny:function(){
			reStatus(this.states);
			this.LP=0;
			this.HP=20;
		},
		judgeDestiny: function(){
			
		}
	}
});


setInterval(syncData,1000);
setInterval(logicCheck,500);