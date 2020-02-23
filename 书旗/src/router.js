import Vue from 'vue';
import Router from 'vue-router';
import index from "./com/index.vue";
import n1 from "./com/n1.vue"
import n2 from "./com/n2.vue"
import n3 from "./com/n3.vue"
import n4 from "./com/n4.vue"
import n5 from "./com/n5.vue"


Vue.use(Router)
export default new Router({
    routes:[
        {
            path:'/',name:'index',component:index
        },{
            path:'/n1',name:'n1',component:n1
        },{
            path:'/n2',name:'n2',component:n2
        },{
            path:'/n3',name:'n3',component:n3
        },{
            path:'/n4',name:'n4',component:n4
        },{
            path:'/n5',name:'n5',component:n5
        }
    ]
})
