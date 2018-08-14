const vaildStatus = (status)=>status>25?25:status<0?0:status;
const vaildSubStatus = (status,max)=>status<0?0:status>max?max:status;
const syncData = ()=>{
	localStorage["lastTarget"] = vmApi._data.lastTarget;
	localStorage["baseStates"] = JSON.stringify(vmApi._data.status.baseStates);
	localStorage["HP"] = vmApi._data.status.HP;
	localStorage["LP"] = vmApi._data.status.LP;
}
const defalutStates = ['STR','VIT','DEX','INT','WIS','CHA'];
const sessionCheck = ()=>{
	if(!localStorage["baseStates"]||!localStorage["HP"]||!localStorage["LP"]){
		return false;
	}
	let sessionData = JSON.parse(localStorage["baseStates"]);
	for(key of defalutStates){
		if(!sessionData[key])return false;
	}
	for(key in sessionData){
		if(!defalutStates.includes(key))return false;
	}
	return true;
}
const reStatus = (states) =>{
	for(key of defalutStates){
		states.baseStates[key] = 10;
	}
	states.HP=20;
	states.LP=0;
}
const logicCheck = (data = vmApi._data)=>{
	if(data.status.baseStates.VIT<3||data.status.HP==0){
		vmApi.writeLog("--!You are dead!--", false);
		return reStatus(data.status);
	}
	for(key in data.status.baseStates){
		if(!defalutStates.includes(key)){
			vmApi.writeLog("--!LogicError!--", false);
			return reStatus(data.status);
		}
	}
}
//-------//
var vmApi= new Vue({
	el:'#content',
	beforeCreate: function(){
		localStorage["lastTarget"] = !localStorage["lastTarget"]?'':localStorage["lastTarget"];
		localStorage["enemyLevel"] = !localStorage["enemyLevel"]?0:localStorage["enemyLevel"];
		if(!sessionCheck()){
			localStorage["baseStates"]=JSON.stringify({"STR":10,"VIT":10,"DEX":10,"INT":10,"WIS":10,"CHA":10});
			localStorage["HP"] = 20;
			localStorage["LP"] = 0;
			localStorage["enemyLevel"] = 1;
		}
	},
	data: function(){
		return {
			lastTarget: localStorage["lastTarget"],
			status:{
				baseStates:JSON.parse(localStorage["baseStates"]),
				HP:JSON.parse(localStorage["HP"]),
				LP:JSON.parse(localStorage["LP"]),
				enemyLevel:JSON.parse(localStorage["enemyLevel"])
			}
		}
	},
	beforeMount: function(){
		this.writeLog("--start--", false);
	},
	computed: {
		MaxHP: function(){
			return this.status.baseStates['VIT']*2;
		},
		MaxLP: function(){
			return Math.floor(this.status.baseStates['WIS']*1.5+this.status.baseStates['INT']*0.5)
		}
	},	
	methods:{
		changeTarget: function(target){
			this.lastTarget=this.lastTarget===target?'':target;
		},
		changeDestiny: function(){
			this.writeLog("for Destiny");
			for(status in this.status.baseStates){
				let oldData = this.status.baseStates[status];
				this.status.baseStates[status] = vaildStatus(this.status.baseStates[status]+Math.round((Math.random()-0.5)*5));
				let newData = this.status.baseStates[status];
				this.writeLog(status+":\t"+oldData+"\-\>"+newData+"\t("+(newData-oldData)+")");
			}
			this.status.HP = vaildSubStatus(this.status.HP,this.MaxHP)
			this.status.LP = vaildSubStatus(Math.round(this.status.LP + Math.random()*3),this.MaxLP);
		},
		reDestiny:function(){
			this.writeLog("Restart Your Destiny", false);
			reStatus(this.status);
			this.LP=0;
			this.HP=20;
		},
		judgeDestiny: function(){
			this.writeLog("You get an enemy at level "+this.enemyLevel);
			this.status;
		},
		writeLog: function(log,type="1"){
			if(!type){
				this.log = "";
				this.log += log;
			}else{
				logList = this.log.split('&#13;');
				if(logList.length>60){
					let logTemp = '';
					logList.slice(0,25).forEach((a)=>logTemp+=a);
				}
				this.log += "&#13;"+log;
			}
			
		},
		openBar: function(type){

		}
	}
});
setInterval(logicCheck,300);
setInterval(syncData,1000);
setInterval(function(){
	document.querySelector(".menu textarea").scrollTop=document.querySelector(".menu textarea").scrollHeight;
},200);