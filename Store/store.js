/**
 * @class NotificationsStore
 */
class NotificationsStore {
   /**
    * @constructor
    */
   constructor() {
      this.state = {
         count: 0,
      };
   }

   /**
    * @method increment
    */
   increment() {
      this.state.count++;
   }

   /**
    * @method decrement
    */
   decrement() {
      this.state.count--;
   }
}

const notificationsS = new NotificationsStore();

let counter = {
   data() {
      return {
         state: notificationsS.state,
      };
   },
   computed: {
      count() {
         return this.state.count;
      },
   },
   template: `<div> {{ count }} </div>`,
};

let notifications = {
   components: {counter},
   methods: {
      addNotifications() {
         notificationsS.increment();
      },
      removeNotifications() {
         notificationsS.decrement();
      },
   },
   template: `<div>
   <counter></counter>
    <button @click="addNotifications">Increment</button>
    <button @click="removeNotifications">Increment</button>
    </div>`,
};

new Vue({
   el: '#store',
   components: {notifications, counter},
});
