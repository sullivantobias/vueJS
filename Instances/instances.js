/**
 * list VIEW
 */

let list = new Vue({
   el: '#game-list',
   data: {
      games: ['Mario', 'Sonic', 'Pacman'],
      newGame: '',
      success: true,
   },
   methods: {
      addGame() {
         this.games.push(this.newGame);
      },
   },
});

/**
 * Timer VIEW
 * https://vuejs.org/v2/guide/instance.html
 */

let timer = new Vue({
   el: '.timer',
   data: {
      minutes: 0,
      seconds: 0,
   },
   beforeCreate() {
      console.log('The element is not created yet');
   },
   created() {
      console.log('The element is created');
   },
   beforeMount() {
      console.log('The element is not mounted yet');
   },
   /** Mounted is called to be sure the element exists */
   mounted() {
      console.log('Element Mounted');
      this.updateTimer();
   },
   beforeUpdate() {
      console.log('The element will be updated');
   },
   updated() {
      console.log('The element is updated');
   },
   beforeDestroy() {
      console.log('The element will be destroyed');
   },
   /** Destroy is called to 'destroy' the actual instance */
   destroyed() {
      console.log('Element Destroyed');
      this.clearTimer();
   },
   methods: {
      updateTimer() {
         this.$myTimer = setInterval(() => {
            this.seconds++;
            if (this.seconds == 60) {
               this.seconds = 0;
               this.minutes++;
            }
         }, 1000);
      },
      clearTimer() {
         clearInterval(this.$myTimer);
      },
   },
});
