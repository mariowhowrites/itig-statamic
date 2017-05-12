/**
 * Created by mario on 5/11/17.
 */

import Vue from 'vue';
import Notification from './components/Notification.vue';

new Vue({
    el: '#app',
    components: { Notification },
    template: '<notification></notification>'
});