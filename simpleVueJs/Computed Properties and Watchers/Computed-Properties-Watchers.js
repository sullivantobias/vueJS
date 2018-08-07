/**
 * Computed Properties
 */

new Vue({
   el: '#test',
   data: {
      theClass: '',
   },
   computed: {
      chosenClass: {
         get() {
            return this.theClass;
         },
         set(newClass) {
            this.theClass = newClass;
         },
      },
   },
});

/**
 * Watcher
 */

new Vue({
   el: '#test2',
   data: {
      theClass: '',
   },
   watch: {
      theClass(newValue) {
         this.theClass = newValue;
      },
   },
});
