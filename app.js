new Vue({
    el: '#vue-app',
    data: {
        name: 'Shaun',
        job: 'ninja',
        website:'https://google.com',
        websiteTag:'<a href="https://google.com">website test</a>'
    },
    methods:{
        greet: function( time ){
            return "Good " + time + ' ' + this.name
        }
    }
});