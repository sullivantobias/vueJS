/**
 * First Vue Test
 */

new Vue({
   el: '#testComponent',
   data: {
      bodyMessage: 'Hey this is the first component with vueJS',
      hoverMessage: 'You see me because you hover me',
      visible: true,
   },
   methods: {
      makeDisapear() {
         this.visible = !this.visible;
      },
      messageToUpperCase() {
         console.log(this.bodyMessage.toUpperCase());
      },
   },
});

/**
 * First Component
 */

Vue.component('first-component', {
   data: function() {
      return {
         count: 0,
      };
   },
   template:
      '<strong v-on:click=\'count = count + 10\'>Hey i\'m a component, the counter is : {{ count }}</strong>',
});

new Vue({
   el: '#test-first-component',
});

/**
 * List Component
 */

Vue.component('list-component', {
   props: ['play'],
   template: '<li> {{play.text}} </li>',
});

new Vue({
   el: '#list-test',
   data: {
      listItem: [
         {id: 1, text: 'Playstation'},
         {id: 2, text: 'Xbox'},
         {id: 3, text: 'Gamecube'},
         {id: 4, text: 'Switch'},
      ],
   },
});
