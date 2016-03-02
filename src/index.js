var Vue = require('vue');
var VueRouter = require('vue-router');

// vue config
Vue.use(VueRouter);
Vue.config.debug = true;

// register views
Vue.component('v-bar', require('./views/bar'));
Vue.component('v-line', require('./views/pie'));
Vue.component('v-pie', require('./views/pie'));

// app setup
var App = Vue.extend({
    template: require('./template.html'),
    replace: false
});

// router setup
var Router = new VueRouter({
    history: false
});

Router.map({
    '/bar': {
        component: Vue.component('v-bar')
    },
    '/line': {
        component: Vue.component('v-line')
    },
    '/pie': {
        component: Vue.component('v-pie')
    }
});

Router.redirect({
    '*': '/bar'
});

Router.start(App, '#app');



