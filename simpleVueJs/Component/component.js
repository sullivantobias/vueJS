/**
 * Component Test
 */
let message = {
   props: {
      componentclass: {type: String, default: 'alert-success'},
      msg: {type: String, default: 'My Default Component'},
      header: {type: String, default: 'Warning'},
   },
   template: `<div :class="componentclass">
   <slot name="header"></slot>
   <button @click.prevent="close" type="button" class="close" aria-label="Close">
    <span aria-hidden="true">&times;</span>
   </button>
   <h1> {{header}} </h1>
   {{ msg }}
   <slot name="footer"></slot>
    </div>`,

   methods: {
      close() {
         this.$emit('close');
      },
   },
};

/**
 * Counter Component
 */

let countertest = {
   data() {
      return {count: 0};
   },
   props: {
      incrementNumber: {type: Number, default: 2},
      decrementNumber: {type: Number, default: 1},
   },
   methods: {
      increment() {
         this.count += this.incrementNumber;
      },
      decrement() {
         this.count -= this.decrementNumber;
      },
   },
   template: `<div>
            {{ count }}
            <button @click="increment">Increment + {{incrementNumber}}</button>
            <button @click="decrement">Decrement - {{decrementNumber}}</button>
   </div>`,
};

new Vue({
   el: '#componentTest',
   components: {message, countertest},
   data: {
      message: 'My Dynamic component',
      classComponent: 'alert-info',
      visible: true,
   },

   methods: {
      show() {
         this.visible = true;
      },
      hiddenAlert() {
         this.visible = false;
      },
   },
});
