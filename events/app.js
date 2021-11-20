new Vue({
    el: '#vue-app',
    data: {
        age: 25,
        x:0,
        y:0
    },
    methods:{
        add: function(inc){
            this.age+=inc
        },
        subtrack: function(dec){
            this.age-=dec
        },
        updateXY: function(inc,event){
            // console.log(event)
            this.x = event.offsetX+inc
            this.y = event.offsetY+inc
        },
        click: function(){
            alert('test')
        }
    }

});