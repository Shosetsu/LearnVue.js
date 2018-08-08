var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    name: 'App Name'
  }
})
var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: true
  },
  methods: {
    judge: function () {
      this.seen = Math.random()>0.5;
    }
  }
})
var app4 = new Vue({
  el: '#app-4',
  data: {
    message:"",
    typeList:[
      {text:"text1",time:"2018/08/05 08:26:55"},
      {text:"End",time:"2018/08/07 12:01:47"},
      {text:"Choque",time:"2018/08/08 09:35:02"}
    ]
  },
  methods: {
    add: function () {
      this.typeList.push({text:this.message,time:getTime()});
      this.message="";
    }
  }
})
Vue.component('review', {
  props: ['number'],
  template: '<div>just template, the lucky number is {{number}}</div>'
})
var app5 = new Vue({
  el: '#app-5',
  data: {
    fool:98756123
  }
})