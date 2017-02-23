//基本
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }

// const routes = [
//     { path: '/foo', component: Foo},
//     { path: '/bar', component: Bar}
// ]

// const router = new VueRouter({
//     routes: routes
// })

// const app = new Vue({
//     router
// }).$mount('#app')

/*


// 动态配置路由


 */
// const User = { template: '<div> User {{$route.params.id}}</div>'}

// const router = new VueRouter({
//     routes: [
//         {path: '/user/:id' , component: User }
//     ]
// })

// const app = new Vue({ router }).$mount('#app')

// const User = {
//   template: '',
//   watch: {
//     '$route' (to, from) {
//       // 对路由变化作出响应...
//     }
//   }
// }



/*

//嵌套路由


 */
const User = {
    template: '<div class="user"><h2>User {{$route.params.id}}</h2><router-view></router-view></div>'
}

const Home = {
    template: '<div> home </div>'
}

const UserProfile = {
    template: '<div> up1 {{$route.params.id}} </div>'
}

const UserPosts = {
    template: '<div> up2 {{$route.params.id}} </div>'
}

const router = new VueRouter({
    routes: [
        {
            path: '/user/:id' , component: User,
            children: [
                {
                    path: '',
                    //重定向
                    //redirect: '/b',
                    //redirect: {name:'foo'},
                    /*redirect: to => {
                        //方法接受 目标路由作为参数
                        //return 重定向的字符串路径或路径对象
                    },*/
                    component: Home
                },
                {
                    path: 'profile',
                    component: UserProfile
                },
                {
                    path: 'posts',
                    component: UserPosts
                }
            ]
        }
    ]
})

const app = new Vue({router}).$mount('#app')


