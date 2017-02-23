

const Home = {
    template: '<div> this is home</div>'
}

const Foo = {
    template: '<div> this is foo </div>'
}

const Bar = {
    template: '<div>this is bar {{$route.params.id}}</div>'
}

const router = new VueRouter({
    mode: 'history',
    //当你在 HTML5 history 模式下使用 base 选项之后，所有的 to 属性都不需要写（基路径）了。
    base: './'
    routes: [
        {
            path: '' ,name: 'home', component: Home
        },
        {
            path: 'foo',name: 'foo', component: Foo
        },
        {
            path: 'bar/:id',name: 'bar', component: Bar
        }
    ]
})

new Vue({
    router,
    template:`
    <div id="#app">
        <h1>named-route</h1>
        <p>current route name: {{$route.name}}</p>
        <ul>
            <li><router-link :to="{name: 'home'}">home</router-link></li>
            <li><router-link :to="{name: 'foo'}">foo</router-link></li>
            <li><router-link :to="{name: 'bar', params:{id:123}}">bar</router-link></li>
        </ul>
    </div>
    `
}).$mount('#app')