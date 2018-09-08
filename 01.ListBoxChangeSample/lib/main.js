const defalutStates = ['STR','VIT','DEX','INT','WIS','CHA'];
const vaildStatus = (status)=>status>25?25:status<0?0:status;
const vaildSubStatus = (status,max)=>status<0?0:status>max?max:status;
const setLog = (log)=>{
	if(!vmApp){
		getDom("#log").value = log;
	}else{
		Vue.set(vmApp,"log",log);
	}
}
const writeLog = (log,type = true)=>{
	if(!type){
		setLog(log+'\n');
	}else{
		let logTemp = '';
		if(!vmApp){
			logTemp = getDom("#log").value;
		}else{
			logTemp = vmApp.$data.log;
		}
		let logList = getDom("#log").value.split('\n');
		if(logList.length>60){
			logTemp = '';
			logList.slice(0,25).forEach((a)=>logTemp+=a);
		}
		setLog(logTemp+log+"\n");
	}
	getDom("#log").scrollTop=getDom("#log").scrollHeight;
}
const reStatus = (states) =>{
	for(let key of defalutStates){
		states.baseStates[key] = 10;
	}
	states.HP=20;
	states.LP=0;
}
const logicCheck = (data = vmApp.$data)=>{
	if(data.status.baseStates.VIT<3||data.status.HP==0){
		writeLog("--!You Are Dead!--", false);
		return reStatus(data.status);
	}
	for(let key in data.status.baseStates){
		if(!defalutStates.includes(key)){
			writeLog("--!LogicError!--", false);
			return reStatus(data.status);
		}
	}
	return vmApp.syncData();
}
const initSessionData = ()=>{
	if(!localStorage[appId+"SaveData"]){
		writeLog("Save Data not found.");	
		return false;
	}
	try{
		let sessionData = JSON.parse(localStorage[appId+"SaveData"]);
		for(let key in sessionData){
			if(key === "baseStates"){
				for(let statusKey in sessionData[key]){
					sessionStorage[statusKey] = sessionData[key][statusKey];
				}
				continue;
			}
			sessionStorage[key] = sessionData[key];
		}
		writeLog("Save Data load completed.");
		return true;
	}catch(e){
		writeLog("Save Data load failed.");	
		return false;
	}
}
const loadSaveData = ()=>{
	if(initSessionData()){
		writeLog("Save Data load completed.",false);
		let status = function(){
			return {
				baseStates:{
					STR:JSON.parse(sessionStorage["STR"]),
					VIT:JSON.parse(sessionStorage["VIT"]),
					DEX:JSON.parse(sessionStorage["DEX"]),
					INT:JSON.parse(sessionStorage["INT"]),
					WIS:JSON.parse(sessionStorage["WIS"]),
					CHA:JSON.parse(sessionStorage["CHA"])
				},
				HP:JSON.parse(sessionStorage["HP"]),
				LP:JSON.parse(sessionStorage["LP"])
			}
		}();
		Vue.set(vmApp,"status",status)
	}
}

