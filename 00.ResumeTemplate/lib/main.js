{
	let summary = {
		title: 'Summary',
		text: "Summary Template"
	};
	let highlights = {
		title:'Highlights',
		list:[
			'Highlights1',
			'Highlights2',
			'Highlights3',
			'Highlights4',
			'Highlights5',
			'Highlights6'
		]
	};
	let skill = {
		title:'Skill',
		target:'',
		showTarget:'',
		sort:'',
		skills:{
			Skill1:{
				level:80,
				SkillDetail1:{
					level:52,
					keywords:[
						'keyword1-1',
						'keyword1-2',
						'keyword1-3',
						'keyword1-4',
						'keyword1-5'
					]
				},
				SkillDetail2:{
					level:85,
					keywords:[
						'keyword2-1',
						'keyword2-2',
						'keyword2-3',
						'keyword2-4',
						'keyword2-5'
					]
				},
				SkillDetail3:{
					level:11,
					keywords:[
						'keyword3-1',
						'keyword3-2',
						'keyword3-3',
						'keyword3-4',
						'keyword3-5'
					]
				}
			},
			Skill2:{
				level:45,
				SkillDetail1:{
					level:100,
					keywords:[
						'keyword1-1',
						'keyword1-2',
						'keyword1-3',
						'keyword1-4',
						'keyword1-5'
					]
				},
				SkillDetail2:{
					level:3,
					keywords:[
						'keyword2-1',
						'keyword2-2',
						'keyword2-3',
						'keyword2-4',
						'keyword2-5'
					]
				},
				SkillDetail3:{
					level:11,
					keywords:[
						'keyword3-1',
						'keyword3-2',
						'keyword3-3',
						'keyword3-4',
						'keyword3-5'
					]
				},
				SkillDetail4:{
					level:89,
					keywords:[
						'keyword4-1',
						'keyword4-2',
						'keyword4-3',
						'keyword4-4',
						'keyword4-5'
					]
				}
			},
			Skill3:{
				level:34,
				SkillDetail1:{
					level:50,
					keywords:[
						'keyword1-1',
						'keyword1-2',
						'keyword1-3',
						'keyword1-4',
						'keyword1-5'
					]
				},
				SkillDetail2:{
					level:60,
					keywords:[
						'keyword2-1',
						'keyword2-2',
						'keyword2-3',
						'keyword2-4',
						'keyword2-5'
					]
				},
				SkillDetail3:{
					level:24,
					keywords:[
						'keyword3-1',
						'keyword3-2',
						'keyword3-3',
						'keyword3-4',
						'keyword3-5'
					]
				},
				SkillDetail4:{
					level:88,
					keywords:[
						'keyword4-1',
						'keyword4-2',
						'keyword4-3',
						'keyword4-4',
						'keyword4-5'
					]
				}
			},
			Skill4:{
				level:75,
				SkillDetail1:{
					level:41,
					keywords:[
						'keyword1-1',
						'keyword1-2',
						'keyword1-3',
						'keyword1-4',
						'keyword1-5'
					]
				},
				SkillDetail2:{
					level:57,
					keywords:[
						'keyword2-1',
						'keyword2-2',
						'keyword2-3',
						'keyword2-4',
						'keyword2-5'
					]
				},
				SkillDetail3:{
					level:100,
					keywords:[
						'keyword3-1',
						'keyword3-2',
						'keyword3-3',
						'keyword3-4',
						'keyword3-5'
					]
				},
				SkillDetail4:{
					level:100,
					keywords:[
						'keyword4-1',
						'keyword4-2',
						'keyword4-3',
						'keyword4-4',
						'keyword4-5'
					]
				}
			}
		}
	};
	let experience = {
		type:'experience',
		title:'Experience',
		cases:[
		{
			key:0,
			job:'[Your job name]',
			startDate:'2018-01',
			endDate:'',
			company:'[Your company]',
			projects:[
			{
				name:'[Web Project name]',
				technic:{Web:'[Like Vuejs]', Server:'[Like Java]'},
				detail:'[Project detail]',
				highlights:[
					'Highlights-1',
					'Highlights-2',
					'Highlights-3',
					'Highlights-4',
					'Highlights-5'
				]
			},
			{
				name:'[Program Project name]',
				technic:{Program:'[Like C++,C#]'},
				detail:'[Project detail]',
				highlights:[
					'Highlights-1',
					'Highlights-2',
					'Highlights-3',
					'Highlights-4'
				]
			}
			]
		},
		{
			key:1,
			job:'[Your job name]',
			startDate:'2017-07',
			endDate:'2018-01',
			company:'[Your company]',
			projects:[
			{
				name:'[Something Project name]',
				technic:{Point1:'technic1', Point2:'technic2'},
				detail:'[Project detail]',
				highlights:[
					'Highlights-1',
					'Highlights-2',
					'Highlights-3',
					'Highlights-4',
					'Highlights-5'
				]

			}]
		
		}
	]};
	let work = {
		type:'work',
		title:'Work',
		works:[
		{
			key:0,
			name:'Resume',
			link:'LearnVue.js',
			linkType:'Github',
			type:'Study',
			keyword:'Html,VueJs',
			detail:'Just resume template.',
			/*URL:'https://shosetsu.github.io/GravityBall/'*/  //<= try it!
			URL:'https://github.com/Shosetsu/LearnVue.js/tree/master/00.ResumeTemplate'  //<= not good
		}
		]
	};
	let pages = {
		target:0,
		page : [{
			index:0,
			visible:{experience:[0,1]},
			contents:[experience]
		},{
			index:1,
			visible:{experience:[1,2],work:[0,1]},
			contents:[experience,work]
		}/*,{
			index:2,
			visible:{work:[1,3]},
			contents:[work]
		}*/]
	};
	document.title="[Your Name]'s " + document.title;
	var title = new Vue({
		el: '.title-bar',
		data: function() {
				return {
				firstName:'First',
				lastName:'Last',
				telephone:'(+00) 12-3456-7890',
				mailAdress:'template@template.com',
				githubLink:'github.com/Shosetsu/'  //<= replace it!
			}
		},
		methods:{
			openLink: openLink
		}		
	});
	var content = new Vue({
		el: '#content',
		data: function(){
			return {
				summary:summary,
				highlights:highlights,
				skill:skill,
				pages:pages
			}
		},
		computed: {
			targetSkillListLeft: function () {
				if(!this.skill.target){
					return sortObjectList(this.skill.skills,'level',this.skill.sort);
				}else{
					let list = {};
					for (obj in this.skill.skills[this.skill.target]){
						if(obj=="level") continue;
						list[obj]=this.skill.skills[this.skill.target][obj];
					}
					return sortObjectList(list,'level',this.skill.sort);
				}
			},
			targetSkillListRight: function () {
				if(this.skill.showTarget){
					return this.skill.skills[this.skill.target][this.skill.showTarget].keywords;
				}
				return ['...'];
			}
		},
		methods:{
			openLink: openLink,
			setTarget: function(target){
				this.skill.target = target;
				this.skill.showTarget = !target?target:this.skill.showTarget;
			},
			setShowTarget: function(showTarget){
				this.skill.showTarget = showTarget;
			},
			changeSort: function(){
				this.skill.sort = !this.skill.sort?'Desc':(this.skill.sort.toLowerCase()==="desc")?'Asc':'';
			}
		}
	});
}
if(window.innerHeight<800||window.innerWidth<1366){
	alert("Please open this in a large window");
	document.body.style.height='800px';
	document.body.style.overflowY='auto';
}