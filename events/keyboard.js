new Vue({

    el: "#vue-app",
    data: {
        name:'张三',
        age:''
    },
    methods:{
        logName:function(event){
            console.log(event)
            this.name+=event.key
        },
        logAge:function(event){
            console.log(event)
            this.age+=event.key
        }
    }
})