const sessionCheck = ()=>{
	if(!sessionStorage["HP"]||!sessionStorage["LP"]){
		writeLog("Data check...Error");
		return false;
	}
	for(key of defalutStates){
		let dataKey = sessionStorage[key]&&parseInt(sessionStorage[key]);
		if(dataKey!=0&&!dataKey || dataKey>25 || dataKey<0){
			writeLog("Data check...Error");
			return false;
		}
	}
	writeLog("Data check...Pass!");
	return true;
}
//-------//
var vmApp= new Vue({
	el:'#content',
	beforeCreate: function(){
		if(!sessionCheck()){
			if(!initSessionData()){
				sessionStorage["STR"]=10;
				sessionStorage["VIT"]=10;
				sessionStorage["DEX"]=10;
				sessionStorage["INT"]=10;
				sessionStorage["WIS"]=10;
				sessionStorage["CHA"]=10;
				sessionStorage["HP"] = 20;
				sessionStorage["LP"] = 0;
				sessionStorage["enemyLevel"] = 1;
				sessionStorage["lastTarget"] = '';
				sessionStorage["enemyLevel"] = 0;
				writeLog("Data Reset...OK!");
			}
		}
		writeLog("Start");
	},
	data: function(){
		return {
			lastTarget: sessionStorage["lastTarget"],
			status:{
				baseStates:{
					STR:JSON.parse(sessionStorage["STR"]),
					VIT:JSON.parse(sessionStorage["VIT"]),
					DEX:JSON.parse(sessionStorage["DEX"]),
					INT:JSON.parse(sessionStorage["INT"]),
					WIS:JSON.parse(sessionStorage["WIS"]),
					CHA:JSON.parse(sessionStorage["CHA"])
				},
				HP:JSON.parse(sessionStorage["HP"]),
				LP:JSON.parse(sessionStorage["LP"])
			},
			visableStatus:{
				baseStates:{
					STR:JSON.parse(sessionStorage["STR"]),
					VIT:JSON.parse(sessionStorage["VIT"]),
					DEX:JSON.parse(sessionStorage["DEX"]),
					INT:JSON.parse(sessionStorage["INT"]),
					WIS:JSON.parse(sessionStorage["WIS"]),
					CHA:JSON.parse(sessionStorage["CHA"])
				},
				HP:JSON.parse(sessionStorage["HP"]),
				LP:JSON.parse(sessionStorage["LP"])
			},
			enemyLevel:JSON.parse(sessionStorage["enemyLevel"]),
			log: document.querySelector("#log").value
		}
	},
	computed: {
		MaxHP: function(){
			return this.status.baseStates['VIT']*2;
		},
		MaxLP: function(){
			return Math.floor(this.status.baseStates['WIS']*1.5+this.status.baseStates['INT']*0.75)
		}
	},	
	methods:{
		syncData : function(){
			sessionStorage["lastTarget"] = this.lastTarget;
			sessionStorage["HP"] = this.status.HP;
			sessionStorage["LP"] = this.status.LP;
			sessionStorage["STR"] = this.status.baseStates.STR;
			sessionStorage["VIT"] = this.status.baseStates.VIT;
			sessionStorage["DEX"] = this.status.baseStates.DEX;
			sessionStorage["INT"] = this.status.baseStates.INT;
			sessionStorage["WIS"] = this.status.baseStates.WIS;
			sessionStorage["CHA"] = this.status.baseStates.CHA;
			sessionStorage["enemyLevel"] = this.enemyLevel;
		},
		changeTarget: function(target){
			this.lastTarget=this.lastTarget===target?'':target;
		},
		changeDestiny: function(){
			writeLog("for Destiny", false);
			for(let status in this.status.baseStates){
				let oldData = this.status.baseStates[status];
				this.status.baseStates[status] = vaildStatus(this.status.baseStates[status]+Math.round((Math.random()-0.5)*5));
				let newData = this.status.baseStates[status];
				writeLog(status+":\t"+oldData+"\-\>"+newData+"\t("+(newData-oldData)+")");
			}
			this.status.HP = vaildSubStatus(this.status.HP,this.MaxHP);
			this.status.LP = vaildSubStatus(Math.round(this.status.LP + Math.random()*3),this.MaxLP);
		},
		reDestiny:function(){
			writeLog("Restart Your Destiny", false);
			reStatus(this.status);
			this.LP=0;
			this.HP=20;
		},
		judgeDestiny: function(){
			writeLog("---Judge---",false);
			this.status;
		},
		saveData: function(){
			let data = {};
			for(key in sessionStorage){
				data[key] = sessionStorage[key];
			}
			localStorage[appId+"SaveData"] = JSON.stringify(data);
			writeLog("Save completed.", false);
		},
		openBar: function(type){

		}
	},
	watch:{
		'lastTarget': function(){ this.syncData();},
		'status.HP': function(newValue,oldValue){ TweenLite.to(this.$data.visableStatus, 1, { 'HP': vaildSubStatus(newValue,this.MaxHP) });logicCheck();},
		'status.LP': function(newValue,oldValue){ TweenLite.to(this.$data.visableStatus, 1, { 'LP': vaildSubStatus(newValue,this.MaxLP) });logicCheck();},
		'status.baseStates.STR': function(newValue){ TweenLite.to(this.$data.visableStatus.baseStates, 1, { 'STR': newValue });logicCheck();},
		'status.baseStates.VIT': function(newValue){ TweenLite.to(this.$data.visableStatus.baseStates, 1, { 'VIT': newValue });logicCheck();},
		'status.baseStates.DEX': function(newValue){ TweenLite.to(this.$data.visableStatus.baseStates, 1, { 'DEX': newValue });logicCheck();},
		'status.baseStates.INT': function(newValue){ TweenLite.to(this.$data.visableStatus.baseStates, 1, { 'INT': newValue });logicCheck();},
		'status.baseStates.WIS': function(newValue){ TweenLite.to(this.$data.visableStatus.baseStates, 1, { 'WIS': newValue });logicCheck();},
		'status.baseStates.CHA': function(newValue){ TweenLite.to(this.$data.visableStatus.baseStates, 1, { 'CHA': newValue });logicCheck();}
	}
});