{
	let summary = {
		title: 'Summary',
		text: "95年7月生。曾从事过产品设计，后因对创造性事业的渴望，从而开始对计算机科学的学习与研究。"
		+"随后在IBM Client Innovation Center中开始担任应用开发职务。随后在在从事设计、开发、测试、管理的工作中，"
		+"充分实践并深度学习了基于各式前后端开发技能，以及获得了些许对项目以及计算机科学的个人领悟。"
		+"拥有大量的个人作品（近期作品可参考我的Github）。曾因挽救过公司项目的一个阶段的Delay，从而受到了项目经理的表扬与人事经理的特批奖赏。"
	};
	let highlights = {
		title:'Highlights',
		list:[
			'提供解决方案',
			'善于挑战攻坚',
			'促进团队氛围',
			'热爱钻研技术',
			'乐于助人解决问题',
			'代码清洁'
		]
	};
	let skill = {
		title:'Skill',
		target:'',
		showTarget:'',
		sort:'',
		skills:{
			JavaScript:{
				level:80,
				'ES6(ES2015)':{
					level:85,
					keywords:[
						'有使用基础JS完成过公司项目的经验',
						'掌握ES6绝大部分新特性并用以实践',
						'深刻了解ES6带来的各种语法糖',
						'明确各式JS插件与基础JS间的差别'
					]
				},
				JQuery:{
					level:95,
					keywords:[
						'有使用JQuery完成过公司项目的经验',
						'拥有一些基于JQuery的个人作品',
						'熟练掌握Selector并理解其设计',
						'长期维护基于JQuery的Chrome插件'
					]
				},
				'Vue.js':{
					level:60,
					keywords:[
						'初步理解了Vue框架的结构',
						'大致理解了Vue的框架实现',
						'本页面由Vue.js制作'
					]
				}
			},
			Html:{
				level:86,
				HTML5:{
					level:98,
					keywords:[
						'经常使用HTML制作各种小工具',
						'熟练掌握各种tag的使用',
						'对于深层结构略知一二'
					]					
				},
				CSS3:{
					level:95,
					keywords:[
						'有负责全部CSS样式的经验在多个项目中',
						'掌握几乎所有的CCS3的语法',
						'熟练掌握CSS3 Selector',
						'能够区分JQuery和CCS3 Selector之间的区别',
						'熟知CCS3实现不了的部分'
					]
				},
				'XHTML(JSF)':{
					level:90,
					keywords:[
						'有完成过基于XHTML(JSF)的公司项目的经验',
						'知晓并能够利用大多数JSF的tag解决需要的问题',
						'深刻了解template框架的构造与原理，并尝试仿制'
					]
				},
				'HTML(Vue.js)':{
					level:60,
					keywords:[
						'基本上掌握了Vue提供的属性的利用',
						'在Debug中学习到了Vue框架的实现原理',
						'该页面由Vue实现'
					]
				}
			},
			Java:{
				level:77,
				'Algorithms':{
					level:57,
					keywords:[
						'通过LeetCode学习并实践算法',
						'积累了一些算法解决经验'
					]
				},
				Spring:{
					level:83,
					keywords:[
						'有完成过后台基于Spring的公司项目经验',
						'熟练使用并掌握Spring框架',
						'对AOP以及Spring的内部实现有些见解'
					]
				},
				GoldDirect:{
					level:100,
					keywords:[
						'有完成过后台基于GoldDirect的公司项目经验',
						'深度研究过GoldDirect框架的实现机制',
						'有尝试通过模仿GoldDirect自制框架'
					]
				},
				Application:{
					level:70,
					keywords:[
						'有完成过基于Java Swing的个人作品',
						'拥有对可视化model的制作的经验',
						'并不推荐用Java做可视化小软件…'
					]
				}

			},
			Language:{
				level:88,
				Chinese:{
					level:100,
					keywords:[
						'母语',
						'熟练掌握方言中原官话与普通话',
						'略能理解吴语系方言',
						'对粤语无能为力'
					]
				},
				Japanese:{
					level:90,
					keywords:[
						'第一外语',
						'可娴熟的与客户沟通',
						'可担当与日本客户沟通的窗口',
						'可兼任翻译，文档写作等职务',
						'有诸如日语N1等证书'
					]
				},
				English:{
					level:75,
					keywords:[
						'第二外语',
						'可撰写非专业性文稿',
						'可确保程序命名正确符合语言学'
					]
				},
				French:{
					level:35,
					keywords:[
						'第三外语',
						'可确保程序命名正确符合语言学'
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
			job:'Application Developer',
			startDate:'2017-09',
			endDate:'',
			company:'IBM Client Innovation Center',
			projects:[
			{
				name:'Apollon',
				technic:{Web:'JS(ES6)', Server:'Java'},
				detail:'基于GoldDirect框架的全栈业务开发，<br />品质向上的代码审查，以及自动化测试的现地负责。',
				highlights:[
					'多次召开学习会，<br />指导同事们如何更好的规范的使用自动化测试工具',
					'在Leader的认可下，<br />	攒写并完善自动化测试工具SWAT的使用规范',
					'基于不完整的外部设计书与欠缺内部设计书的情况下，<br />完成独立业务的开发并保持低障害率',
					'在日方突发紧急案件时，<br />展开迅速、并且有效的业务逻辑攻坚',
					'在开发测试结束后为提高项目品质，<br />进行代码复审'
				]
			},
			{
				name:'SMTB 年金企划',
				technic:{Web:'JS(ES6),JQuery', Server:'Java'},
				detail: '对内部设计书进行Review，发现业务逻辑问题以及各种细节问题。<br />在JSF的框架下，进行前端设计的调整，使其符合外部设计。',
				highlights:[
					'仔细检查，<br />确保内部设计书的业务逻辑符合外部设计书',
					'确保画面与外部设计书中的印象图一致，<br />精细到像素点级别的画面精修',
					'与技术Leader连携，<br />	展开各种疑难问题的处理对应'
				]
			}
			]
		},
		{
			key:1,
			job:'External Designer',
			startDate:'2017-02',
			endDate:'2017-09',
			company:'Pioneer Suntec',
			projects:[
			{
				name:'TAM DA',
				technic:{UI:'Unix', Program:'C++'},
				detail:'了解印度尼西亚客户需求，与客户沟通，并交付设计方案与客户。',
				highlights:[
					'担当了新规机能相关的产品设计书的编写与管理的工作',
					'与开发测试多次展开DR会议，以在需求与业务上取得平衡',
					'直接向日本与台湾客户汇报进度'
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
			name:'GravityBall',
			link:'GravityBall',
			linkType:'Github',
			type:'game',
			keyword:'Html,CSS3,JS(ES6),JQuery',
			detail:'基于JQuery制成的HTML5小游戏，目前已建立好框体的基本结构与算法。<br />	可参照我的Github Link。',
			URL:'https://shosetsu.github.io/GravityBall/'
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
			contents:[work]
		}*/]
	};
	document.title="Kaiyuan Zheng's " + document.title;
	var title = new Vue({
		el: '.title-bar',
		data: function() {
				return {
				firstName:'Kaiyuan',
				lastName:'Zheng',
				telephone:'13167180710',
				mailAdress:'Shosetsu.rr@outlook.com',
				githubLink:'github.com/Shosetsu/'
			}
		},
		methods:{
			openLink: function(repositoryName,linkType){
				if(linkType&&linkType.toLowerCase()==="github"){
					return window.open("https://github.com/Shosetsu/"+repositoryName,"github");
				}else if(typeof(repositoryName)=="string"){
					return window.open(repositoryName);
				}else{
					return window.open("https://github.com/Shosetsu/","github");
				}
			}
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
		} ,
		computed: {
			targetSkillListLeft: function () {
				if(!this.skill.target){
					return this.sortList(this.skill.skills,this.skill.sort);
				}else{
					let list = {};
					for (obj in this.skill.skills[this.skill.target]){
						if(obj=="level") continue;
						list[obj]=this.skill.skills[this.skill.target][obj];
					}
					return this.sortList(list,this.skill.sort);
				}
			},
			targetSkillListRight: function () {
				if(!this.skill.showTarget){
					return ['...'];
				}else{
					return this.skill.skills[this.skill.target][this.skill.showTarget].keywords;
				}
			}
		},
		methods:{
			openLink: function(repositoryName,linkType){
				if(linkType&&linkType.toLowerCase()==="github"){
					return window.open("https://github.com/Shosetsu/"+repositoryName,"github");
				}else if(typeof(repositoryName)==="string"){
					return window.open(repositoryName);
				}else{
					return window.open("https://github.com/Shosetsu/","github");
				}
			},
			setTarget: function(target){
				this.skill.target = target;
				this.skill.showTarget = !target?target:this.skill.showTarget;
			},
			setShowTarget: function(showTarget){
				this.skill.showTarget = showTarget;
			},
			sortList: function(skills,sortConfig){
				if(!sortConfig)return skills;
				let levels = [];
				let newlist = {};
				for(let key in skills){
					levels.push(skills[key]["level"]);
				}
				if(sortConfig.toLowerCase()==="desc"){
					levels.sort(((a,b)=> a<b));
				}else if (sortConfig.toLowerCase()==="asc"){
					levels.sort(((a,b)=> a>b));
				}
				levels.forEach(function(level){
					for(let key in skills){
						if(level==skills[key]["level"]){
							newlist[key]=skills[key];
							break;
						}
					}
				});
				return newlist;
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
	document.body.style.overflowY='scroll';
}